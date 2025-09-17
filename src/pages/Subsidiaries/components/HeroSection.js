import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroWrapper = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  height: clamp(60vh, 75vh, 85vh);
  padding: 0 24px;
  overflow: hidden;
  background: radial-gradient(1200px 600px at 50% -10%, rgba(255, 215, 0, 0.18), rgba(0,0,0,0) 70%),
              radial-gradient(900px 500px at 80% 20%, rgba(255, 165, 0, 0.12), rgba(0,0,0,0) 70%),
              #000;
`;

const Grain = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  opacity: 0.12;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.35"/></svg>');
  mix-blend-mode: screen;
`;

const Title = styled(motion.h1)`
  text-align: center;
  font-size: clamp(36px, 6vw, 72px);
  line-height: 1.05;
  margin: 0;
  letter-spacing: 0.02em;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 35%, #ffffff 70%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  color: #d1d5db;
  margin-top: 16px;
  font-size: clamp(14px, 2.2vw, 18px);
  max-width: 760px;
`;

const Accent = styled.div`
  position: absolute;
  inset: auto 0 0 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.6), transparent);
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <Grain />
      <Title
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Our Subsidiaries
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
      >
        Explore the Brose Films group network. Each subsidiary specializes in a distinct craft, combining to deliver world‑class cinematic experiences.
      </Subtitle>
      <Accent />
    </HeroWrapper>
  );
};

export default HeroSection;
