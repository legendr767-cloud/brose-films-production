import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';

const ServicesSection = styled.section`
  position: relative;
  padding: 120px 0;
  background: #000000;
  perspective: 1000px;
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
  margin-bottom: 4rem;
  letter-spacing: 2px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ServiceCard3D = styled(motion.div)`
  position: relative;
  height: 450px;
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%);
  border-radius: 20px;
  padding: 2.5rem;
  cursor: pointer;
  overflow: hidden;
  transform-style: preserve-3d;
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
    border-radius: 20px;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    transform: translateY(-15px) rotateX(5deg) rotateY(-5deg);
    box-shadow: 
      0 30px 60px rgba(255, 215, 0, 0.2),
      0 0 50px rgba(255, 215, 0, 0.1);
  }
`;

const ServiceIcon3D = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  transform-style: preserve-3d;
  
  &::after {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    z-index: -1;
    transform: translateZ(-20px);
  }
  
  ${ServiceCard3D}:hover & {
    transform: rotateY(10deg) rotateX(-10deg);
  }
`;

const ServiceTitle = styled.h3`
  font-family: 'Cinzel', serif;
  font-size: 1.8rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

const ServiceDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #CCCCCC;
  line-height: 1.7;
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`;

const ServiceFeature = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #CCCCCC;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
  
  &::before {
    content: '✦';
    position: absolute;
    left: 0;
    color: #FFD700;
  }
`;

const ServiceCTA = styled(motion.button)`
  width: 100%;
  padding: 12px 24px;
  background: transparent;
  color: #FFD700;
  border: 2px solid #FFD700;
  border-radius: 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
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

const ServicesGridComponent = () => {
  const [services, setServices] = useState([]);
  const sectionRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
        // Fallback data with detailed features
        setServices([
          {
            id: 1,
            title: 'Film Production',
            description: 'Full-scale cinematic productions from concept to final cut with state-of-the-art equipment and award-winning talent.',
            icon: '🎬',
            slug: 'film-production',
            features: ['Pre-production Planning', 'Principal Photography', 'Post-production', 'Color Grading', 'Sound Design']
          },
          {
            id: 2,
            title: 'Creative Advertising',
            description: 'Compelling commercial content that drives engagement and builds lasting brand connections with your audience.',
            icon: '📢',
            slug: 'creative-advertising',
            features: ['Brand Strategy', 'Creative Concepts', 'Commercial Production', 'Digital Campaigns', 'Social Media Content']
          },
          {
            id: 3,
            title: 'Content Strategy',
            description: 'Strategic content planning and brand storytelling that resonates with your target market and achieves business goals.',
            icon: '📋',
            slug: 'content-strategy',
            features: ['Content Planning', 'Brand Storytelling', 'Audience Analysis', 'Distribution Strategy', 'Performance Analytics']
          },
          {
            id: 4,
            title: 'Media Solutions',
            description: 'Comprehensive media production and distribution services for digital platforms and traditional broadcasting.',
            icon: '📡',
            slug: 'media-solutions',
            features: ['Live Streaming', 'Broadcast Production', 'Digital Distribution', 'Platform Optimization', 'Technical Support']
          },
          {
            id: 5,
            title: 'Documentary Production',
            description: 'Authentic documentary storytelling that captures real stories with compelling narrative and visual excellence.',
            icon: '📹',
            slug: 'documentary-production',
            features: ['Research & Development', 'Interview Production', 'Archival Integration', 'Narrative Structure', 'Festival Preparation']
          },
          {
            id: 6,
            title: 'Animation & VFX',
            description: 'Cutting-edge animation and visual effects that bring impossible worlds and characters to life.',
            icon: '🎨',
            slug: 'animation-vfx',
            features: ['2D/3D Animation', 'Visual Effects', 'Motion Graphics', 'Character Design', 'Compositing']
          }
        ]);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.service-3d-card', 
        { 
          opacity: 0, 
          rotationY: -45,
          z: -100
        },
        {
          opacity: 1,
          rotationY: 0,
          z: 0,
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
    }, sectionRef);

    return () => ctx.revert();
  }, [services]);

  return (
    <ServicesSection ref={sectionRef}>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          What We Do
        </SectionTitle>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard3D
              key={service.id}
              className="service-3d-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceIcon3D
                whileHover={{ rotateY: 15, rotateX: -15 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </ServiceIcon3D>
              
              <ServiceTitle>{service.title}</ServiceTitle>
              
              <ServiceDescription>{service.description}</ServiceDescription>
              
              {service.features && (
                <ServiceFeatures>
                  {service.features.map((feature, idx) => (
                    <ServiceFeature key={idx}>{feature}</ServiceFeature>
                  ))}
                </ServiceFeatures>
              )}
              
              <ServiceCTA
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/services/${service.slug}`)}
              >
                Learn More
              </ServiceCTA>
            </ServiceCard3D>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default ServicesGridComponent;
