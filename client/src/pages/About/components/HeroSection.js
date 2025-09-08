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

const FilmGrain = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 50%, transparent 20%, rgba(255, 255, 255, 0.01) 21%, rgba(255, 255, 255, 0.01) 34%, transparent 35%),
    linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, 0.01) 25%, rgba(255, 255, 255, 0.01) 26%, transparent 27%);
  opacity: 0.3;
  pointer-events: none;
  animation: filmGrain 0.2s steps(10) infinite;
  
  @keyframes filmGrain {
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
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer className="about-section">
      <FilmGrain />
      
      <HeroContent>
        <HeroTitle
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Our Story
        </HeroTitle>
        
        <HeroSubtitle
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          From humble beginnings to global recognition, discover the journey that shaped Brose Films Production into a leading force in cinematic storytelling.
        </HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
