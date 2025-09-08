import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';

const ProjectsSection = styled.section`
  position: relative;
  padding: 120px 0;
  background: linear-gradient(180deg, #000000 0%, #0a0a0a 50%, #000000 100%);
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const SectionTitle = styled(motion.h2)`
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

const SectionSubtitle = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  color: #CCCCCC;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  height: 500px;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(0, 0, 0, 0.95) 100%);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 215, 0, 0.1) 0%, transparent 50%);
    opacity: 0;
    transition: opacity 0.6s ease;
    z-index: 1;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 30px 60px rgba(255, 215, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
  background-image: ${props => props.image ? `url(${props.image})` : 'none'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #FFD700;
  transition: transform 0.6s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  padding: 2rem;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.95) 30%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
`;

const ProjectCategory = styled.div`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: rgba(255, 215, 0, 0.2);
  border: 1px solid rgba(255, 215, 0, 0.4);
  border-radius: 15px;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: #FFD700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  width: fit-content;
`;

const ProjectTitle = styled.h3`
  font-family: 'Cinzel', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const ProjectClient = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #CCCCCC;
`;

const ProjectYear = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #999999;
  font-style: italic;
`;

const ViewAllButton = styled(motion.button)`
  display: block;
  margin: 60px auto 0;
  padding: 18px 36px;
  background: linear-gradient(45deg, #FFD700, #FFA500);
  color: #000000;
  border: none;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 40px rgba(255, 215, 0, 0.3);
  }
`;

const FilmStripDecoration = styled.div`
  position: absolute;
  top: 0;
  right: -50px;
  width: 100px;
  height: 100%;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255, 215, 0, 0.1) 0px,
    rgba(255, 215, 0, 0.1) 20px,
    transparent 20px,
    transparent 40px
  );
  opacity: 0.3;
  transform: rotate(15deg);
  pointer-events: none;
`;

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);
  const sectionRef = useRef();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects?featured=true&limit=2');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback data
        setProjects([
          {
            id: 1,
            title: "JACOB's TRAIT",
            description: 'A captivating drama exploring complex human relationships and personal growth',
            category: 'Feature Film',
            client: 'Brose Films Production',
            year: 2025,
            image: '/brose-films-production/assets/images/jacobs-trait-poster.jpg'
          },
          {
            id: 2,
            title: 'WRONG RIGHT',
            description: 'An intriguing story that challenges perceptions of right and wrong',
            category: 'Feature Film',
            client: 'Brose Films Production',
            year: 2025,
            image: '/brose-films-production/assets/images/wrong-right-poster.jpg'
          }
        ]);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card', 
        { 
          opacity: 0, 
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [projects]);

  const getCategoryIcon = (category) => {
    const icons = {
      'Feature Film': '🎬',
      'Commercial': '📺',
      'Web Series': '💻',
      'Corporate': '🏢',
      'Documentary': '📹'
    };
    return icons[category] || '🎬';
  };

  return (
    <ProjectsSection ref={sectionRef} className="fade-in-section">
      <FilmStripDecoration />
      
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Discover our award-winning films, commercials, and media productions that have captivated audiences worldwide.
          </SectionSubtitle>
        </SectionHeader>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              className="project-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectImage image={project.image}>
                {!project.image && getCategoryIcon(project.category)}
              </ProjectImage>
              
              <ProjectContent>
                <ProjectCategory>
                  {project.category}
                </ProjectCategory>
                <ProjectTitle>
                  {project.title}
                </ProjectTitle>
                <ProjectMeta>
                  <ProjectClient>
                    {project.client}
                  </ProjectClient>
                  <ProjectYear>
                    {project.year}
                  </ProjectYear>
                </ProjectMeta>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

      </Container>
    </ProjectsSection>
  );
};

export default FeaturedProjects;
