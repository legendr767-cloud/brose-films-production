import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const FilmReel = ({ position = [0, 0, 0], scale = 1, rotationSpeed = 0.01 }) => {
  const groupRef = useRef();
  const innerReelRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += rotationSpeed;
    }
    if (innerReelRef.current) {
      innerReelRef.current.rotation.z -= rotationSpeed * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Outer reel */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2, 2, 0.3, 32]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Inner reel */}
      <group ref={innerReelRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 0.35, 16]} />
          <meshStandardMaterial
            color="#333333"
            metalness={0.6}
            roughness={0.4}
          />
        </mesh>
      </group>
      
      {/* Film strip around the reel */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.7, 0.05, 8, 32]} />
        <meshStandardMaterial
          color="#2a2a2a"
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Spokes */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <group key={i} rotation={[0, 0, (i * Math.PI) / 3]}>
          <mesh position={[0.7, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.02, 0.02, 1.4, 8]} />
            <meshStandardMaterial
              color="#FFD700"
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};

export default FilmReel;
