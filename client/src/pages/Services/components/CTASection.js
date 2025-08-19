import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CTAContainer = styled.section`
  position: relative;
  padding: 120px 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const CTATitle = styled(motion.h2)`
  font-family: 'Cinzel', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  letter-spacing: 2px;
`;

const CTADescription = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  color: #CCCCCC;
  line-height: 1.6;
  margin-bottom: 3rem;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
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
  }
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  animation: pulse 4s ease-in-out infinite;
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
    50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
  }
`;

const CTASection = () => {
  return (
    <CTAContainer>
      <BackgroundGlow />
      
      <Container>
        <CTATitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Create Something Amazing?
        </CTATitle>
        
        <CTADescription
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let's bring your vision to life with our award-winning team and cutting-edge production capabilities.
        </CTADescription>
        
        <CTAButtons
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <PrimaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </PrimaryButton>
          
          <SecondaryButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Portfolio
          </SecondaryButton>
        </CTAButtons>
      </Container>
    </CTAContainer>
  );
};

export default CTASection;
