import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import FilmReel from './FilmReel';
import CameraLens from './CameraLens';
import CinematicLights from './CinematicLights';

const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      }}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
      }}
    >
      <Suspense fallback={null}>
        <CinematicLights />
        
        {/* Main film reel */}
        <FilmReel 
          position={[-3, 1, 0]} 
          scale={0.8} 
          rotationSpeed={0.008} 
        />
        
        {/* Secondary film reel */}
        <FilmReel 
          position={[4, -1.5, -2]} 
          scale={0.6} 
          rotationSpeed={-0.012} 
        />
        
        {/* Camera lens */}
        <CameraLens 
          position={[1, 2, -1]} 
          scale={0.7} 
        />
        
        {/* Background film reel */}
        <FilmReel 
          position={[-1, -3, -4]} 
          scale={1.2} 
          rotationSpeed={0.005} 
        />
      </Suspense>
    </Canvas>
  );
};

export default HeroScene;
