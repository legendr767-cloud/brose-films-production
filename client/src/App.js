import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

// Components
import Navigation from './components/Navigation/Navigation';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import ScrollManager from './components/ScrollManager/ScrollManager';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import Subsidiaries from './pages/Subsidiaries/Subsidiaries';
import Contact from './pages/Contact/Contact';
import ServiceBlog from './pages/Blog/ServiceBlog';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: #000000;
  overflow-x: hidden;
`;

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`;

// Component to handle automatic navigation after loading
function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for dramatic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AppContainer>
      {isLoading && <LoadingScreen />}
      
      {!isLoading && (
        <>
          <ScrollManager />
          
          <CanvasContainer>
            <Canvas
              camera={{ position: [0, 0, 5], fov: 75 }}
              gl={{ 
                antialias: true, 
                alpha: true,
                powerPreference: "high-performance"
              }}
            >
              <Suspense fallback={null}>
                {/* Background 3D elements will be added here */}
              </Suspense>
            </Canvas>
          </CanvasContainer>

          <Navigation />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceSlug" element={<ServiceBlog />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/subsidiaries" element={<Subsidiaries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </>
      )}
    </AppContainer>
  );
}

function App() {
  // Use GitHub Pages basename only when hosted on github.io
  const basename = typeof window !== 'undefined' && window.location.hostname.endsWith('github.io')
    ? '/brose-films-production'
    : undefined;

  return (
    <Router basename={basename}>
      <AppContent />
    </Router>
  );
}

export default App;
