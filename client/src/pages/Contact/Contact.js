import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { motion } from 'framer-motion';

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
  grid-template-columns: 1.2fr 0.8fr;
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

const Field = styled.div`
  display: grid;
  margin-bottom: 16px;
`;

const Label = styled.label`
  color: #e5e7eb;
  font-size: 13px;
  margin-bottom: 6px;
`;

const Input = styled.input`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  color: #fff;
  padding: 12px 14px;
  border-radius: 10px;
  outline: none;
  transition: border-color 200ms ease;
  &:focus { border-color: rgba(255, 215, 0, 0.6); }
`;

const Textarea = styled.textarea`
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  color: #fff;
  padding: 12px 14px;
  border-radius: 10px;
  outline: none;
  min-height: 140px;
  resize: vertical;
  transition: border-color 200ms ease;
  &:focus { border-color: rgba(255, 215, 0, 0.6); }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  @media (max-width: 520px) { grid-template-columns: 1fr; }
`;

const Button = styled.button`
  appearance: none;
  display: inline-grid;
  place-items: center;
  height: 44px;
  padding: 0 16px;
  border-radius: 10px;
  border: 0;
  color: #0a0a0a;
  font-weight: 600;
  background: linear-gradient(135deg, #FFD700, #FFA500);
  cursor: pointer;
  transition: transform 120ms ease, box-shadow 200ms ease;
  box-shadow: 0 8px 24px rgba(255, 174, 0, 0.25);
  &:disabled { opacity: 0.6; cursor: not-allowed; }
  &:hover { transform: translateY(-1px); }
`;

const Note = styled.p`
  color: #9ca3af;
  font-size: 12px;
  margin-top: 10px;
`;

const InfoItem = styled.div`
  color: #e5e7eb;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  &:last-child { border-bottom: 0; }
`;

const Contact = () => {
  const pageRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

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

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);
    try {
      const { data } = await axios.post('/api/contact', form);
      if (data?.success) {
        setFeedback({ type: 'success', message: 'Message sent. We\'ll get back to you shortly.' });
        setForm({ name: '', email: '', company: '', subject: '', message: '' });
      } else {
        setFeedback({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      const msg = err?.response?.data?.error || 'Unable to send message. Please try later.';
      setFeedback({ type: 'error', message: msg });
    } finally {
      setSubmitting(false);
    }
  };

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
            <form onSubmit={onSubmit}>
              <Row>
                <Field>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" value={form.name} onChange={onChange} required placeholder="Jane Doe" />
                </Field>
                <Field>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" name="email" value={form.email} onChange={onChange} required placeholder="jane@studio.com" />
                </Field>
              </Row>

              <Row>
                <Field>
                  <Label htmlFor="company">Company (optional)</Label>
                  <Input id="company" name="company" value={form.company} onChange={onChange} placeholder="Brose Films" />
                </Field>
                <Field>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={form.subject} onChange={onChange} placeholder="Commercial, Music Video, Feature..." />
                </Field>
              </Row>

              <Field>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" value={form.message} onChange={onChange} required placeholder="Share your brief, goals, references, budget range, and deadlines." />
              </Field>

              <Button type="submit" disabled={submitting}>{submitting ? 'Sending…' : 'Send Message'}</Button>
              <Note>By submitting, you agree to our processing your info to respond to your inquiry.</Note>

              {feedback && (
                <p style={{ marginTop: 12, color: feedback.type === 'success' ? '#86efac' : '#fca5a5' }}>{feedback.message}</p>
              )}
            </form>
          </Card>

          <Card initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }}>
            <h3 style={{ marginTop: 0, color: '#fff' }}>Studios</h3>
            <InfoItem>Lagos, Nigeria</InfoItem>
            <InfoItem>London, UK</InfoItem>
            <InfoItem>Accra, GH</InfoItem>

            <h3 style={{ marginTop: 24, color: '#fff' }}>Business</h3>
            <InfoItem>info@brosefilmsproduction.com</InfoItem>
            <InfoItem>+2348136653720</InfoItem>

            <h3 style={{ marginTop: 24, color: '#fff' }}>Social</h3>
            <InfoItem>@brosefilms</InfoItem>
          </Card>
        </Content>
      </Container>
    </Page>
  );
};

export default Contact;
