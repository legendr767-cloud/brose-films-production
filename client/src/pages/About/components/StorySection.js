import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StoryContainer = styled.section`
  position: relative;
  padding: 120px 0;
  background: linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const StoryContent = styled.div`
  position: relative;
`;

const StoryTitle = styled(motion.h2)`
  font-family: 'Cinzel', serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 700;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  letter-spacing: 2px;
`;

const StoryText = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: #CCCCCC;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const StoryVisual = styled(motion.div)`
  position: relative;
  height: 500px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.05) 50%, transparent 70%);
    animation: shimmer 3s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0%, 100% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
  }
`;

const VisualIcon = styled.div`
  font-size: 4rem;
  color: #FFD700;
  opacity: 0.7;
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 15px;
`;

const StatNumber = styled.div`
  font-family: 'Cinzel', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #FFD700;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #CCCCCC;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StorySection = () => {
  return (
    <StoryContainer className="about-section">
      <Container>
        <StoryGrid>
          <StoryContent>
            <StoryTitle
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              The Brose Films Production Legacy
            </StoryTitle>
            
            <StoryText
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Founded with a vision to push the boundaries of cinematic storytelling, Brose Films Production has evolved from a passionate startup into a global powerhouse in film and media production. We believe in transforming lives, one story at a time.
            </StoryText>
            
            <StoryText
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our journey began with a simple belief: every story deserves to be told with the highest level of artistry and technical excellence. Guided by our core values of Creative Excellence, Integrity, Collaboration, and Audience Engagement, we've built partnerships with industry leaders and earned recognition at international film festivals.
            </StoryText>
            
            <StoryText
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Today, we continue to craft stories that resonate across cultures and generations, utilizing cutting-edge technology and timeless storytelling techniques to create experiences that captivate audiences worldwide.
            </StoryText>
          </StoryContent>
          
          <StoryVisual
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <VisualIcon>BROSE FILMS</VisualIcon>
          </StoryVisual>
        </StoryGrid>
        
        <Stats>
          <StatItem
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StatNumber>176+</StatNumber>
            <StatLabel>Projects Completed</StatLabel>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <StatNumber>12+</StatNumber>
            <StatLabel>Awards Won</StatLabel>
          </StatItem>
          
          <StatItem
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <StatNumber>10+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
        </Stats>
      </Container>
    </StoryContainer>
  );
};

export default StorySection;
