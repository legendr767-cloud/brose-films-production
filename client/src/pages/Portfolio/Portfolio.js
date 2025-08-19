import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './components/HeroSection';
import ProjectsGrid from './components/ProjectsGrid';
import FilterSection from './components/FilterSection';

gsap.registerPlugin(ScrollTrigger);

const PortfolioContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  background: #000000;
`;

const Portfolio = () => {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic project reveal animations
      gsap.utils.toArray('.project-item').forEach((project, index) => {
        gsap.fromTo(project, 
          { 
            opacity: 0, 
            scale: 0.8,
            rotationY: -15
          },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: project,
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
    <PortfolioContainer ref={containerRef}>
      <HeroSection />
      <FilterSection />
      <ProjectsGrid />
    </PortfolioContainer>
  );
};

export default Portfolio;
