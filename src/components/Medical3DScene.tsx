import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

const HeartModel = () => {
  const meshRef = useRef<Mesh>(null);

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#ef4444" 
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
};

const PulseRings = () => {
  return (
    <>
      {[1.5, 2, 2.5].map((scale, index) => (
        <Float key={index} speed={0.5 + index * 0.2} rotationIntensity={0.5}>
          <mesh position={[0, 0, 0]} scale={scale}>
            <torusGeometry args={[1, 0.05, 16, 100]} />
            <meshStandardMaterial 
              color="#3b82f6"
              transparent
              opacity={0.3 - index * 0.1}
              emissive="#3b82f6"
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const Medical3DScene = () => {
  return (
    <div className="h-64 w-full rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <spotLight 
          position={[0, 10, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={1}
          castShadow
        />
        
        <HeartModel />
        <PulseRings />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={2}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Medical3DScene;