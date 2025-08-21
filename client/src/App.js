import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
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
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Simulate loading time for dramatic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Always navigate to home after loading to ensure content is visible
      setTimeout(() => {
        navigate('/', { replace: true });
      }, 100); // Small delay to ensure DOM is ready
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

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
  return (
    <Router basename="/brose-films-production">
      <AppContent />
    </Router>
  );
}

export default App;
