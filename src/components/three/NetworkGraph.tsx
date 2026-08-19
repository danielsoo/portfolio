"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import * as THREE from "three";

type Node = {
  id: string;
  position: [number, number, number];
  key?: boolean;
};

type Edge = readonly [number, number];

const NODES: readonly Node[] = [
  { id: "query", position: [-8.8, 1.8, 0] },
  { id: "normalize", position: [-7, 1.8, 0] },
  { id: "router", position: [-5.1, 0.8, 0.15], key: true },
  { id: "vision", position: [-5.1, 3.2, -0.35] },
  { id: "catalog", position: [-3, 2.15, 0.15] },
  { id: "llm", position: [-2.8, -0.2, 0.1] },
  { id: "fallback", position: [-2.8, -2.7, -0.3] },
  { id: "policy", position: [-0.3, 2.8, 0.1] },
  { id: "eval", position: [-0.2, 0.7, 0.2], key: true },
  { id: "memory", position: [-0.2, -1.9, 0.15], key: true },
  { id: "experiment", position: [2.4, 2.7, -0.2] },
  { id: "rank", position: [2.5, 0.7, 0.2] },
  { id: "retrieve", position: [2.5, -1.9, -0.15] },
  { id: "guard", position: [4.8, 1.7, 0.05] },
  { id: "personalize", position: [4.8, -0.7, 0.05] },
  { id: "recommend", position: [7.2, 0.7, 0.1], key: true },
  { id: "response", position: [8.8, 0.7, 0] },
  { id: "trace", position: [7.2, -2.2, -0.35] },
] as const;

const EDGES: readonly Edge[] = [
  [0, 1], [1, 2],
  [2, 3], [2, 4], [2, 5], [2, 6],
  [3, 8], [4, 8], [5, 8], [6, 8],
  [8, 7], [7, 10], [8, 11], [8, 9],
  [9, 12], [10, 13], [11, 13], [12, 14],
  [13, 15], [14, 15], [15, 16], [15, 17],
] as const;

const ACTIVE_ROUTE = [0, 1, 2, 5, 8, 9, 12, 14, 15, 16] as const;
const TRAIL_COUNT = 5;
const CYCLE_DURATION = 6;
const ACTIVE_DURATION = 4.8;

const BASE_NODE = new THREE.Color("#6366f1");
const ACTIVE_NODE = new THREE.Color("#a5f3fc");
function orthogonalPoints(from: Node, to: Node) {
  const [x1, y1, z1] = from.position;
  const [x2, y2, z2] = to.position;
  const middleX = (x1 + x2) / 2;
  const middleZ = (z1 + z2) / 2;

  return [
    new THREE.Vector3(x1, y1, z1),
    new THREE.Vector3(middleX, y1, middleZ),
    new THREE.Vector3(middleX, y2, middleZ),
    new THREE.Vector3(x2, y2, z2),
  ];
}

function segmentBuffer(edges: readonly Edge[]) {
  const positions: number[] = [];

  edges.forEach(([fromIndex, toIndex]) => {
    const points = orthogonalPoints(NODES[fromIndex], NODES[toIndex]);
    for (let index = 0; index < points.length - 1; index += 1) {
      positions.push(...points[index].toArray(), ...points[index + 1].toArray());
    }
  });

  return new Float32Array(positions);
}

function routePoints(route: readonly number[]) {
  const points: THREE.Vector3[] = [];

  route.slice(0, -1).forEach((fromIndex, index) => {
    const edgePoints = orthogonalPoints(NODES[fromIndex], NODES[route[index + 1]]);
    points.push(...(index === 0 ? edgePoints : edgePoints.slice(1)));
  });

  return points;
}

function routeSegmentBuffer(points: readonly THREE.Vector3[]) {
  const positions: number[] = [];
  for (let index = 0; index < points.length - 1; index += 1) {
    positions.push(...points[index].toArray(), ...points[index + 1].toArray());
  }
  return new Float32Array(positions);
}

