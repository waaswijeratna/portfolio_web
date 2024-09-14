import React, { useState } from 'react';
import './UxuiDesign.css';
import CircularCarousel from './CircularCarousel';

const UxuiDesign = () => {
  const projects = [
    {
      name: "Secondhand.lk",
      description:
        "This project is a modern classified advertisement platform designed to make buying and selling goods a seamless and refreshing experience. The site features a vibrant blue color palette, chosen specifically to evoke a sense of freshness and trust, highlighting the quality and reliability of the products being listed. User interactions are thoughtfully designed with smooth transitions and sleek animations, ensuring a user-friendly and engaging experience throughout. Stepper integrations guide users effortlessly through key processes such as listing a product, making a purchase, or connecting with a seller, making the overall journey both intuitive and enjoyable.",
      figmaLink:
        "https://www.figma.com/design/sYOv3GmtlR2pfgvg1hAVcV/Untitled-(Copy)?node-id=0-1&t=ObCxizb90DYUKm6w-1",
      webViewImage: "assets/uxui/secondhand/view.png",
      thumbnail: "assets/uxui/secondhand/cover.png",
      images: [
        "assets/uxui/secondhand/2.png",
        "assets/uxui/secondhand/3.png",
        "assets/uxui/secondhand/4.png",
        "assets/uxui/secondhand/5.png",
        "assets/uxui/secondhand/6.png",
      ],
    },
    {
      name: "Project Two",
      description: "This is the description for Project Two.",
      figmaLink: "https://www.figma.com/project-two",
      webViewImage: "",
      thumbnail: "assets/uxui/secondhand/cover.png",
      mobileViewImage: "path-to-mobile-view-image2.jpg",
      images: [
        "path-to-image6.jpg",
        "path-to-image7.jpg",
        "path-to-image8.jpg",
        "path-to-image9.jpg",
        "path-to-image10.jpg",
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
        <div className="project-images w-1/2 p-6 flex flex-rows gap-14">
          <div className="flex flex-cols items-end">
            <img src={selectedProject.images[0]} alt="Noimage" className="w-[9rem] h-[10rem] rounded-lg shadow-lg" />
          </div>
          <div className="imgFlex1 gap-8">
            <img src={selectedProject.images[1]} alt="Noimage" className="w-[9rem] h-[10rem] rounded-lg shadow-lg" />
            <img src={selectedProject.images[2]} alt="Noimage" className="w-[9rem] h-[10rem] rounded-lg shadow-lg" />
          </div>
          <div className="imgFlex2 gap-8">
            <img src={selectedProject.images[3]} alt="Noimage" className="w-[9rem] h-[10rem] rounded-lg shadow-lg" />
            <img src={selectedProject.images[4]} alt="Noimage" className="w-[9rem] h-[10rem] rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

      {/* Color pickers for gradients and text colors */}
      <div className={`absolute bottom-[5rem] right-[5rem] flex flex-row gap-3 z-10 ${carouselOpen ? 'blur' : ''}`}>
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
      <div className="carousel-wrapper absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <CircularCarousel
          projects={projects}
          setSelectedProject={setSelectedProject}
          selectedProject={selectedProject}
          setCarouselOpen={setCarouselOpen} // Pass down setCarouselOpen to update the blur
        />
      </div>

      {/* Slider */}
      <div className={`slider-container absolute bottom-10 right-14 w-[15rem] mr-5 ${carouselOpen ? 'blur' : ''}`}>
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
  );
};

export default UxuiDesign;
