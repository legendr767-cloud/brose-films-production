import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const TimelineContainer = styled.section`
  position: relative;
  padding: 120px 0;
  background: #000000;
  overflow: hidden;
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

const TimelineWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, #FFD700, #FFA500, #FFD700);
  transform: translateX(-50%);
  
  @media (max-width: 768px) {
    left: 30px;
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  
  &:nth-child(even) {
    flex-direction: row-reverse;
    
    @media (max-width: 768px) {
      flex-direction: row;
    }
  }
  
  @media (max-width: 768px) {
    margin-left: 60px;
    flex-direction: row;
  }
`;

const TimelineContent = styled.div`
  flex: 1;
  padding: 2rem;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(0, 0, 0, 0.8) 100%);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 15px;
  margin: 0 2rem;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    margin: 0 0 0 1rem;
  }
`;

const TimelineYear = styled.div`
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #FFD700;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

const TimelineTitle = styled.h3`
  font-family: 'Cinzel', serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`;

const TimelineDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #CCCCCC;
  line-height: 1.6;
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(45deg, #FFD700, #FFA500);
    border-radius: 50%;
    opacity: 0.3;
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.2); opacity: 0.1; }
  }
  
  @media (max-width: 768px) {
    left: 30px;
  }
`;

const FilmReelDecoration = styled.div`
  position: absolute;
  top: 10%;
  right: -100px;
  width: 200px;
  height: 200px;
  border: 4px solid rgba(255, 215, 0, 0.1);
  border-radius: 50%;
  
  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    background: rgba(255, 215, 0, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  
  &::before {
    width: 60px;
    height: 60px;
  }
  
  animation: rotate 20s linear infinite;
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const TimelineSection = () => {
  const timelineRef = useRef();

  const milestones = [
    {
      year: '2014',
      title: 'The Beginning',
      description: 'Brose Films was founded in Lagos, Nigeria with a vision to create compelling visual narratives that resonate with global audiences.'
    },
    {
      year: '2016',
      title: 'First Major Success',
      description: 'Our breakthrough film "JACOB\'s TRAIT" won multiple awards and established our reputation in the Nigerian film industry.'
    },
    {
      year: '2018',
      title: 'Lagos Expansion',
      description: 'Expanded our Lagos operations with state-of-the-art production facilities and equipment to serve clients across Nigeria.'
    },
    {
      year: '2020',
      title: 'Digital Revolution',
      description: 'Pioneered the use of cutting-edge digital cinematography and post-production techniques in our Lagos studio.'
    },
    {
      year: '2022',
      title: 'Production Excellence',
      description: 'Achieved milestone of 176+ completed projects, establishing ourselves as a leading production house in Lagos.'
    },
    {
      year: '2024',
      title: 'Innovation Leadership',
      description: 'Leading the Nigerian film industry with advanced production techniques and award-winning storytelling from our Lagos headquarters.'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline items
      gsap.fromTo('.timeline-item', 
        { 
          opacity: 0, 
          x: (index) => index % 2 === 0 ? -100 : 100
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate timeline line
      gsap.fromTo('.timeline-line', 
        { 
          scaleY: 0,
          transformOrigin: "top center"
        },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <TimelineContainer ref={timelineRef} className="about-section">
      <FilmReelDecoration />
      
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Journey
        </SectionTitle>
        
        <TimelineWrapper>
          <TimelineLine className="timeline-line" />
          
          {milestones.map((milestone, index) => (
            <TimelineItem
              key={index}
              className="timeline-item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineYear>{milestone.year}</TimelineYear>
                <TimelineTitle>{milestone.title}</TimelineTitle>
                <TimelineDescription>{milestone.description}</TimelineDescription>
              </TimelineContent>
              <TimelineDot />
            </TimelineItem>
          ))}
        </TimelineWrapper>
      </Container>
    </TimelineContainer>
  );
};

export default TimelineSection;
