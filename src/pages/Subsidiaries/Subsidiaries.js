import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './components/HeroSection';
import SubsidiariesGrid from './components/SubsidiariesGrid';
import NetworkSection from './components/NetworkSection';

gsap.registerPlugin(ScrollTrigger);

const SubsidiariesContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  background: #000000;
`;

const Subsidiaries = () => {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D logo reveal animations
      gsap.utils.toArray('.subsidiary-logo').forEach((logo, index) => {
        gsap.fromTo(logo, 
          { 
            opacity: 0, 
            rotationY: 90,
            scale: 0.5
          },
          {
            opacity: 1,
            rotationY: 0,
            scale: 1,
            duration: 1.2,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: logo,
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
    <SubsidiariesContainer ref={containerRef}>
      <HeroSection />
      <SubsidiariesGrid />
      <NetworkSection />
    </SubsidiariesContainer>
  );
};

export default Subsidiaries;
