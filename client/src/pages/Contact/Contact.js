import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import YouTubeIcon from '../../assets/images/youtube-icon.svg';
import InstagramIcon from '../../assets/images/instagram-icon.svg';
import TikTokIcon from '../../assets/images/tiktok-icon.svg';

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  background: #000;
  overflow: hidden;
`;

const Spotlight = styled.div`
  pointer-events: none;
  position: absolute;
  inset: 0;
  background: radial-gradient(500px 280px at var(--x, 50%) var(--y, 30%), rgba(255, 215, 0, 0.12), rgba(0,0,0,0) 60%);
  transition: background-position 120ms linear;
`;

const Container = styled.div`
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 96px 24px 120px;
`;

const Title = styled(motion.h1)`
  margin: 0 0 12px;
  font-size: clamp(32px, 5vw, 56px);
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 40%, #ffffff 80%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Subtitle = styled(motion.p)`
  margin: 0 0 40px;
  color: #d1d5db;
  max-width: 760px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  position: relative;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  padding: 24px;
`;

const ContactNote = styled.div`
  color: #d1d5db;
  line-height: 1.6;
  margin-bottom: 24px;
  
  p {
    margin: 0 0 16px;
  }
  
  .highlight {
    color: #FFD700;
    font-weight: 600;
  }
`;

const InfoItem = styled.div`
  color: #e5e7eb;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  &:last-child { border-bottom: 0; }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #e5e7eb;
  text-decoration: none;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  transition: color 0.3s ease;
  
  &:hover {
    color: #FFD700;
  }
  
  &:last-child {
    border-bottom: 0;
  }
`;

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  filter: brightness(0.8);
  transition: filter 0.3s ease;
  
  ${SocialLink}:hover & {
    filter: brightness(1);
  }
`;

const Contact = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const el = pageRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--x', x + '%');
      el.style.setProperty('--y', y + '%');
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <Page>
      <Spotlight ref={pageRef} />
      <Container>
        <Title initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Contact Us
        </Title>
        <Subtitle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
          Have a project in mind? Tell us about your vision and timeline. Our producers will respond within 1–2 business days.
        </Subtitle>

        <Content>
          <Card initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 style={{ marginTop: 0, color: '#fff', marginBottom: '20px' }}>Get In Touch</h3>
            <ContactNote>
              <p>
                We're currently transitioning our contact system to provide you with an even better experience. 
                In the meantime, please reach out to us directly using any of the methods below.
              </p>
              <p>
                For project inquiries, collaborations, or any questions about our services, 
                we'd love to hear from you. Our team typically responds within <span className="highlight">1-2 business days</span>.
              </p>
              <p>
                Whether you're looking for commercial work, music videos, documentaries, or creative consulting, 
                let's discuss how we can bring your vision to life.
              </p>
            </ContactNote>
          </Card>

          <Card initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}>
            <h3 style={{ marginTop: 0, color: '#fff' }}>Studio</h3>
            <InfoItem>Lagos, Nigeria</InfoItem>

            <h3 style={{ marginTop: 24, color: '#fff' }}>Business</h3>
            <InfoItem>info@brosefilmsproduction.com</InfoItem>
            <InfoItem>+2348136653720</InfoItem>

            <h3 style={{ marginTop: 24, color: '#fff' }}>Social</h3>
            <SocialLinks>
              <SocialLink href="https://www.youtube.com/@brosefilmsproduction" target="_blank" rel="noopener noreferrer">
                <SocialIcon src={YouTubeIcon} alt="YouTube" />
                <span>@brosefilmsproduction</span>
              </SocialLink>
              <SocialLink href="https://www.instagram.com/brosefilmsproduction?igsh=MW9uaDdhdHhjMTJiZg==" target="_blank" rel="noopener noreferrer">
                <SocialIcon src={InstagramIcon} alt="Instagram" />
                <span>@brosefilmsproduction</span>
              </SocialLink>
              <SocialLink href="https://www.tiktok.com/@brosefilmsproduction?_t=ZS-8zkhnnShDBX&_r=1" target="_blank" rel="noopener noreferrer">
                <SocialIcon src={TikTokIcon} alt="TikTok" />
                <span>@brosefilmsproduction</span>
              </SocialLink>
            </SocialLinks>
          </Card>
        </Content>
      </Container>
    </Page>
  );
};

export default Contact;
