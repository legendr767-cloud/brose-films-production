import React from 'react';
import styled from 'styled-components';
// import { motion } from 'framer-motion';

const Section = styled.section`
  position: relative;
  padding: 80px 24px 120px;
  background: radial-gradient(900px 500px at 20% 0%, rgba(255, 215, 0, 0.12), rgba(0,0,0,0) 70%),
              radial-gradient(1000px 600px at 80% 20%, rgba(255, 165, 0, 0.08), rgba(0,0,0,0) 70%),
              #000;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  margin: 0 0 12px;
  color: #fff;
  font-size: clamp(24px, 3.6vw, 36px);
`;

const Subtitle = styled.p`
  margin: 0 0 32px;
  color: #d1d5db;
`;

const NetworkWrap = styled.div`
  position: relative;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  overflow: hidden;
`;

const Svg = styled.svg`
  display: block;
  width: 100%;
  height: auto;
  background: radial-gradient(800px 420px at 50% 10%, rgba(255, 215, 0, 0.06), rgba(0,0,0,0) 70%);
`;

const Legend = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  padding: 16px;
  color: #a1a1aa;
  font-size: 13px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Dot = styled.span`
  display: inline-block;
  width: 8px; height: 8px;
  border-radius: 999px;
  margin-right: 8px;
  vertical-align: middle;
  background: ${(p) => p.color || '#ffd700'};
  box-shadow: 0 0 0 2px rgba(255,255,255,0.06) inset;
`;

const Item = styled.div``;

const NetworkSection = () => {
  return (
    <Section>
      <Container>
        <Title>Our Creative Network</Title>
        <Subtitle>
          A simplified view of collaboration across our brands — from ideation to delivery. Lines represent
          the typical flow of assets and feedback between teams.
        </Subtitle>

        <NetworkWrap>
          <Svg viewBox="0 0 1200 520" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <defs>
              <linearGradient id="g1" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.0"/>
                <stop offset="50%" stopColor="#FFD700" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#FFA500" stopOpacity="0.0"/>
              </linearGradient>
            </defs>

            <rect x="0" y="0" width="1200" height="520" fill="transparent" />

            <g opacity="0.9">
              <path d="M100 120 C 320 80, 460 160, 680 120 S 1040 80, 1100 140" stroke="url(#g1)" strokeWidth="2.2" fill="none" />
              <path d="M120 280 C 340 260, 420 320, 660 300 S 980 300, 1080 260" stroke="url(#g1)" strokeWidth="2.2" fill="none" />
              <path d="M100 420 C 360 400, 520 360, 780 420 S 1040 460, 1100 420" stroke="url(#g1)" strokeWidth="2.2" fill="none" />
            </g>

            <g>
              <circle cx="120" cy="120" r="6" fill="#FFD700" />
              <text x="140" y="124" fill="#fff" fontSize="14">Brose Studios</text>

              <circle cx="120" cy="280" r="6" fill="#FFA500" />
              <text x="140" y="284" fill="#fff" fontSize="14">Brose VFX</text>

              <circle cx="120" cy="420" r="6" fill="#ffffff" />
              <text x="140" y="424" fill="#fff" fontSize="14">Brose Sound</text>

              <circle cx="1080" cy="260" r="6" fill="#FFD700" />
              <text x="1000" y="244" fill="#fff" fontSize="14" textAnchor="end">Editorial</text>

              <circle cx="1080" cy="420" r="6" fill="#FFA500" />
              <text x="1000" y="404" fill="#fff" fontSize="14" textAnchor="end">Color</text>

              <circle cx="1080" cy="140" r="6" fill="#ffffff" />
              <text x="1000" y="124" fill="#fff" fontSize="14" textAnchor="end">Delivery</text>
            </g>
          </Svg>

          <Legend>
            <Item><Dot color="#FFD700" /> Pre‑production & Production</Item>
            <Item><Dot color="#FFA500" /> Post‑production & VFX</Item>
            <Item><Dot color="#ffffff" /> Audio & Final Delivery</Item>
          </Legend>
        </NetworkWrap>
      </Container>
    </Section>
  );
};

export default NetworkSection;
