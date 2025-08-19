import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FilterContainer = styled.section`
  position: relative;
  padding: 60px 0;
  background: linear-gradient(180deg, #000000 0%, #0a0a0a 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const FilterButton = styled(motion.button)`
  padding: 12px 24px;
  background: ${props => props.active ? 'linear-gradient(45deg, #FFD700, #FFA500)' : 'transparent'};
  color: ${props => props.active ? '#000000' : '#FFD700'};
  border: 2px solid #FFD700;
  border-radius: 30px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 100%;
    background: linear-gradient(45deg, #FFD700, #FFA500);
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

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 15px 20px;
  background: rgba(255, 215, 0, 0.05);
  border: 2px solid rgba(255, 215, 0, 0.3);
  border-radius: 50px;
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #CCCCCC;
  }
  
  &:focus {
    border-color: #FFD700;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
  }
`;

const FilterSection = ({ onFilterChange, onSearchChange }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filterCategories = [
    'All',
    'Feature Film',
    'Commercial',
    'Web Series',
    'Documentary',
    'Corporate',
    'Music Video'
  ];

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    if (onFilterChange) {
      onFilterChange(category);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  return (
    <FilterContainer>
      <Container>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </SearchContainer>
        
        <FilterButtons>
          {filterCategories.map((category) => (
            <FilterButton
              key={category}
              active={activeFilter === category}
              onClick={() => handleFilterClick(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </FilterButton>
          ))}
        </FilterButtons>
      </Container>
    </FilterContainer>
  );
};

export default FilterSection;
