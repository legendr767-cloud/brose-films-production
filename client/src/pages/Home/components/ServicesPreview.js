import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';

const ServicesSection = styled.section`
  position: relative;
  padding: 120px 0;
  background: #000000;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 60px;
`;

const ServiceCard = styled(motion.div)`
  position: relative;
  height: 400px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%);
  border-radius: 20px;
  padding: 2rem;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.6s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    transform: translateY(-15px) rotateX(5deg);
    box-shadow: 0 30px 60px rgba(255, 215, 0, 0.2);
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
  
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
  
  ${ServiceCard}:hover &::after {
    opacity: 0.3;
  }
`;

const ServiceTitle = styled.h3`
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  position: relative;
  z-index: 2;
`;

const ServiceDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #CCCCCC;
  line-height: 1.6;
  flex-grow: 1;
  position: relative;
  z-index: 2;
`;

const ServiceCTA = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #FFD700;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1rem;
  position: relative;
  z-index: 2;
  
  &::after {
    content: '→';
    transition: transform 0.3s ease;
  }
  
  ${ServiceCard}:hover &::after {
    transform: translateX(5px);
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
`;

const FloatingCircle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
`;

const ServicesPreview = () => {
  const [services, setServices] = useState([]);
  const sectionRef = useRef();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services?featured=true');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
        // Fallback data
        setServices([
          {
            id: 1,
            title: 'Film Production',
            description: 'Full-scale cinematic productions from concept to final cut with state-of-the-art equipment and award-winning talent.',
            icon: '🎬'
          },
          {
            id: 2,
            title: 'Creative Advertising',
            description: 'Compelling commercial content that drives engagement and builds lasting brand connections with your audience.',
            icon: '📢'
          },
          {
            id: 3,
            title: 'Content Strategy',
            description: 'Strategic content planning and brand storytelling that resonates with your target market and achieves business goals.',
            icon: '📋'
          },
          {
            id: 4,
            title: 'Media Solutions',
            description: 'Comprehensive media production and distribution services for digital platforms and traditional broadcasting.',
            icon: '📡'
          }
        ]);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-card', 
        { 
          opacity: 0, 
          y: 100,
          rotationX: -15
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
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

      // Floating elements animation
      gsap.utils.toArray('.floating-circle').forEach((circle, i) => {
        gsap.to(circle, {
          y: "random(-50, 50)",
          x: "random(-30, 30)",
          rotation: "random(-180, 180)",
          duration: "random(8, 12)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.5
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [services]);

  const getServiceIcon = (iconName) => {
    const icons = {
      'film': '🎬',
      'megaphone': '📢',
      'strategy': '📋',
      'media': '📡'
    };
    return icons[iconName] || '🎬';
  };

  return (
    <ServicesSection ref={sectionRef} className="fade-in-section">
      <FloatingElements>
        <FloatingCircle className="floating-circle" size={100} top={10} left={5} />
        <FloatingCircle className="floating-circle" size={150} top={60} left={85} />
        <FloatingCircle className="floating-circle" size={80} top={30} left={70} />
        <FloatingCircle className="floating-circle" size={120} top={80} left={15} />
      </FloatingElements>
      
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Services
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            From concept to completion, we provide comprehensive film and media production services that bring your vision to life.
          </SectionSubtitle>
        </SectionHeader>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              className="service-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <ServiceIcon>
                  {service.icon || getServiceIcon(service.icon)}
                </ServiceIcon>
                <ServiceTitle>
                  {service.title}
                </ServiceTitle>
                <ServiceDescription>
                  {service.description}
                </ServiceDescription>
              </div>
              <ServiceCTA>
                Learn More
              </ServiceCTA>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default ServicesPreview;