function sampleRoute(
  points: readonly THREE.Vector3[],
  cumulativeLengths: readonly number[],
  totalLength: number,
  progress: number,
  target: THREE.Vector3,
) {
  const distance = THREE.MathUtils.clamp(progress, 0, 1) * totalLength;
  let segmentIndex = 0;

  while (
    segmentIndex < cumulativeLengths.length - 2 &&
    cumulativeLengths[segmentIndex + 1] < distance
  ) {
    segmentIndex += 1;
  }

  const segmentStart = cumulativeLengths[segmentIndex];
  const segmentLength = cumulativeLengths[segmentIndex + 1] - segmentStart;
  const localProgress = segmentLength === 0 ? 0 : (distance - segmentStart) / segmentLength;

  return target.lerpVectors(points[segmentIndex], points[segmentIndex + 1], localProgress);
}

export default function NetworkGraph() {
  const prefersReducedMotion = useReducedMotion();
  const groupRef = useRef<THREE.Group>(null!);
  const nodesRef = useRef<THREE.Points>(null!);
  const activeLineRef = useRef<THREE.LineSegments>(null!);
  const packetRef = useRef<THREE.Mesh>(null!);
  const pulseRef = useRef<THREE.Points>(null!);
  const pulseMaterialRef = useRef<THREE.PointsMaterial>(null!);
  const activeLineMaterialRef = useRef<THREE.LineBasicMaterial>(null!);

  const baseLinePositions = useMemo(() => segmentBuffer(EDGES), []);
  const activePathPoints = useMemo(() => routePoints(ACTIVE_ROUTE), []);
  const activeLinePositions = useMemo(
    () => routeSegmentBuffer(activePathPoints),
    [activePathPoints],
  );
  const nodePositions = useMemo(
    () => new Float32Array(NODES.flatMap((node) => node.position)),
    [],
  );
  const nodeColors = useMemo(
    () => new Float32Array(NODES.flatMap(() => BASE_NODE.toArray())),
    [],
  );
  const initialPulsePositions = useMemo(() => new Float32Array(TRAIL_COUNT * 3), []);
  const routeMetrics = useMemo(() => {
    const cumulativeLengths = [0];
    for (let index = 1; index < activePathPoints.length; index += 1) {
      cumulativeLengths.push(
        cumulativeLengths[index - 1] +
          activePathPoints[index - 1].distanceTo(activePathPoints[index]),
      );
    }

    const totalLength = cumulativeLengths[cumulativeLengths.length - 1];
    const nodeProgress = ACTIVE_ROUTE.map((nodeIndex) => {
      const routePointIndex = activePathPoints.findIndex((point) =>
        point.equals(new THREE.Vector3(...NODES[nodeIndex].position)),
      );
      return cumulativeLengths[routePointIndex] / totalLength;
    });

    return { cumulativeLengths, totalLength, nodeProgress };
  }, [activePathPoints]);
  const crossPositions = useMemo(() => {
    const positions: number[] = [];
    NODES.forEach((node) => {
      if (!node.key) return;
      const [x, y, z] = node.position;
      const size = 0.16;
      positions.push(
        x - size, y, z, x + size, y, z,
        x, y - size, z, x, y + size, z,
      );
    });
    return new Float32Array(positions);
  }, []);
  const samplePointRef = useRef(new THREE.Vector3());
  const tempColorRef = useRef(new THREE.Color());

  useFrame(({ clock, pointer }, delta) => {
    const cycleTime = prefersReducedMotion ? 0 : clock.elapsedTime % CYCLE_DURATION;
    const isActive = !prefersReducedMotion && cycleTime <= ACTIVE_DURATION;
    const progress = prefersReducedMotion
      ? 0
      : THREE.MathUtils.smootherstep(cycleTime / ACTIVE_DURATION, 0, 1);

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        prefersReducedMotion ? 0 : pointer.x * 0.017,
        4,
        delta,
      );
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        prefersReducedMotion ? 0 : -pointer.y * 0.012,
        4,
        delta,
      );
      groupRef.current.position.x = THREE.MathUtils.damp(
        groupRef.current.position.x,
        prefersReducedMotion ? 0 : pointer.x * 0.12,
        4,
        delta,
      );
      groupRef.current.position.y = THREE.MathUtils.damp(
        groupRef.current.position.y,
        prefersReducedMotion ? 0 : pointer.y * 0.08,
        4,
        delta,
      );
    }

    for (let index = 0; index < TRAIL_COUNT; index += 1) {
      const trailProgress = progress - index * 0.012;
      const samplePoint = samplePointRef.current;
      sampleRoute(
        activePathPoints,
        routeMetrics.cumulativeLengths,
        routeMetrics.totalLength,
        Math.max(0, trailProgress),
        samplePoint,
      );
      if (pulseRef.current) {
        const pulseAttribute = pulseRef.current.geometry.attributes.position as THREE.BufferAttribute;
        pulseAttribute.setXYZ(index, samplePoint.x, samplePoint.y, samplePoint.z + 0.04);
      }
    }

    if (pulseRef.current) {
      (pulseRef.current.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    }
    if (packetRef.current) {
      sampleRoute(
        activePathPoints,
        routeMetrics.cumulativeLengths,
        routeMetrics.totalLength,
        progress,
        samplePointRef.current,
      );
      packetRef.current.position.copy(samplePointRef.current);
      packetRef.current.position.z += 0.055;
      packetRef.current.visible = isActive;
    }
    if (pulseMaterialRef.current) {
      pulseMaterialRef.current.opacity = isActive ? 0.92 : 0;
    }
    if (activeLineRef.current) {
      const totalVertices = activeLinePositions.length / 3;
      const visibleVertices = isActive
        ? Math.min(totalVertices, Math.ceil((progress * totalVertices) / 2) * 2)
        : totalVertices;
      activeLineRef.current.geometry.setDrawRange(0, visibleVertices);
    }
    if (activeLineMaterialRef.current) {
      activeLineMaterialRef.current.opacity = isActive
        ? 0.34 + Math.sin(clock.elapsedTime * 1.4) * 0.045
        : 0.12;
    }

    if (nodesRef.current) {
      const colorAttribute = nodesRef.current.geometry.attributes.color as THREE.BufferAttribute;
      NODES.forEach((node, nodeIndex) => {
        const routeIndex = ACTIVE_ROUTE.indexOf(nodeIndex as (typeof ACTIVE_ROUTE)[number]);
        const routeProgress = routeIndex >= 0 ? routeMetrics.nodeProgress[routeIndex] : -1;
        const distanceBehind = progress - routeProgress;
        const intensity =
          isActive && routeProgress >= 0 && distanceBehind >= 0
            ? Math.exp(-distanceBehind * 18)
            : 0;
        const tempColor = tempColorRef.current;
        tempColor.copy(BASE_NODE).lerp(ACTIVE_NODE, intensity);
        colorAttribute.setXYZ(nodeIndex, tempColor.r, tempColor.g, tempColor.b);
      });
      colorAttribute.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[baseLinePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#818cf8" transparent opacity={0.22} depthWrite={false} />
      </lineSegments>

      <lineSegments ref={activeLineRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[activeLinePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          ref={activeLineMaterialRef}
          color="#22d3ee"
          transparent
          opacity={0.34}
          depthWrite={false}
        />
      </lineSegments>

      {NODES.filter((node) => node.key).map((node) => (
        <mesh key={node.id} position={node.position}>
          <boxGeometry args={[0.36, 0.36, 0.05]} />
          <meshBasicMaterial
            color="#67e8f9"
            transparent
            opacity={0.38}
            wireframe
            depthWrite={false}
          />
        </mesh>
      ))}

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[crossPositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#67e8f9" transparent opacity={0.42} depthWrite={false} />
      </lineSegments>

      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
          <bufferAttribute attach="attributes-color" args={[nodeColors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.105}
          vertexColors
          transparent
          opacity={0.88}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <points ref={pulseRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[initialPulsePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={pulseMaterialRef}
          size={0.15}
          color="#a5f3fc"
          transparent
          opacity={0.92}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <mesh ref={packetRef} visible={false}>
        <boxGeometry args={[0.19, 0.105, 0.045]} />
        <meshBasicMaterial color="#cffafe" transparent opacity={0.95} depthWrite={false} />
      </mesh>
    </group>
  );
}
