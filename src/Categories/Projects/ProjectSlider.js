import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import './ProjectSlider.css';

const ProjectSlider = ({ projects, selectedProjectIndex, setSelectedProjectIndex }) => {
  const handlePrevious = () => {
    const newIndex = (selectedProjectIndex - 1 + projects.length) % projects.length;
    setSelectedProjectIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (selectedProjectIndex + 1) % projects.length;
    setSelectedProjectIndex(newIndex);
  };

  return (
    <div className="project-slider flex items-center justify-center">
      <IconButton onClick={handlePrevious}>
        <ArrowBack fontSize="large" />
      </IconButton>

      <div className="cards-container flex space-x-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${index === selectedProjectIndex ? 'selected' : ''}`}
            onClick={() => setSelectedProjectIndex(index)}
          >
            <img
              src={project.images[0]}
              alt={project.name}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      <IconButton onClick={handleNext}>
        <ArrowForward fontSize="large" />
      </IconButton>
    </div>
  );
};

export default ProjectSlider;
