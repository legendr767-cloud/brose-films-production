import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  position: relative;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse at center, #1a1a1a 0%, #000000 100%);
  overflow: hidden;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 900px;
  padding: 0 2rem;
  z-index: 10;
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Cinzel', serif;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 700;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  text-align: center;
  line-height: 1.2;
`;

const HeroSubtitle = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: #CCCCCC;
  line-height: 1.6;
  font-weight: 300;
  letter-spacing: 0.5px;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 2rem;
  color: rgba(255, 215, 0, 0.2);
  top: ${props => props.top}%;
  left: ${props => props.left}%;
`;

const HeroSection = () => {
  const floatingIcons = [
    { icon: '🎬', top: 20, left: 10 },
    { icon: '📹', top: 30, left: 85 },
    { icon: '🎭', top: 70, left: 15 },
    { icon: '📡', top: 60, left: 80 },
    { icon: '🎪', top: 40, left: 50 }
  ];

  return (
    <HeroContainer>
      <FloatingElements>
        {floatingIcons.map((item, index) => (
          <FloatingIcon
            key={index}
            top={item.top}
            left={item.left}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {item.icon}
          </FloatingIcon>
        ))}
      </FloatingElements>
      
      <HeroContent>
        <HeroTitle
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Our Services
        </HeroTitle>
        
        <HeroSubtitle
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Comprehensive film and media production services that bring your vision to life with unparalleled creativity and technical excellence.
        </HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
