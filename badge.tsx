import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, MeshTransmissionMaterial, Stars } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

type Variant = "services" | "work" | "process" | "pricing" | "contact";

function Particles({ count = 180 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.y = s.clock.elapsedTime * 0.04;
      ref.current.rotation.x = Math.sin(s.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#ffffff" transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Blob() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * 0.15;
      ref.current.rotation.y = s.clock.elapsedTime * 0.18;
    }
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={ref} scale={1.8}>
        <icosahedronGeometry args={[1, 32]} />
        <MeshDistortMaterial
          color="#cdd5e0"
          roughness={0.15}
          metalness={0.9}
          distort={0.45}
          speed={1.4}
        />
      </mesh>
    </Float>
  );
}

function Torus() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ref.current) {
      ref.current.rotation.x = s.clock.elapsedTime * 0.3;
      ref.current.rotation.y = s.clock.elapsedTime * 0.4;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={ref} scale={1.4}>
        <torusKnotGeometry args={[0.9, 0.28, 200, 24]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={1.2}
          roughness={0.1}
          transmission={1}
          ior={1.6}
          chromaticAberration={0.5}
          color="#ffffff"
          attenuationColor="#bcc4d2"
          attenuationDistance={1.5}
        />
      </mesh>
    </Float>
  );
}

function PrismCluster() {
  const group = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (group.current) group.current.rotation.y = s.clock.elapsedTime * 0.2;
  });
  return (
    <group ref={group}>
      {[0, 1, 2, 3, 4].map((i) => {
        const a = (i / 5) * Math.PI * 2;
        return (
          <Float key={i} speed={1 + i * 0.2} rotationIntensity={0.6} floatIntensity={1.2}>
            <mesh position={[Math.cos(a) * 2.4, Math.sin(a * 1.4) * 0.6, Math.sin(a) * 2.4]} rotation={[i, i * 0.8, 0]}>
              <octahedronGeometry args={[0.55, 0]} />
              <meshPhysicalMaterial color="#e8eaee" metalness={1} roughness={0.18} clearcoat={1} />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

function Rings() {
  const g1 = useRef<THREE.Mesh>(null);
  const g2 = useRef<THREE.Mesh>(null);
  const g3 = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (g1.current) { g1.current.rotation.x = t * 0.3; g1.current.rotation.y = t * 0.2; }
    if (g2.current) { g2.current.rotation.x = -t * 0.25; g2.current.rotation.z = t * 0.3; }
    if (g3.current) { g3.current.rotation.y = t * 0.4; g3.current.rotation.z = -t * 0.2; }
  });
  return (
    <group>
      <mesh ref={g1}><torusGeometry args={[1.6, 0.02, 16, 100]} /><meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.6} /></mesh>
      <mesh ref={g2}><torusGeometry args={[2.2, 0.015, 16, 100]} /><meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.4} /></mesh>
      <mesh ref={g3}><torusGeometry args={[2.8, 0.01, 16, 100]} /><meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} /></mesh>
    </group>
  );
}

function VariantContent({ variant }: { variant: Variant }) {
  switch (variant) {
    case "services": return <><Blob /><Particles count={150} /></>;
    case "work":     return <><PrismCluster /><Particles count={200} /></>;
    case "process":  return <><Torus /><Particles count={140} /></>;
    case "pricing":  return <><Rings /><Blob /><Particles count={120} /></>;
    case "contact":  return <><Torus /><Particles count={180} /></>;
  }
}

export function SceneBackground({ variant, className = "" }: { variant: Variant; className?: string }) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.1} />
          <directionalLight position={[-5, -3, -5]} intensity={0.5} color="#a0b4ff" />
          <pointLight position={[0, 0, 4]} intensity={1.5} color="#ffffff" />
          <Stars radius={40} depth={30} count={800} factor={2} fade speed={0.5} />
          <VariantContent variant={variant} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
