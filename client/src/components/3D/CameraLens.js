import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const CameraLens = ({ position = [0, 0, 0], scale = 1 }) => {
  const groupRef = useRef();
  const lensRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
    if (lensRef.current) {
      lensRef.current.rotation.z += 0.01;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Main lens body */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.5, 1.2, 2, 32]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Lens glass */}
      <group ref={lensRef}>
        <mesh position={[0, 0, 1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.1, 1.1, 0.1, 32]} />
          <meshPhysicalMaterial
            color="#000033"
            metalness={0}
            roughness={0}
            transmission={0.9}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>
      
      {/* Aperture rings */}
      {[0.3, 0.6, 0.9].map((z, i) => (
        <mesh key={i} position={[0, 0, z]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.8, 1.0, 16]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
      
      {/* Focus ring */}
      <mesh position={[0, 0, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.3, 1.3, 0.3, 32]} />
        <meshStandardMaterial
          color="#333333"
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
};

export default CameraLens;
