import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import ProcessSection from './components/ProcessSection';
import CTASection from './components/CTASection';

gsap.registerPlugin(ScrollTrigger);

const ServicesContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  background: #000000;
`;

const Services = () => {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D card animations
      gsap.utils.toArray('.service-3d-card').forEach((card, index) => {
        gsap.fromTo(card, 
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
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <ServicesContainer ref={containerRef}>
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
      <CTASection />
    </ServicesContainer>
  );
};

export default Services;
