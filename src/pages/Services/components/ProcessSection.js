import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProcessContainer = styled.section`
  position: relative;
  padding: 120px 0;
  background: linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Cinzel', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 4rem;
  letter-spacing: 2px;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 60px;
`;

const ProcessStep = styled(motion.div)`
  position: relative;
  text-align: center;
  padding: 2rem 1rem;
`;

const StepNumber = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #000000;
  margin: 0 auto 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(45deg, #FFD700, #FFA500);
    border-radius: 50%;
    z-index: -1;
    opacity: 0.3;
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.1); opacity: 0.1; }
  }
`;

const StepTitle = styled.h3`
  font-family: 'Cinzel', serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

const StepDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #CCCCCC;
  line-height: 1.6;
`;

const ProcessArrow = styled.div`
  position: absolute;
  top: 50%;
  right: -1rem;
  transform: translateY(-50%);
  color: #FFD700;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
  
  &:last-child {
    display: none;
  }
`;

const ProcessSection = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We begin by understanding your vision, goals, and requirements through detailed consultation and creative briefings.'
    },
    {
      number: '02',
      title: 'Planning',
      description: 'Strategic planning phase where we develop concepts, create storyboards, and establish production timelines.'
    },
    {
      number: '03',
      title: 'Production',
      description: 'Professional execution using state-of-the-art equipment and experienced crew to bring your vision to life.'
    },
    {
      number: '04',
      title: 'Post-Production',
      description: 'Meticulous editing, color grading, sound design, and visual effects to perfect your final product.'
    },
    {
      number: '05',
      title: 'Delivery',
      description: 'Final review, approval, and delivery of your completed project in all required formats and specifications.'
    }
  ];

  return (
    <ProcessContainer>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Process
        </SectionTitle>

        <ProcessGrid>
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StepNumber>{step.number}</StepNumber>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
              {index < processSteps.length - 1 && (
                <ProcessArrow>→</ProcessArrow>
              )}
            </ProcessStep>
          ))}
        </ProcessGrid>
      </Container>
    </ProcessContainer>
  );
};

export default ProcessSection;
