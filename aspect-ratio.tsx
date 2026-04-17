import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshTransmissionMaterial, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Crystal() {
  const mesh = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(t * 0.2) * 0.3;
      mesh.current.rotation.y = t * 0.25;
      mesh.current.rotation.z = Math.cos(t * 0.15) * 0.15;
    }
    if (inner.current) {
      inner.current.rotation.x = -t * 0.4;
      inner.current.rotation.y = t * 0.6;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <group>
        {/* Inner glowing core */}
        <mesh ref={inner} scale={0.55}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={1.2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Outer faceted glass crystal */}
        <mesh ref={mesh} scale={1.6}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={6}
            thickness={1.2}
            roughness={0.05}
            transmission={1}
            ior={1.7}
            chromaticAberration={0.6}
            anisotropy={0.4}
            distortion={0.4}
            distortionScale={0.4}
            temporalDistortion={0.15}
            color="#ffffff"
            attenuationColor="#cfd6e0"
            attenuationDistance={1.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Orbiters() {
  const group = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (group.current) group.current.rotation.y = s.clock.elapsedTime * 0.3;
  });
  return (
    <group ref={group}>
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 3, Math.sin(angle * 1.4) * 0.6, Math.sin(angle) * 3]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        );
      })}
    </group>
  );
}

export function CrystalScene({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <directionalLight position={[-5, -3, -5]} intensity={0.6} color="#a0b4ff" />
          <pointLight position={[0, 0, 3]} intensity={2} color="#ffffff" />
          <Crystal />
          <Orbiters />
          <ContactShadows position={[0, -2.2, 0]} opacity={0.5} scale={8} blur={2.6} far={3} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
