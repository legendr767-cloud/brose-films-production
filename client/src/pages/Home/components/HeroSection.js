import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import HeroScene from '../../../components/3D/HeroScene';

const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: radial-gradient(ellipse at center, #1a1a1a 0%, #000000 100%);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 1200px;
  padding: 0 2rem;
`;

const MainTitle = styled(motion.h1)`
  font-family: 'Cinzel', serif;
  font-size: clamp(3rem, 8vw, 8rem);
  font-weight: 700;
  background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 50px rgba(255, 215, 0, 0.3);
  letter-spacing: 4px;
  margin-bottom: 2rem;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    letter-spacing: 2px;
    margin-bottom: 1.5rem;
  }
`;

const Tagline = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.2rem, 3vw, 2.5rem);
  color: #CCCCCC;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 3rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    letter-spacing: 1px;
    margin-bottom: 2rem;
  }
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 1rem;
    flex-direction: column;
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: 18px 40px;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  color: #000000;
  border: none;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(255, 215, 0, 0.3);
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: 18px 40px;
  background: transparent;
  color: #FFD700;
  border: 2px solid #FFD700;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #FFD700;
    transition: width 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    width: 100%;
  }
  
  &:hover {
    color: #000000;
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(255, 215, 0, 0.2);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #FFD700;
  cursor: pointer;
`;

const ScrollText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.8;
`;

const ScrollArrow = styled(motion.div)`
  width: 2px;
  height: 30px;
  background: linear-gradient(to bottom, #FFD700, transparent);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 8px solid #FFD700;
  }
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
  opacity: 0.5;
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

const HeroScene3D = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
`;

const HeroSection = () => {
  const heroRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate background gradient
      gsap.to(heroRef.current, {
        backgroundPosition: "200% 200%",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <HeroContainer ref={heroRef}>
      <FilmGrain />
      
      <HeroScene3D>
        <HeroScene />
      </HeroScene3D>

      <HeroContent>
        <MainTitle
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 4 }}
        >
          BROSE FILMS PRODUCTION
        </MainTitle>
        
        <Tagline
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
        >
          Transforming Lives, one Story at a time
        </Tagline>
        
        <CTAContainer
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 5 }}
        >
          <PrimaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Work
          </PrimaryButton>
          
          <SecondaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </SecondaryButton>
        </CTAContainer>
      </HeroContent>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 6 }}
        onClick={scrollToNext}
      >
        <ScrollText>Scroll to Explore</ScrollText>
        <ScrollArrow
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;
