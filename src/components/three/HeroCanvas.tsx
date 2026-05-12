"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import NetworkGraph from "./NetworkGraph";

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 70 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <Suspense fallback={null}>
          <NetworkGraph />
        </Suspense>
      </Canvas>
    </div>
  );
}
