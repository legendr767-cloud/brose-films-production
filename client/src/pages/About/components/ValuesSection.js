import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ValuesContainer = styled.section`
  position: relative;
  padding: 120px 0;
  background: linear-gradient(180deg, #0a0a0a 0%, #000000 50%, #0a0a0a 100%);
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
  margin-bottom: 3rem;
  letter-spacing: 2px;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ValueCard = styled(motion.div)`
  background: rgba(255, 215, 0, 0.05);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
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
    background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 215, 0, 0.4);
    box-shadow: 0 20px 40px rgba(255, 215, 0, 0.1);
  }
`;

const ValueIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #FFD700;
`;

const ValueTitle = styled.h3`
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #FFD700;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const ValueDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #CCCCCC;
  line-height: 1.6;
  letter-spacing: 0.5px;
`;

const ValuesSection = () => {
  const values = [
    {
      icon: "✨",
      title: "Creative Excellence",
      description: "We strive for innovation, originality, and artistic excellence in every aspect of our productions."
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethics, upholding the trust of our audiences, partners, and stakeholders."
    },
    {
      icon: "👥",
      title: "Collaboration",
      description: "We foster a culture of teamwork, inclusivity, and mutual respect, empowering our cast, crew, and collaborators to thrive."
    },
    {
      icon: "🎯",
      title: "Audience Engagement",
      description: "We prioritize audience satisfaction, crafting stories that resonate, inspire, and leave a lasting impact."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "We embrace cutting-edge technology and pioneering techniques to push the boundaries of cinematic storytelling."
    },
    {
      icon: "🌍",
      title: "Cultural Impact",
      description: "We create content that transcends borders, celebrating diversity and fostering global understanding through powerful narratives."
    }
  ];

  return (
    <ValuesContainer className="about-section">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Values
        </SectionTitle>
        
        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ValueIcon>{value.icon}</ValueIcon>
              <ValueTitle>{value.title}</ValueTitle>
              <ValueDescription>{value.description}</ValueDescription>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Container>
    </ValuesContainer>
  );
};

export default ValuesSection;
