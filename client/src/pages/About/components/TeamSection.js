import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TeamContainer = styled.section`
  position: relative;
  padding: 120px 0;
  background: linear-gradient(180deg, #000000 0%, #1a1a1a 50%, #000000 100%);
`;

const Container = styled.div`
  max-width: 1400px;
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
  margin-bottom: 2rem;
  letter-spacing: 2px;
`;

const SectionSubtitle = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  color: #CCCCCC;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
  line-height: 1.6;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 60px;
`;

const TeamCard = styled(motion.div)`
  position: relative;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(0, 0, 0, 0.8) 100%);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.1), transparent);
    transition: left 0.8s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255, 215, 0, 0.5);
    box-shadow: 0 20px 40px rgba(255, 215, 0, 0.1);
  }
`;

const TeamAvatar = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
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
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${TeamCard}:hover &::after {
    opacity: 0.3;
  }
`;

const TeamName = styled.h3`
  font-family: 'Cinzel', serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`;

const TeamPosition = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #FFD700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
`;

const TeamBio = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #CCCCCC;
  line-height: 1.6;
`;

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Michael Brose',
      position: 'Founder & CEO',
      bio: 'Visionary leader with 25+ years in film production, driving innovation and creative excellence.',
      avatar: '🎬'
    },
    {
      name: 'Sarah Chen',
      position: 'Creative Director',
      bio: 'Award-winning director known for groundbreaking visual storytelling and cinematic artistry.',
      avatar: '🎭'
    },
    {
      name: 'David Rodriguez',
      position: 'Head of Production',
      bio: 'Industry veteran managing complex productions with precision and creative vision.',
      avatar: '🎪'
    },
    {
      name: 'Emma Thompson',
      position: 'VP of Strategy',
      bio: 'Strategic mastermind developing innovative approaches to content creation and distribution.',
      avatar: '📊'
    }
  ];

  return (
    <TeamContainer className="about-section">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Meet Our Team
        </SectionTitle>
        
        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          The creative minds and industry experts behind every Brose Films production, bringing decades of experience and passion to every project.
        </SectionSubtitle>

        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <TeamAvatar>
                {member.avatar}
              </TeamAvatar>
              <TeamName>{member.name}</TeamName>
              <TeamPosition>{member.position}</TeamPosition>
              <TeamBio>{member.bio}</TeamBio>
            </TeamCard>
          ))}
        </TeamGrid>
      </Container>
    </TeamContainer>
  );
};

export default TeamSection;
