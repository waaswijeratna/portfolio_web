import React, { useState, useEffect } from 'react';
import './Projects.css';
import { IconButton } from '@mui/material';
import { GitHub, Language } from '@mui/icons-material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
    name: 'Automated baby cradle',
    description: 'This project was my Level 1 hardware project as part of my degree. It was a group project in which we created an automated baby cradle that can be operated remotely. The cradle features automated functions such as swinging based on room temperature, activating a small fan according to the temperature, playing a lullaby when the baby is crying, and sounding a buzzer if the baby is not in the cradle. It also includes a remote monitoring system with a live-streaming camera. My role was to design the PCB and implement the WiFi camera and live streaming app.',
    github: 'https://github.com/waaswijeratna/secondhand.lk',
    live: null,
    logo: '/assets/projects/baby_cradle/1.png',
    images: [
      '/assets/projects/baby_cradle/1.png',
      '/assets/projects/baby_cradle/2.jpeg',
      '/assets/projects/baby_cradle/3.jpeg',
      '/assets/projects/baby_cradle/4.jpeg',
      '/assets/projects/baby_cradle/5.jpeg',
      '/assets/projects/baby_cradle/6.jpeg',
      '/assets/projects/baby_cradle/7.jpeg',
      '/assets/projects/baby_cradle/8.jpeg',
      '/assets/projects/baby_cradle/9.jpeg',
    ],
    technologies: [
      '/assets/projects/technologies/arduino.png',
      '/assets/projects/technologies/c++.png',
      '/assets/projects/technologies/react_native.png',
      '/assets/projects/technologies/easyEDA.png',
    ],
  },
  {
    name: 'Personal website',
    description: 'Developed a dynamic and responsive personal website that highlights my portfolio, including projects and achievements. The site is brought to life with interactive 3D models and features a custom-built tracking system that analyzes user interactions, offering valuable insights on content engagement and viewership.',
    github: 'https://github.com/waaswijeratna/Personal_web',
    live: 'https://akhila-sanjeewa.netlify.app/',
    logo: '/assets/projects/personal_web/1.png',
    images: [
      '/assets/projects/personal_web/1.png',
      '/assets/projects/personal_web/2.png',
      '/assets/projects/personal_web/3.png',
      '/assets/projects/personal_web/4.png',
      '/assets/projects/personal_web/5.png',
      '/assets/projects/personal_web/6.png',
    ],
    technologies: [
      'assets/projects/technologies/angular.png',
      'assets/projects/technologies/html.png',
      'assets/projects/technologies/css.png',
      'assets/projects/technologies/tailwind.png',
    ],
  },
  {
    name: 'Jutsu Kisok',
    description: 'The project involved developing a dynamic website for an online shop with a unique ninja theme. The design process was particularly challenging, as it required blending the aesthetics of a marketplace with a playful yet sleek ninja-inspired look. I utilized Hostinger for hosting and WordPress as the CMS, incorporating custom HTML and CSS through embedded code to create a highly personalized and responsive design. The website features user-friendly navigation, an engaging layout, and is optimized for both desktop and mobile devices. In addition to the development, I manage the site’s SEO to ensure better visibility on search engines, and I handle analytics to track visitor engagement and improve the site performance. The website is currently live and actively receiving traffic.',
    github: null,
    live: 'https://jutsukiosk.com/',
    logo: '/assets/projects/jutsu_kiosk/1.png',
    images: [
      '/assets/projects/jutsu_kiosk/1.png',
      '/assets/projects/jutsu_kiosk/2.png',
      '/assets/projects/jutsu_kiosk/3.png',
      '/assets/projects/jutsu_kiosk/4.png',
      '/assets/projects/jutsu_kiosk/5.png',
      '/assets/projects/jutsu_kiosk/6.png',
    ],
    technologies: [
      'assets/projects/technologies/hostinger.png',
      'assets/projects/technologies/wordpress.png',
      'assets/projects/technologies/html.png',
      'assets/projects/technologies/css.png',
    ],
  },
]

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [fadeTitle, setFadeTitle] = useState('fade-in_topic'); // Control title animation
  const [fadeDescription, setFadeDescription] = useState('fade-in'); // Control description animation
  const [fadeCarousel, setFadeCarousel] = useState('fade-in_img'); // Control carousel animation
  const [fadeTechnologies, setFadeTechnologies] = useState('fade-in_technologies'); // Control technologies animation
  const selectedProject = projectData[selectedProjectIndex];

  useEffect(() => {
    // Apply fade-out animation to elements
    setFadeTitle('fade-out_topic');
    setFadeDescription('fade-out');
    setFadeCarousel('fade-out_img');
    setFadeTechnologies('fade-out_technologies');

    const timeoutId = setTimeout(() => {
      setFadeTitle('fade-in_topic');
      setFadeDescription('fade-in');
      setFadeCarousel('fade-in_img');
      setFadeTechnologies('fade-in_technologies');
    }, 300); 

    return () => clearTimeout(timeoutId);
  }, [selectedProjectIndex]);

  return (
    <div className="projects-container mx-auto pt-6 h-[130vh] md:h-screen">
      {/* Big Project Card */}
      <div className="big-card flex flex-col lg:flex-col shadow-lg rounded-lg p-6 w-[70vw] h-[70vh] mx-auto relative">
        
        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row h-[80%]">
          {/* Left Side */}
          <div className="left-section flex flex-col w-full lg:w-3/5 p-3">
            <h2 className={`text-3xl font-bold text-purple ${fadeTitle}`}>{selectedProject.name}</h2>
            <p className={`my-2 text-purple text-[2.8vmin] overflow-y-auto ${fadeDescription}`}>
              {selectedProject.description}
            </p>

            <div className={`flex space-x-4 ${fadeTitle}`}>
              {selectedProject.github && (
                <IconButton href={selectedProject.github} target="_blank" aria-label="GitHub">
                  <GitHub fontSize="large" className="text-purple" />
                </IconButton>
              )}
              {selectedProject.live && (
                <IconButton href={selectedProject.live} target="_blank" aria-label="Live">
                  <Language fontSize="large" className="text-purple" />
                </IconButton>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="right-section w-full mt-[18vh] md:mt-0 lg:w-2/5 md:p-4 flex flex-col justify-center items-center">
            <div className={`w-[18rem] h-[12rem] ImgCarousal ${fadeCarousel}`}>
              <Carousel showThumbs={false}>
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
        <div className="techIcons absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center space-x-4 ">
          {selectedProject.technologies.map((tech, index) => (
            <img
              key={index}
              src={tech}
              alt="Technology"
              className={`h-10 w-10 object-contain ${fadeTechnologies}`}
            />
          ))}
        </div>
      </div>

      {/* Slider Section */}
      <div className="absolute bottom-[-15vh]  md:relative md:bottom-0 slider-section md:mt-7">
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
