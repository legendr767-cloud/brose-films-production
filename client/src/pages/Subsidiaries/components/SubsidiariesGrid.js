import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';

const Section = styled.section`
  position: relative;
  padding: 72px 24px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(24px, 3.6vw, 36px);
  color: #fff;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.article)`
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
  border: 1px solid rgba(255,255,255,0.08);
  padding: 24px;
  transition: transform 300ms ease, box-shadow 300ms ease;
  will-change: transform;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(255, 174, 0, 0.12);
  }
`;

const LogoWrap = styled.div`
  display: grid;
  place-items: center;
  height: 120px;
  margin-bottom: 16px;
`;

const LogoImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  filter: drop-shadow(0 6px 16px rgba(255, 174, 0, 0.18));
`;

const Name = styled.h3`
  margin: 8px 0 6px;
  color: #fff;
  font-size: 18px;
`;

const Meta = styled.div`
  color: #a1a1aa;
  font-size: 13px;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  color: #d1d5db;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
`;

const fallbackSubsidiaries = [
  {
    id: 1,
    name: 'Brose Studios',
    description: 'End‑to‑end film production with premium on‑set and post capabilities.',
    logoUrl: 'https://dummyimage.com/300x120/0b0b0b/ffd700&text=Brose+Studios',
    established_year: 2012
  },
  {
    id: 2,
    name: 'Brose VFX',
    description: 'Photoreal visual effects, simulations, and digital environments.',
    logoUrl: 'https://dummyimage.com/300x120/0b0b0b/ffa500&text=Brose+VFX',
    established_year: 2016
  },
  {
    id: 3,
    name: 'Brose Sound',
    description: 'Original scores, sound design, and immersive mixes for cinema.',
    logoUrl: 'https://dummyimage.com/300x120/0b0b0b/ffffff&text=Brose+Sound',
    established_year: 2018
  }
];

const SubsidiariesGrid = () => {
  const [subsidiaries, setSubsidiaries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { data } = await axios.get('/api/subsidiaries');
        if (!mounted) return;
        // Normalize keys to camelCase where needed
        const normalized = data.map(s => ({
          id: s.id,
          name: s.name,
          description: s.description,
          logoUrl: s.logo_url || s.logoUrl,
          established_year: s.established_year ?? s.establishedYear
        }));
        setSubsidiaries(normalized);
      } catch (e) {
        setSubsidiaries(fallbackSubsidiaries);
      } finally {
        setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const list = loading && subsidiaries.length === 0 ? fallbackSubsidiaries : subsidiaries;

  return (
    <Section>
      <Header>
        <Title>Brands in the Group</Title>
      </Header>
      <Grid>
        {list.map((sub, i) => (
          <Card
            key={sub.id ?? i}
            className="subsidiary-logo"
            initial={{ opacity: 0, rotateY: 90, scale: 0.9 }}
            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: i * 0.06, ease: 'easeOut' }}
          >
            <LogoWrap>
              {sub.logoUrl ? (
                <LogoImg src={sub.logoUrl} alt={sub.name} />
              ) : (
                <LogoImg src={`https://dummyimage.com/300x120/0b0b0b/ffd700&text=${encodeURIComponent(sub.name)}`} alt={sub.name} />
              )}
            </LogoWrap>
            <Name>{sub.name}</Name>
            {sub.established_year && (
              <Meta>Established {sub.established_year}</Meta>
            )}
            {sub.description && <Desc>{sub.description}</Desc>}
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default SubsidiariesGrid;
