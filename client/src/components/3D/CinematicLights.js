import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const CinematicLights = () => {
  const spotLight1Ref = useRef();
  const spotLight2Ref = useRef();
  const spotLight3Ref = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (spotLight1Ref.current) {
      spotLight1Ref.current.position.x = Math.sin(time * 0.5) * 3;
      spotLight1Ref.current.position.y = Math.cos(time * 0.3) * 2 + 2;
    }
    
    if (spotLight2Ref.current) {
      spotLight2Ref.current.position.x = Math.cos(time * 0.4) * 4;
      spotLight2Ref.current.position.z = Math.sin(time * 0.6) * 3;
    }
    
    if (spotLight3Ref.current) {
      spotLight3Ref.current.intensity = 0.5 + Math.sin(time * 2) * 0.2;
    }
  });

  return (
    <>
      {/* Main key light */}
      <spotLight
        ref={spotLight1Ref}
        position={[5, 5, 5]}
        angle={0.6}
        penumbra={0.5}
        intensity={1}
        color="#FFD700"
        castShadow
      />
      
      {/* Fill light */}
      <spotLight
        ref={spotLight2Ref}
        position={[-3, 3, 4]}
        angle={0.8}
        penumbra={0.7}
        intensity={0.6}
        color="#FFA500"
      />
      
      {/* Rim light */}
      <spotLight
        ref={spotLight3Ref}
        position={[0, -2, -5]}
        angle={1.2}
        penumbra={0.8}
        intensity={0.4}
        color="#FFFFFF"
      />
      
      {/* Ambient light */}
      <ambientLight intensity={0.1} color="#1a1a2e" />
      
      {/* Directional light for general illumination */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.3}
        color="#FFFFFF"
        castShadow
      />
    </>
  );
};

export default CinematicLights;
