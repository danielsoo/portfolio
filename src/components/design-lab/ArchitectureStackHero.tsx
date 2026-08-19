"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const LAYERS = [
  { name: "PRODUCT / UI", color: "#a5b4fc", y: 2.3, detail: "React · Next.js" },
  { name: "API / ORCHESTRATION", color: "#818cf8", y: 1.15, detail: "NestJS · Workers" },
  { name: "ROUTING / MODELS", color: "#67e8f9", y: 0, detail: "LLM · Semantic Router" },
  { name: "EVALUATION", color: "#22d3ee", y: -1.15, detail: "A/B · Quality Platform" },
  { name: "MEMORY / DATA", color: "#6366f1", y: -2.3, detail: "MongoDB · Mem0" },
] as const;

const MODULES = [
  [-1.75, -0.55], [-0.65, 0.55], [0.55, -0.25], [1.65, 0.55],
] as const;

function StackScene() {
  const groupRef = useRef<THREE.Group>(null!);
  const signalRef = useRef<THREE.Mesh>(null!);
  const prefersReducedMotion = useReducedMotion();

  const connectorPositions = useMemo(
    () => new Float32Array([0, 3.2, 0, 0, -3.2, 0]),
    [],
  );

  useFrame(({ clock, pointer }, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        prefersReducedMotion ? -0.5 : -0.5 + pointer.x * 0.08,
        3,
        delta,
      );
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        prefersReducedMotion ? -0.16 : -0.16 - pointer.y * 0.035,
        3,
        delta,
      );
    }

    if (signalRef.current) {
      const progress = prefersReducedMotion ? 0.5 : (clock.elapsedTime % 5) / 5;
      signalRef.current.position.y = THREE.MathUtils.lerp(3.1, -3.1, progress);
      signalRef.current.rotation.y = clock.elapsedTime * 0.8;
    }
  });

  return (
    <group ref={groupRef} rotation={[-0.16, -0.5, 0.05]}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[connectorPositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#a5f3fc" transparent opacity={0.35} />
      </lineSegments>

      {LAYERS.map((layer, layerIndex) => (
        <group key={layer.name} position={[0, layer.y, 0]}>
          <mesh>
            <boxGeometry args={[5.4, 0.13, 3.15]} />
            <meshStandardMaterial
              color={layer.color}
              transparent
              opacity={0.12}
              metalness={0.15}
              roughness={0.5}
              depthWrite={false}
            />
          </mesh>
          <mesh>
            <boxGeometry args={[5.4, 0.14, 3.15]} />
            <meshBasicMaterial color={layer.color} transparent opacity={0.28} wireframe />
          </mesh>
          {MODULES.map(([x, z], moduleIndex) => (
            <mesh
              key={`${layer.name}-${moduleIndex}`}
              position={[x, 0.17, z + (layerIndex % 2 === 0 ? 0 : -0.18)]}
            >
              <boxGeometry args={[0.62 + moduleIndex * 0.07, 0.16, 0.5]} />
              <meshStandardMaterial
                color={layer.color}
                emissive={layer.color}
                emissiveIntensity={0.18}
                transparent
                opacity={0.62}
              />
            </mesh>
          ))}
        </group>
      ))}

      <mesh ref={signalRef} position={[0, 3.1, 0]}>
        <octahedronGeometry args={[0.16, 0]} />
        <meshBasicMaterial color="#ecfeff" />
      </mesh>
    </group>
  );
}

export default function ArchitectureStackHero() {
  return (
    <section className="relative min-h-[calc(100vh-7.5rem)] overflow-hidden bg-[#080b12]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(34,211,238,0.10),transparent_34%),radial-gradient(circle_at_52%_75%,rgba(99,102,241,0.11),transparent_38%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7.5rem)] max-w-[1500px] items-center gap-8 px-6 py-16 lg:grid-cols-[0.78fr_1.22fr] lg:px-12">
        <div className="relative z-20 max-w-xl">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-300/65">
            02 / Exploded Architecture Stack
          </p>
          <h1 className="text-5xl font-black leading-[0.96] tracking-[-0.05em] sm:text-6xl xl:text-7xl">
            I build across
            <br />
            <span className="bg-gradient-to-r from-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              the whole system.
            </span>
          </h1>
          <p className="mt-7 max-w-md text-sm leading-7 text-white/48 sm:text-base">
            From user experience to routing logic, evaluation infrastructure, and long-term memory—the layers move as one product.
          </p>
        </div>

        <div className="relative h-[34rem] min-w-0 sm:h-[40rem]">
          <Canvas camera={{ position: [7.8, 5.8, 9.5], fov: 42 }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.7} />
            <directionalLight position={[4, 8, 6]} intensity={1.2} color="#dbeafe" />
            <StackScene />
          </Canvas>

          <div className="pointer-events-none absolute right-0 top-1/2 hidden w-48 -translate-y-1/2 space-y-3 xl:block">
            {LAYERS.map((layer, index) => (
              <div key={layer.name} className="border-l border-white/12 pl-3">
                <p className="font-mono text-[9px] tracking-[0.16em]" style={{ color: layer.color }}>
                  0{index + 1} / {layer.name}
                </p>
                <p className="mt-1 text-[10px] text-white/28">{layer.detail}</p>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.22em] text-white/22">
            Pointer moves the system · signal crosses every layer
          </div>
        </div>
      </div>
    </section>
  );
}
