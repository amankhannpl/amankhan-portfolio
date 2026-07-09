"use client";

import { Float, MeshDistortMaterial, PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const points = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(900 * 3);

    for (let i = 0; i < 900; i += 1) {
      const radius = 2.5 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!points.current) return;

    points.current.rotation.y = state.clock.elapsedTime * 0.035 + state.pointer.x * 0.16;
    points.current.rotation.x = state.pointer.y * 0.08;
  });

  return (
    <Points ref={points} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#53e0ff"
        size={0.018}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

function CoreObject() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;

    mesh.current.rotation.x = state.clock.elapsedTime * 0.12 + state.pointer.y * 0.18;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.18 + state.pointer.x * 0.28;
  });

  return (
    <Float speed={1.35} rotationIntensity={0.22} floatIntensity={0.55}>
      <mesh ref={mesh} position={[1.45, 0.15, 0]}>
        <icosahedronGeometry args={[1.28, 32]} />
        <MeshDistortMaterial
          color="#f5f1e8"
          emissive="#112a2f"
          roughness={0.18}
          metalness={0.72}
          distort={0.28}
          speed={1.7}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(83,224,255,.22),transparent_32%),radial-gradient(circle_at_22%_70%,rgba(213,255,95,.11),transparent_30%),linear-gradient(180deg,rgba(5,5,5,0)_0%,#050505_88%)]" />
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.45} />
        <directionalLight position={[4, 3, 5]} intensity={1.6} color="#f5f1e8" />
        <pointLight position={[-3, -2, 2]} intensity={2.2} color="#d5ff5f" />
        <ParticleField />
        <CoreObject />
      </Canvas>
    </div>
  );
}