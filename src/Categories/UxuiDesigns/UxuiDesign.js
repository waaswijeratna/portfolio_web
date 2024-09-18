import React, { useState } from 'react';
import './UxuiDesign.css';
import CircularCarousel from './CircularCarousel';
import Lottie from 'lottie-react';
import Stripes from '../../../src/lotties/stripes.json';

const UxuiDesign = () => {
  const projects = [
    {
      name: "Secondhand.lk",
      description:
        "This project is a modern classified advertisement platform designed to make buying and selling goods a seamless and refreshing experience. The site features a vibrant blue color palette, chosen specifically to evoke a sense of freshness and trust, highlighting the quality and reliability of the products being listed. User interactions are thoughtfully designed with smooth transitions and sleek animations, ensuring a user-friendly and engaging experience throughout. Stepper integrations guide users effortlessly through key processes such as listing a product, making a purchase, or connecting with a seller, making the overall journey both intuitive and enjoyable.",
      figmaLink:"https://www.figma.com/design/ffYaNUvx25kLm6E2to5p8B/Untitled-(Copy)-(Copy)-(Copy)?node-id=0-1&t=sPY6xE72PLMAT8pD-1",
      webViewImage: "assets/uxui/secondhand/view.png",
      thumbnail: "assets/uxui/secondhand/cover.png",
      mobileViewImage: false,
      images: [
        "assets/uxui/secondhand/2.png",
        "assets/uxui/secondhand/3.png",
        "assets/uxui/secondhand/4.png",
        "assets/uxui/secondhand/5.png",
        "assets/uxui/secondhand/6.png",
      ],
    },
    {
      name: "Music Memories",
      description: "This UX design project focuses on creating an immersive music player that enhances the emotional connection between users and their favorite tracks. The app allows users to attach personalized memory notes and images to specific songs, creating a nostalgic experience as they listen. With a clean, dark-themed interface, users can view their memories while playing the song and easily edit or add new notes. The design shown highlights the integration of song details and a memory list, offering a streamlined user interaction for both music playback and memory creation.",
      figmaLink: "https://www.figma.com/design/JATzmmUxwztpbONflJoIrv/Untitled?node-id=0-1&t=5kY2z15PGf3ojF5J-1",
      webViewImage: "assets/uxui/music_memories/view.png",
      thumbnail: "assets/uxui/music_memories/cover.png",
      mobileViewImage: true,
      images: [
        "assets/uxui/music_memories/2.png",
        "assets/uxui/music_memories/3.png",
        "assets/uxui/music_memories/4.png",
        "assets/uxui/music_memories/5.png",
        "assets/uxui/music_memories/6.png",
      ],
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [carouselOpen, setCarouselOpen] = useState(false); // State to handle blur and background
  const [sliderValue, setSliderValue] = useState(0);

  const [startGradient, setStartGradient] = useState("#ffd580"); // Default light orange
  const [endGradient, setEndGradient] = useState("#ffc0cb"); // Default pink

  const [startTextColor, setStartTextColor] = useState("#890e0c"); // Default dark red
  const [endTextColor, setEndTextColor] = useState("#650c47"); // Default deep purple

  // Function to calculate the gradient color based on slider value
  const calculateGradient = (value) => {
    // Ensure value is within 0-100 range
    const clampedValue = Math.max(0, Math.min(100, value));

    // Parse the start and end colors
    const startRGB = hexToRgb(startGradient);
    const endRGB = hexToRgb(endGradient);

    // Calculate the intermediate color
    const red = startRGB.r + (endRGB.r - startRGB.r) * (clampedValue / 100);
    const green = startRGB.g + (endRGB.g - startRGB.g) * (clampedValue / 100);
    const blue = startRGB.b + (endRGB.b - startRGB.b) * (clampedValue / 100);

    // Create the gradient CSS string
    const gradientEndColor = `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`;

    return `linear-gradient(145deg, white, ${gradientEndColor})`;
  };

  // Function to calculate text color based on slider value
  const calculateTextColor = (value) => {
    const clampedValue = Math.max(0, Math.min(100, value));

    // Parse the start and end text colors
    const startRGB = hexToRgb(startTextColor);
    const endRGB = hexToRgb(endTextColor);

    // Calculate the intermediate text color
    const red = startRGB.r + (endRGB.r - startRGB.r) * (clampedValue / 100);
    const green = startRGB.g + (endRGB.g - startRGB.g) * (clampedValue / 100);
    const blue = startRGB.b + (endRGB.b - startRGB.b) * (clampedValue / 100);

    return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`;
  };

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  const backgroundGradient = calculateGradient(sliderValue);
  const textColor = calculateTextColor(sliderValue);

  return (
    <>
      <div className="uxui-design-wrapper">
        {/* Blur only the elements except the carousel */}
        <div
          className={`uxui-design-container flex ${carouselOpen ? 'blur' : ''}`}
          style={{ background: backgroundGradient }}
        >
          {/* Left side: Project details */}
          <div className="project-details flex flex-col items-start p-6 w-1/2" style={{ color: textColor }}>
            <h1 className="text-[7vmin] font-bold mb-2 title">{selectedProject.name}</h1>
            {selectedProject.webViewImage && (
              <img src={selectedProject.webViewImage} alt="Web View" className="webView" />
            )}
            <p className="Pdescription overflow-y-scroll text-[2.5vmin]">
              {selectedProject.description}
            </p>
            <a
              href={selectedProject.figmaLink}
              className="text-blue-500 mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Figma Design
            </a>
          </div>

          {/* Right side: Masonry grid for project images */}
          <div className="project-images w-1/2 p-2 flex flex-rows gap-14">
            <div className="flex flex-cols items-end">
              <img src={selectedProject.images[0]} alt="Noimage" className={`${selectedProject.mobileViewImage ? 'w-[6rem] h-[12rem]' : 'w-[10rem] h-[12rem]'} rounded-lg shadow-lg`} />
            </div>
            <div className="imgFlex1 gap-8">
              <img src={selectedProject.images[1]} alt="Noimage" className={`${selectedProject.mobileViewImage ? 'w-[6rem] h-[12rem]' : 'w-[10rem] h-[12rem]'} rounded-lg shadow-lg`} />
              <img src={selectedProject.images[2]} alt="Noimage" className={`${selectedProject.mobileViewImage ? 'w-[6rem] h-[12rem]' : 'w-[10rem] h-[12rem]'} rounded-lg shadow-lg`} />
            </div>
            <div className="imgFlex2 gap-8">
              <img src={selectedProject.images[3]} alt="Noimage" className={`${selectedProject.mobileViewImage ? 'w-[6rem] h-[12rem]' : 'w-[10rem] h-[12rem]'} rounded-lg shadow-lg`} />
              <img src={selectedProject.images[4]} alt="Noimage" className={`${selectedProject.mobileViewImage ? 'w-[6rem] h-[12rem]' : 'w-[10rem] h-[12rem]'} rounded-lg shadow-lg`} />
            </div>
          </div>
        </div>

        {/* Color pickers for gradients and text colors */}
        <div className={`absolute bottom-[3rem] right-[5rem] flex flex-row gap-3 z-10 ${carouselOpen ? 'blur' : ''}`}>
          <input
            type="color"
            value={startGradient}
            onChange={(e) => setStartGradient(e.target.value)}
          />

          <input
            type="color"
            value={endGradient}
            onChange={(e) => setEndGradient(e.target.value)}
          />


          <input
            type="color"
            value={startTextColor}
            onChange={(e) => setStartTextColor(e.target.value)}
          />

          <input
            type="color"
            value={endTextColor}
            onChange={(e) => setEndTextColor(e.target.value)}
          />

        </div>

        {/* Center: Circular Carousel */}
        <div className="carousel-wrapper absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <CircularCarousel
            projects={projects}
            setSelectedProject={setSelectedProject}
            selectedProject={selectedProject}
            setCarouselOpen={setCarouselOpen} // Pass down setCarouselOpen to update the blur
          />
        </div>

        {/* Slider */}
        <div className={`slider-container absolute bottom-5 right-14 w-[15rem] mr-5 z-10 ${carouselOpen ? 'blur' : ''}`}>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
            className="color-slider"
          />
        </div>


      </div>
        <Lottie animationData={Stripes} className={`bgAnimation ${carouselOpen ? 'blur hidden' : ''}`}></Lottie>
      </>
  );
};

export default UxuiDesign;
