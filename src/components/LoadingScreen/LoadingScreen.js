import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import BroseLogo from '../../assets/images/brose-logo.svg';

// const fadeOut = keyframes`
//   0% { opacity: 1; }
//   100% { opacity: 0; visibility: hidden; }
// `;

const filmGrain = keyframes`
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -5%); }
  20% { transform: translate(-10%, 5%); }
  30% { transform: translate(5%, -10%); }
  40% { transform: translate(-5%, 15%); }
  50% { transform: translate(-10%, 5%); }
  60% { transform: translate(15%, 0%); }
  70% { transform: translate(0%, 15%); }
  80% { transform: translate(-15%, 10%); }
  90% { transform: translate(10%, 5%); }
`;

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;
    height: 120%;
    background-image: 
      radial-gradient(circle at 20% 50%, transparent 20%, rgba(255, 255, 255, 0.01) 21%, rgba(255, 255, 255, 0.01) 34%, transparent 35%),
      linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.01) 25%, rgba(255, 255, 255, 0.01) 26%, transparent 27%);
    animation: ${filmGrain} 0.2s steps(10) infinite;
    pointer-events: none;
  }
`;

const LogoContainer = styled(motion.div)`
  position: relative;
  text-align: center;
`;

const MainLogoImage = styled(motion.img)`
  height: 120px;
  width: auto;
  filter: drop-shadow(0 0 30px rgba(255, 215, 0, 0.3));
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    height: 80px;
  }
`;

const Tagline = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  color: #CCCCCC;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;

const ProgressBar = styled(motion.div)`
  width: 300px;
  height: 2px;
  background: rgba(255, 215, 0, 0.2);
  border-radius: 1px;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    width: 250px;
  }
`;

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #FFD700, #FFA500);
  border-radius: 1px;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
`;

const FilmStrip = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: -100px;
  width: 80px;
  height: 400px;
  background: linear-gradient(to bottom, 
    transparent 0%, 
    rgba(255, 215, 0, 0.1) 10%, 
    transparent 20%,
    rgba(255, 215, 0, 0.1) 30%, 
    transparent 40%,
    rgba(255, 215, 0, 0.1) 50%, 
    transparent 60%,
    rgba(255, 215, 0, 0.1) 70%, 
    transparent 80%,
    rgba(255, 215, 0, 0.1) 90%, 
    transparent 100%
  );
  transform: translateY(-50%) rotate(-10deg);
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 100%;
    background: repeating-linear-gradient(
      to bottom,
      rgba(255, 215, 0, 0.3) 0px,
      rgba(255, 215, 0, 0.3) 20px,
      transparent 20px,
      transparent 40px
    );
  }
  
  &::before {
    left: 5px;
  }
  
  &::after {
    right: 5px;
  }
`;

const FilmStripRight = styled(FilmStrip)`
  left: auto;
  right: -100px;
  transform: translateY(-50%) rotate(10deg);
`;

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <LoadingContainer
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <FilmStrip
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        
        <FilmStripRight
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        <LogoContainer>
          <MainLogoImage
            src={BroseLogo}
            alt="Brose Films Production"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <Tagline
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            Crafting Stories Beyond Imagination
          </Tagline>
          
          <ProgressBar
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <ProgressFill
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </ProgressBar>
        </LogoContainer>
      </LoadingContainer>
    </AnimatePresence>
  );
};

export default LoadingScreen;
