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
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  letter-spacing: 3px;
`;

const HeroSubtitle = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.1rem, 2.5vw, 1.8rem);
  color: #CCCCCC;
  line-height: 1.6;
  font-weight: 300;
  letter-spacing: 1px;
`;

const FilmStripDecoration = styled.div`
  position: absolute;
  top: 0;
  left: -50px;
  width: 100px;
  height: 100%;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255, 215, 0, 0.1) 0px,
    rgba(255, 215, 0, 0.1) 30px,
    transparent 30px,
    transparent 60px
  );
  opacity: 0.3;
  transform: rotate(-15deg);
  animation: slideDown 20s linear infinite;
  
  @keyframes slideDown {
    from { transform: translateY(-100%) rotate(-15deg); }
    to { transform: translateY(100vh) rotate(-15deg); }
  }
`;

const FilmStripRight = styled(FilmStripDecoration)`
  left: auto;
  right: -50px;
  transform: rotate(15deg);
  animation: slideUp 25s linear infinite;
  
  @keyframes slideUp {
    from { transform: translateY(100vh) rotate(15deg); }
    to { transform: translateY(-100%) rotate(15deg); }
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <FilmStripDecoration />
      <FilmStripRight />
      
      <HeroContent>
        <HeroTitle
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          Our Portfolio
        </HeroTitle>
        
        <HeroSubtitle
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Discover our award-winning collection of films, commercials, and media productions that have captivated audiences worldwide.
        </HeroSubtitle>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
