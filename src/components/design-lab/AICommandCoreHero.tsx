"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export function CommandCoreScene() {
  const groupRef = useRef<THREE.Group>(null!);
  const outerRingRef = useRef<THREE.Mesh>(null!);
  const middleRingRef = useRef<THREE.Mesh>(null!);
  const innerRingRef = useRef<THREE.Mesh>(null!);
  const scanRef = useRef<THREE.Mesh>(null!);
  const coreRef = useRef<THREE.Mesh>(null!);
  const orbitRef = useRef<THREE.Group>(null!);
  const prefersReducedMotion = useReducedMotion();

  const tickPositions = useMemo(() => {
    const positions: number[] = [];
    for (let index = 0; index < 48; index += 1) {
      const angle = (index / 48) * Math.PI * 2;
      const major = index % 6 === 0;
      const innerRadius = major ? 3.05 : 3.18;
      const outerRadius = 3.38;
      positions.push(
        Math.cos(angle) * innerRadius,
        Math.sin(angle) * innerRadius,
        0,
        Math.cos(angle) * outerRadius,
        Math.sin(angle) * outerRadius,
        0,
      );
    }
    return new Float32Array(positions);
  }, []);

  const spokePositions = useMemo(() => {
    const positions: number[] = [];
    [0, 0.25, 0.5, 0.75].forEach((fraction) => {
      const angle = fraction * Math.PI * 2 + Math.PI / 8;
      positions.push(
        Math.cos(angle) * 0.95,
        Math.sin(angle) * 0.95,
        0,
        Math.cos(angle) * 2.78,
        Math.sin(angle) * 2.78,
        0,
      );
    });
    return new Float32Array(positions);
  }, []);

  const orbitNodes = useMemo(
    () =>
      [
        [2.65, 0.4, 0.12],
        [-2.15, 1.5, -0.08],
        [-1.25, -2.35, 0.16],
        [1.72, -1.95, -0.12],
      ] as const,
    [],
  );

  useFrame(({ clock, pointer }, delta) => {
    const time = clock.elapsedTime;
    const motionScale = prefersReducedMotion ? 0 : 1;

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        pointer.x * 0.1 * motionScale,
        3,
        delta,
      );
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -pointer.y * 0.075 * motionScale,
        3,
        delta,
      );
    }
    if (outerRingRef.current) outerRingRef.current.rotation.z = time * 0.055 * motionScale;
    if (middleRingRef.current) middleRingRef.current.rotation.z = -time * 0.09 * motionScale;
    if (innerRingRef.current) innerRingRef.current.rotation.z = time * 0.14 * motionScale;
    if (scanRef.current) scanRef.current.rotation.z = time * 0.2 * motionScale;
    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.18 * motionScale;
      coreRef.current.rotation.y = time * 0.24 * motionScale;
      const scale = prefersReducedMotion ? 1 : 1 + Math.sin(time * 1.4) * 0.035;
      coreRef.current.scale.setScalar(scale);
    }
    if (orbitRef.current) orbitRef.current.rotation.z = -time * 0.045 * motionScale;
  });

  return (
    <group ref={groupRef} rotation={[0.08, -0.05, 0]}>
      <mesh ref={scanRef} position={[0, 0, -0.08]}>
        <ringGeometry args={[0.95, 3.05, 96, 1, 0, Math.PI / 5]} />
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.07}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      <mesh ref={outerRingRef} rotation={[0.08, 0.12, 0.2]}>
        <torusGeometry args={[3.05, 0.018, 6, 160, Math.PI * 1.72]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.52} depthWrite={false} />
      </mesh>
      <mesh ref={middleRingRef} rotation={[-0.16, 0.2, -0.5]}>
        <torusGeometry args={[2.38, 0.014, 6, 144, Math.PI * 1.45]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.48} depthWrite={false} />
      </mesh>
      <mesh ref={innerRingRef} rotation={[0.22, -0.12, 0.8]}>
        <torusGeometry args={[1.62, 0.018, 6, 128, Math.PI * 1.3]} />
        <meshBasicMaterial color="#a5f3fc" transparent opacity={0.58} depthWrite={false} />
      </mesh>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[tickPositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#67e8f9" transparent opacity={0.36} depthWrite={false} />
      </lineSegments>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[spokePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#818cf8" transparent opacity={0.18} depthWrite={false} />
      </lineSegments>

      <group ref={orbitRef}>
        {orbitNodes.map((position, index) => (
          <mesh key={position.join("-")} position={position}>
            <boxGeometry args={[index % 2 === 0 ? 0.14 : 0.1, 0.1, 0.08]} />
            <meshBasicMaterial color={index % 2 === 0 ? "#cffafe" : "#a5b4fc"} />
          </mesh>
        ))}
      </group>

      <mesh ref={coreRef}>
        <icosahedronGeometry args={[0.82, 1]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.38} wireframe depthWrite={false} />
      </mesh>
      <mesh>
        <octahedronGeometry args={[0.46, 0]} />
        <meshBasicMaterial color="#dbeafe" transparent opacity={0.2} depthWrite={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshBasicMaterial color="#ecfeff" />
      </mesh>
    </group>
  );
}

type HudPanelProps = {
  className: string;
  label: string;
  value: string;
  detail: string;
  accent?: "cyan" | "indigo";
};

function HudPanel({ className, label, value, detail, accent = "cyan" }: HudPanelProps) {
  const accentClasses =
    accent === "cyan"
      ? "border-cyan-300/25 text-cyan-200"
      : "border-indigo-300/25 text-indigo-200";

  return (
    <div
      className={`absolute w-36 border-l bg-[#071018]/55 px-3 py-2.5 font-mono backdrop-blur-sm sm:w-44 ${accentClasses} ${className}`}
    >
      <p className="text-[8px] uppercase tracking-[0.2em] opacity-50">{label}</p>
      <p className="mt-1 text-lg font-semibold tracking-tight sm:text-xl">{value}</p>
      <p className="mt-0.5 text-[8px] text-white/30 sm:text-[9px]">{detail}</p>
    </div>
  );
}

export default function AICommandCoreHero() {
  return (
    <section className="relative min-h-[calc(100vh-7.5rem)] overflow-hidden bg-[#03080d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_67%_50%,rgba(99,102,241,0.12),transparent_46%)]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.08) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(circle at 70% 48%, black, transparent 66%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0, transparent 3px, white 4px)",
        }}
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-7.5rem)] max-w-[1500px] items-center gap-8 px-6 py-14 lg:grid-cols-[0.78fr_1.22fr] lg:px-12">
        <div className="relative z-20 max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 border border-cyan-300/20 bg-cyan-300/[0.04] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-200/70">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-200 opacity-45" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-100" />
            </span>
            Portfolio core / Multi-domain online
          </div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-indigo-300/55">
            04 / Engineering Command Core
          </p>
          <h1 className="text-5xl font-black leading-[0.94] tracking-[-0.05em] sm:text-6xl xl:text-7xl">
            One mind,
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              many systems.
            </span>
          </h1>
          <p className="mt-7 max-w-md text-sm leading-7 text-white/48 sm:text-base">
            I work across AI products, production software, research, and physical machines—turning ambiguous problems into systems that can be measured, tested, and trusted.
          </p>

          <div className="mt-8 grid max-w-md grid-cols-3 gap-px overflow-hidden border border-white/10 bg-white/10 font-mono">
            {[
              ["6", "Featured projects"],
              ["4", "Engineering domains"],
              ["1st", "IEEE Battle Bots"],
            ].map(([value, label]) => (
              <div key={label} className="bg-[#050b11] px-3 py-3">
                <p className="text-lg font-semibold text-cyan-100">{value}</p>
                <p className="mt-1 text-[7px] uppercase tracking-[0.12em] text-white/30 sm:text-[8px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[32rem] min-w-0 sm:h-[39rem]">
          <Canvas camera={{ position: [0, 0, 8.5], fov: 46 }} dpr={[1, 1.5]}>
            <CommandCoreScene />
          </Canvas>

          <div className="pointer-events-none absolute inset-0">
            <HudPanel
              className="left-[2%] top-[12%]"
              label="Applied AI"
              value="730"
              detail="Levit · Production AI systems"
            />
            <HudPanel
              className="right-[1%] top-[20%]"
              label="Research node"
              value="EDGE"
              detail="Federated TinyML · IoT security"
              accent="indigo"
            />
            <HudPanel
              className="bottom-[17%] left-[4%]"
              label="Robotics node"
              value="334 J"
              detail="Shot & Chaser · 1st place"
              accent="indigo"
            />
            <HudPanel
              className="bottom-[10%] right-[2%]"
              label="Product build"
              value="E2E"
              detail="SIGNUM · ASME · Hangukgwan"
            />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-mono">
              <p className="text-[8px] uppercase tracking-[0.32em] text-cyan-100/55">YP / System</p>
              <p className="mt-1 text-[7px] uppercase tracking-[0.18em] text-white/25">Think · Build · Validate</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-4 left-6 right-6 hidden items-center gap-6 border-t border-cyan-200/12 pt-3 font-mono text-[8px] uppercase tracking-[0.17em] text-white/22 lg:flex xl:left-12 xl:right-12">
        <span className="text-cyan-200/55">Command / Engineering Portfolio</span>
        <span>Applied AI</span>
        <span>Research</span>
        <span>Robotics</span>
        <span>Product</span>
        <span className="ml-auto text-indigo-200/45">Operator: Younsoo Park</span>
      </div>
    </section>
  );
}
