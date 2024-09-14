import React, { useState } from 'react';
import './CircularCarousel.css';

const CircularCarousel = ({ projects, setSelectedProject, selectedProject, setCarouselOpen }) => {
  const [carouselOpen, setLocalCarouselOpen] = useState(false);

  const handleButtonClick = () => {
    setLocalCarouselOpen(!carouselOpen);
    setCarouselOpen(!carouselOpen); // Propagate the open state to parent
  };

  const handleItemClick = (project) => {
    setSelectedProject(project); // Set the selected project
    setLocalCarouselOpen(false);
    setCarouselOpen(false); // Close carousel and remove blur
  };

  return (
    <div className="carousel-container">
      {/* Central button */}
      <div
        className={`center-button ${carouselOpen ? 'open' : ''}`}
        onClick={handleButtonClick}
      >
        {/* Show the selected project's thumbnail */}
        <img
          src={selectedProject.thumbnail}
          alt="Thumbnail"
          className="object-fit"
        />
      </div>

      {/* Carousel items */}
      <div className={`carousel-items ${carouselOpen ? 'active' : ''}`}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`carousel-item ${carouselOpen ? 'open' : 'close'}`}
            style={{
              top: `calc(50% + ${100 * Math.sin((index * 2 * Math.PI) / projects.length)}px)`,
              left: `calc(50% + ${100 * Math.cos((index * 2 * Math.PI) / projects.length)}px)`,
            }}
            onClick={() => handleItemClick(project)}
          >
            <img
              src={project.thumbnail}
              alt={`${project.name} Thumbnail`}
              className="object-fill"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularCarousel;




