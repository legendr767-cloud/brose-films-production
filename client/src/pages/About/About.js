import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import ValuesSection from './components/ValuesSection';
import TimelineSection from './components/TimelineSection';
import TeamSection from './components/TeamSection';

gsap.registerPlugin(ScrollTrigger);

const AboutContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  background: #000000;
`;

const About = () => {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic page transitions
      gsap.fromTo('.about-section', 
        { 
          opacity: 0, 
          y: 100 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.about-section',
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <AboutContainer ref={containerRef}>
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
    </AboutContainer>
  );
};

export default About;
