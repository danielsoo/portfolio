"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 58;
const SPREAD_XY = 9;
const SPREAD_Z = 5;
const CONNECT_DIST = 3.4;
const MAX_CONN = 4;
const PULSE_COUNT = 10;

export default function NetworkGraph() {
  const groupRef = useRef<THREE.Group>(null!);
  const pulseRef = useRef<THREE.Points>(null!);

  // Node positions
  const nodes = useMemo<[number, number, number][]>(() => {
    return Array.from({ length: NODE_COUNT }, () => [
      (Math.random() - 0.5) * SPREAD_XY * 2,
      (Math.random() - 0.5) * SPREAD_XY * 1.1,
      (Math.random() - 0.5) * SPREAD_Z * 2,
    ]);
  }, []);

  // Edges — connect nearby nodes, cap per-node degree
  const edges = useMemo<[number, number][]>(() => {
    const result: [number, number][] = [];
    const deg = new Array(NODE_COUNT).fill(0);
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (deg[i] >= MAX_CONN || deg[j] >= MAX_CONN) continue;
        const dx = nodes[i][0] - nodes[j][0];
        const dy = nodes[i][1] - nodes[j][1];
        const dz = nodes[i][2] - nodes[j][2];
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < CONNECT_DIST) {
          result.push([i, j]);
          deg[i]++;
          deg[j]++;
        }
      }
    }
    return result;
  }, [nodes]);

  // Static buffers
  const linePositions = useMemo(() => {
    const buf = new Float32Array(edges.length * 6);
    edges.forEach(([i, j], e) => {
      buf[e * 6 + 0] = nodes[i][0]; buf[e * 6 + 1] = nodes[i][1]; buf[e * 6 + 2] = nodes[i][2];
      buf[e * 6 + 3] = nodes[j][0]; buf[e * 6 + 4] = nodes[j][1]; buf[e * 6 + 5] = nodes[j][2];
    });
    return buf;
  }, [edges, nodes]);

  const nodePositions = useMemo(() => {
    const buf = new Float32Array(NODE_COUNT * 3);
    nodes.forEach(([x, y, z], i) => { buf[i * 3] = x; buf[i * 3 + 1] = y; buf[i * 3 + 2] = z; });
    return buf;
  }, [nodes]);

  // Pulse state (mutable, no re-renders)
  const pulses = useMemo(() =>
    Array.from({ length: PULSE_COUNT }, () => ({
      edge: Math.floor(Math.random() * edges.length),
      t: Math.random(),
      speed: 0.004 + Math.random() * 0.005,
    })),
  [edges]);

  const pulseBuf = useMemo(() => new Float32Array(PULSE_COUNT * 3), []);

  useFrame(({ clock }) => {
    // Rotate whole graph slowly
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.018) * 0.12;
    }

    // Advance pulses along edges
    pulses.forEach((p, i) => {
      p.t += p.speed;
      if (p.t > 1) {
        p.t = 0;
        p.edge = Math.floor(Math.random() * edges.length);
      }
      const [ai, bi] = edges[p.edge];
      pulseBuf[i * 3 + 0] = nodes[ai][0] + (nodes[bi][0] - nodes[ai][0]) * p.t;
      pulseBuf[i * 3 + 1] = nodes[ai][1] + (nodes[bi][1] - nodes[ai][1]) * p.t;
      pulseBuf[i * 3 + 2] = nodes[ai][2] + (nodes[bi][2] - nodes[ai][2]) * p.t;
    });
    if (pulseRef.current) {
      (pulseRef.current.geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Edges */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#6366f1" transparent opacity={0.18} />
      </lineSegments>

      {/* Nodes */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.07} color="#818cf8" transparent opacity={0.75} sizeAttenuation depthWrite={false} />
      </points>

      {/* Pulses */}
      <points ref={pulseRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pulseBuf, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.16} color="#a5f3fc" transparent opacity={0.95} sizeAttenuation depthWrite={false} />
      </points>
    </group>
  );
}
