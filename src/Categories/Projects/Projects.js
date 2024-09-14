import React, { useState } from 'react';
import './Projects.css';
import { IconButton } from '@mui/material';
import { GitHub, Language } from '@mui/icons-material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Image slider styles
import ProjectSlider from './ProjectSlider'; // Import the slider component

const projectData = [
  {
    name: 'Secondhand.lk',
    description: 'The project was developed by my group for our degree and involved creating Secondhand.lk, a classified advertising website with modern features. I contributed to the development of the advertisement posting system, banner ad posting, and payment gateway integration, as well as implementing features like auto-complete, image compression, dynamic form generation, and real-time payments. Each member participated in every role throughout the project, including SRS creation, UX and UI design, development, testing, and deployment, with version control management.',
    github: 'https://github.com/waaswijeratna/secondhand.lk',
    live: null,
    logo: '/assets/projects/secondhand.lk/1.png',
    images: [
      '/assets/projects/secondhand.lk/1.png',
      '/assets/projects/secondhand.lk/2.png',
      '/assets/projects/secondhand.lk/3.png',
      '/assets/projects/secondhand.lk/4.png',
      '/assets/projects/secondhand.lk/5.png',
      '/assets/projects/secondhand.lk/6.png',
      '/assets/projects/secondhand.lk/7.png',
      '/assets/projects/secondhand.lk/8.png',
    ],
    technologies: [
      'assets/projects/technologies/angular.png',
      'assets/projects/technologies/html.png',
      'assets/projects/technologies/css.png',
      'assets/projects/technologies/nodejs.png',
      'assets/projects/technologies/mysql.png',
      'assets/projects/technologies/firebase.png',
      'assets/projects/technologies/stripe.png',
    ],
  },
  {
    name: 'Project Two',
    description: 'A brief description of project two.',
    github: 'https://github.com/waaswijeratna/secondhand.lk',
    live: 'https://project-one-live.com',
    logo: '/assets/projects/secondhand.lk/1.png',
    images: [
      '/assets/projects/secondhand.lk/1.png',
      '/assets/projects/project-two/image2.jpg',
    ],
    technologies: [
      '/assets/icons/nodejs.svg',
      '/assets/icons/express.svg',
    ],
  },
  {
    name: 'Project Two',
    description: 'A brief description of project two.',
    github: 'https://github.com/project-two',
    live: null,
    logo: '/assets/projects/secondhand.lk/1.png',
    images: [
      '/assets/projects/secondhand.lk/1.png',
      '/assets/projects/project-two/image2.jpg',
    ],
    technologies: [
      '/assets/icons/nodejs.svg',
      '/assets/icons/express.svg',
    ],
  },
  {
    name: 'Project Two',
    description: 'A brief description of project two.',
    github: 'https://github.com/project-two',
    live: null,
    logo: '/assets/projects/secondhand.lk/1.png',
    images: [
      '/assets/projects/secondhand.lk/1.png',
      '/assets/projects/project-two/image2.jpg',
    ],
    technologies: [
      '/assets/icons/nodejs.svg',
      '/assets/icons/express.svg',
    ],
  },
  // Add more projects as needed
];

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const selectedProject = projectData[selectedProjectIndex];

  return (
    <div className="projects-container mx-auto pt-6 h-screen">
      {/* Big Project Card */}
      <div className="big-card flex flex-col lg:flex-col shadow-lg rounded-lg p-6 w-[70vw] h-[70vh] mx-auto relative">

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row h-[80%]">

          {/* Left Side */}
          <div className="left-section flex flex-col w-full lg:w-3/5 p-3">
            <h2 className="text-3xl font-bold text-purple">{selectedProject.name}</h2>
            <p className="my-2 text-purple text-[2.8vmin] overflow-y-auto">{selectedProject.description}</p>

            <div className="flex space-x-4">
              <IconButton href={selectedProject.github} target="_blank" aria-label="GitHub">
                <GitHub fontSize="large" className="text-purple"/>
              </IconButton>
              {selectedProject.live && (
                <IconButton href={selectedProject.live} target="_blank" aria-label="Live">
                  <Language fontSize="large" className="text-purple"/>
                </IconButton>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="right-section w-full lg:w-2/5 p-4 flex flex-col justify-center items-center">

            <div className="w-[18rem] h-[12rem] ImgCarousal">
              <Carousel  showThumbs={false}>
                {selectedProject.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Screenshot ${index + 1}`}
                      className="object-contain aspect-[3/2]"
                    />
                  </div>
                ))}
              </Carousel>
            </div>


          </div>

        </div>

        {/* Technologies Row */}
        <div className="techIcons absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4">
          {selectedProject.technologies.map((tech, index) => (
            <img
              key={index}
              src={tech}
              alt="Technology"
              className="h-10 w-10 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Slider Section */}
      <div className="slider-section mt-7">
        <ProjectSlider
          projects={projectData}
          selectedProjectIndex={selectedProjectIndex}
          setSelectedProjectIndex={setSelectedProjectIndex}
        />
      </div>
    </div>


  );
};

export default Projects;
