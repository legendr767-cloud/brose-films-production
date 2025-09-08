import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';

const SubsidiariesSection = styled.section`
  position: relative;
  padding: 120px 0;
  background: linear-gradient(180deg, #000000 0%, #1a1a1a 50%, #000000 100%);
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Cinzel', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  letter-spacing: 2px;
`;

const SectionSubtitle = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  color: #CCCCCC;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const SubsidiariesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 60px;
`;

const SubsidiaryCard = styled(motion.div)`
  position: relative;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(0, 0, 0, 0.8) 100%);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(10px);
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

const SubsidiaryName = styled.h3`
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #FFD700;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

const SubsidiaryDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #CCCCCC;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SubsidiarySpecialty = styled.div`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: rgba(255, 215, 0, 0.1);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 20px;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #FFD700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const EstablishedYear = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #999999;
  font-style: italic;
`;

const ViewAllButton = styled(motion.button)`
  display: block;
  margin: 60px auto 0;
  padding: 16px 32px;
  background: transparent;
  color: #FFD700;
  border: 2px solid #FFD700;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
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
    transform: translateY(-2px);
  }
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.1;
  
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: -10%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, #FFD700 0%, transparent 70%);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 20%;
    right: -10%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, #FFA500 0%, transparent 70%);
    border-radius: 50%;
    animation: float 8s ease-in-out infinite reverse;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;

const SubsidiariesPreview = () => {
  const [subsidiaries, setSubsidiaries] = useState([]);
  const sectionRef = useRef();

  useEffect(() => {
    const fetchSubsidiaries = async () => {
      try {
        const response = await axios.get('/api/subsidiaries');
        setSubsidiaries(response.data);
      } catch (error) {
        console.error('Error fetching subsidiaries:', error);
        // Fallback data
        setSubsidiaries([
          {
            id: 1,
            name: 'Brose Studios',
            description: 'Premier film production facility with state-of-the-art equipment and cutting-edge technology.',
            specialty: 'Film Production',
            established_year: 2018
          },
          {
            id: 2,
            name: 'Creative Edge Media',
            description: 'Innovative advertising and commercial content creation that drives brand engagement.',
            specialty: 'Advertising',
            established_year: 2019
          },
          {
            id: 3,
            name: 'Narrative Labs',
            description: 'Story development and content strategy consultancy for premium brands.',
            specialty: 'Content Strategy',
            established_year: 2020
          },
          {
            id: 4,
            name: 'Digital Horizon',
            description: 'Digital media distribution and streaming solutions for global audiences.',
            specialty: 'Digital Media',
            established_year: 2021
          }
        ]);
      }
    };

    fetchSubsidiaries();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.subsidiary-card', 
        { 
          opacity: 0, 
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [subsidiaries]);

  return (
    <SubsidiariesSection ref={sectionRef} className="fade-in-section">
      <BackgroundElements />
      
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Subsidiaries
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A network of specialized companies working together to deliver exceptional results across all aspects of film and media production.
          </SectionSubtitle>
        </SectionHeader>

        <SubsidiariesGrid>
          {subsidiaries.map((subsidiary, index) => (
            <SubsidiaryCard
              key={subsidiary.id}
              className="subsidiary-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <SubsidiarySpecialty>
                {subsidiary.specialty}
              </SubsidiarySpecialty>
              <SubsidiaryName>
                {subsidiary.name}
              </SubsidiaryName>
              <SubsidiaryDescription>
                {subsidiary.description}
              </SubsidiaryDescription>
              <EstablishedYear>
                Established {subsidiary.established_year}
              </EstablishedYear>
            </SubsidiaryCard>
          ))}
        </SubsidiariesGrid>

      </Container>
    </SubsidiariesSection>
  );
};

export default SubsidiariesPreview;
