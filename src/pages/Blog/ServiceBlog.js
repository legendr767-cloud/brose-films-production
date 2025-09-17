import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlogContainer = styled.div`
  min-height: 100vh;
  background: #000000;
  padding-top: 120px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const BlogTitle = styled(motion.h1)`
  font-family: 'Cinzel', serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  letter-spacing: 2px;
`;

const BlogSubtitle = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  color: #CCCCCC;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const BlogContent = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(0, 0, 0, 0.8) 100%);
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 3rem;
`;

const BlogSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Cinzel', serif;
  font-size: 1.8rem;
  color: #FFD700;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

const SectionText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #CCCCCC;
  line-height: 1.7;
  margin-bottom: 1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const FeatureItem = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #CCCCCC;
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 2rem;
  
  &::before {
    content: '✦';
    position: absolute;
    left: 0;
    color: #FFD700;
    font-size: 1.2rem;
  }
`;

const BackButton = styled(motion.button)`
  padding: 12px 24px;
  background: transparent;
  color: #FFD700;
  border: 2px solid #FFD700;
  border-radius: 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  margin-top: 2rem;
  
  &:hover {
    background: #FFD700;
    color: #000000;
  }
`;

const ServiceBlog = () => {
  const { serviceSlug } = useParams();

  const serviceContent = {
    'film-production': {
      title: 'Film Production Excellence',
      subtitle: 'Bringing cinematic visions to life with world-class production values',
      sections: [
        {
          title: 'Our Approach',
          content: 'At Brose Films Production, we believe that every story deserves to be told with the highest production values. Our film production services encompass the entire filmmaking process, from initial concept development to final delivery.'
        },
        {
          title: 'Pre-Production Services',
          content: 'Our pre-production phase is where the magic begins. We work closely with you to develop your vision into a concrete plan.',
          features: [
            'Script development and story consultation',
            'Location scouting and management',
            'Casting and talent coordination',
            'Production scheduling and budgeting',
            'Equipment planning and logistics'
          ]
        },
        {
          title: 'Production Excellence',
          content: 'During production, our experienced crew ensures every shot meets our exacting standards.',
          features: [
            'Professional cinematography with latest camera technology',
            'Expert lighting and grip services',
            'Professional sound recording and monitoring',
            'On-set direction and creative guidance',
            'Real-time quality control and review'
          ]
        },
        {
          title: 'Post-Production Mastery',
          content: 'Our post-production services bring your footage to life with professional editing, color grading, and sound design.',
          features: [
            'Professional editing and story refinement',
            'Color grading and visual enhancement',
            'Sound design and audio mixing',
            'Visual effects and motion graphics',
            'Final delivery in multiple formats'
          ]
        }
      ]
    },
    'creative-advertising': {
      title: 'Creative Advertising Solutions',
      subtitle: 'Crafting compelling brand stories that drive engagement and results',
      sections: [
        {
          title: 'Brand Storytelling',
          content: 'We create advertising content that goes beyond selling products – we tell stories that connect with your audience on an emotional level.'
        },
        {
          title: 'Commercial Production',
          content: 'From concept to completion, we handle every aspect of commercial production.',
          features: [
            'Creative concept development',
            'Brand strategy alignment',
            'Multi-platform content creation',
            'Performance tracking and optimization',
            'Campaign management and execution'
          ]
        }
      ]
    },
    'content-strategy': {
      title: 'Strategic Content Planning',
      subtitle: 'Data-driven content strategies that resonate with your target audience',
      sections: [
        {
          title: 'Strategic Planning',
          content: 'Our content strategy services help you create meaningful connections with your audience through carefully planned and executed content.'
        },
        {
          title: 'Our Services',
          content: 'We provide comprehensive content strategy services tailored to your brand needs.',
          features: [
            'Audience research and persona development',
            'Content calendar planning and management',
            'Brand voice and messaging guidelines',
            'Distribution strategy optimization',
            'Performance analytics and reporting'
          ]
        }
      ]
    },
    'media-solutions': {
      title: 'Comprehensive Media Solutions',
      subtitle: 'End-to-end media production and distribution services',
      sections: [
        {
          title: 'Digital Media Excellence',
          content: 'Our media solutions cover everything from live streaming to broadcast production, ensuring your content reaches your audience effectively.'
        },
        {
          title: 'Technical Capabilities',
          content: 'We provide cutting-edge technical solutions for all your media needs.',
          features: [
            'Live streaming and broadcast production',
            'Multi-platform content distribution',
            'Technical support and consultation',
            'Platform optimization and management',
            'Quality assurance and monitoring'
          ]
        }
      ]
    },
    'documentary-production': {
      title: 'Documentary Production',
      subtitle: 'Authentic storytelling that captures real stories with compelling narrative',
      sections: [
        {
          title: 'Authentic Storytelling',
          content: 'Our documentary production services focus on telling real stories with integrity, creativity, and compelling visual narrative.'
        },
        {
          title: 'Production Process',
          content: 'We handle every aspect of documentary production from research to final delivery.',
          features: [
            'Research and story development',
            'Interview production and coordination',
            'Archival footage integration',
            'Narrative structure development',
            'Festival preparation and submission'
          ]
        }
      ]
    },
    'animation-vfx': {
      title: 'Animation & Visual Effects',
      subtitle: 'Bringing impossible worlds and characters to life through cutting-edge animation',
      sections: [
        {
          title: 'Creative Animation',
          content: 'Our animation and VFX services combine artistic creativity with technical excellence to create stunning visual experiences.'
        },
        {
          title: 'Technical Capabilities',
          content: 'We offer a full range of animation and visual effects services.',
          features: [
            '2D and 3D animation production',
            'Visual effects and compositing',
            'Motion graphics and title design',
            'Character design and development',
            'Technical consultation and planning'
          ]
        }
      ]
    }
  };

  const content = serviceContent[serviceSlug] || serviceContent['film-production'];

  return (
    <BlogContainer>
      <Container>
        <BlogHeader>
          <BlogTitle
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content.title}
          </BlogTitle>
          <BlogSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content.subtitle}
          </BlogSubtitle>
        </BlogHeader>

        <BlogContent
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {content.sections.map((section, index) => (
            <BlogSection key={index}>
              <SectionTitle>{section.title}</SectionTitle>
              <SectionText>{section.content}</SectionText>
              {section.features && (
                <FeatureList>
                  {section.features.map((feature, idx) => (
                    <FeatureItem key={idx}>{feature}</FeatureItem>
                  ))}
                </FeatureList>
              )}
            </BlogSection>
          ))}

          <BackButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
          >
            Back to Services
          </BackButton>
        </BlogContent>
      </Container>
    </BlogContainer>
  );
};

export default ServiceBlog;
