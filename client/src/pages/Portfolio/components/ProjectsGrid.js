import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
import axios from 'axios';

const ProjectsSection = styled.section`
  position: relative;
  padding: 80px 0 120px;
  background: #000000;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  
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
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 30px 60px rgba(255, 215, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 65%;
  background: linear-gradient(135deg, #1a1a1a 0%, #333333 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: #FFD700;
  transition: transform 0.6s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 35%;
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

const PlayButton = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(255, 215, 0, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #000000;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 3;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
  
  &::before {
    content: '▶';
    margin-left: 4px;
  }
`;

const LoadMoreButton = styled(motion.button)`
  display: block;
  margin: 60px auto 0;
  padding: 18px 36px;
  background: transparent;
  color: #FFD700;
  border: 2px solid #FFD700;
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
    left: 0;
    width: 0;
    height: 100%;
    background: #FFD700;
    transition: width 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    width: 100%;
  }
  
  &:hover {
    color: #000000;
    transform: translateY(-2px);
  }
`;

const ProjectsGridComponent = () => {
  const [projects, setProjects] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [projectsToShow, setProjectsToShow] = useState(6);
  const sectionRef = useRef();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback data
        const fallbackProjects = [
          {
            id: 1,
            title: 'The Last Frontier',
            description: 'Epic adventure film showcasing breathtaking landscapes',
            category: 'Feature Film',
            client: 'Independent',
            year: 2023
          },
          {
            id: 2,
            title: 'Brand Revolution',
            description: 'Award-winning commercial campaign for luxury automotive',
            category: 'Commercial',
            client: 'Luxury Auto Corp',
            year: 2023
          },
          {
            id: 3,
            title: 'Digital Dreams',
            description: 'Innovative web series exploring future technology',
            category: 'Web Series',
            client: 'Tech Innovators',
            year: 2023
          },
          {
            id: 4,
            title: 'Corporate Vision',
            description: 'Professional corporate video series',
            category: 'Corporate',
            client: 'Fortune 500 Company',
            year: 2022
          },
          {
            id: 5,
            title: 'Ocean Depths',
            description: 'Environmental documentary about marine conservation',
            category: 'Documentary',
            client: 'Nature Foundation',
            year: 2022
          },
          {
            id: 6,
            title: 'Rhythm & Soul',
            description: 'High-energy music video with stunning visuals',
            category: 'Music Video',
            client: 'Rising Star Records',
            year: 2023
          },
          {
            id: 7,
            title: 'Future Cities',
            description: 'Sci-fi short film about urban development',
            category: 'Feature Film',
            client: 'Film Festival',
            year: 2022
          },
          {
            id: 8,
            title: 'Innovation Spotlight',
            description: 'Tech company brand story and product showcase',
            category: 'Commercial',
            client: 'Tech Giant Inc',
            year: 2023
          }
        ];
        setProjects(fallbackProjects);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    setDisplayedProjects(projects.slice(0, projectsToShow));
  }, [projects, projectsToShow]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-item', 
        { 
          opacity: 0, 
          scale: 0.8,
          rotationY: -15
        },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
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
  }, [displayedProjects]);

  const getCategoryIcon = (category) => {
    const icons = {
      'Feature Film': '🎬',
      'Commercial': '📺',
      'Web Series': '💻',
      'Corporate': '🏢',
      'Documentary': '📹',
      'Music Video': '🎵'
    };
    return icons[category] || '🎬';
  };

  const loadMoreProjects = () => {
    setProjectsToShow(prev => prev + 6);
  };

  return (
    <ProjectsSection ref={sectionRef}>
      <Container>
        <ProjectsGrid>
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              className="project-item"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectImage>
                {getCategoryIcon(project.category)}
              </ProjectImage>
              
              <PlayButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              
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

        {displayedProjects.length < projects.length && (
          <LoadMoreButton
            onClick={loadMoreProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Projects
          </LoadMoreButton>
        )}
      </Container>
    </ProjectsSection>
  );
};

export default ProjectsGridComponent;
