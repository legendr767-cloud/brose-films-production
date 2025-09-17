import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './components/HeroSection';
import SubsidiariesPreview from './components/SubsidiariesPreview';
import ServicesPreview from './components/ServicesPreview';
import FeaturedProjects from './components/FeaturedProjects';

gsap.registerPlugin(ScrollTrigger);

const HomeContainer = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const Home = () => {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax scrolling effects
      gsap.utils.toArray('.parallax-element').forEach((element) => {
        gsap.to(element, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Fade in animations
      gsap.utils.toArray('.fade-in-section').forEach((section) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
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
    <HomeContainer ref={containerRef}>
      <HeroSection />
      <SubsidiariesPreview />
      <ServicesPreview />
      <FeaturedProjects />
    </HomeContainer>
  );
};

export default Home;
