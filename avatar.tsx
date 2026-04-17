import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Shape({ kind }: { kind: "octa" | "icosa" | "torus" | "tetra" }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * 0.4;
      ref.current.rotation.y = s.clock.elapsedTime * 0.5;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.6}>
      <mesh ref={ref}>
        {kind === "octa" && <octahedronGeometry args={[1, 0]} />}
        {kind === "icosa" && <icosahedronGeometry args={[1, 0]} />}
        {kind === "torus" && <torusKnotGeometry args={[0.7, 0.22, 120, 16]} />}
        {kind === "tetra" && <tetrahedronGeometry args={[1.1, 0]} />}
        <meshPhysicalMaterial
          color="#e8eaee"
          metalness={1}
          roughness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

export function MiniCrystal({
  kind = "octa",
  className = "",
}: {
  kind?: "octa" | "icosa" | "torus" | "tetra";
  className?: string;
}) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 3.4], fov: 40 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} intensity={1.2} />
          <Shape kind={kind} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
