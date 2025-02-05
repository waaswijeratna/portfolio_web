import React, { useState } from "react";
import { FaArrowUp, FaArrowDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    name: "Secondhand.lk",
    description:
      "This project is a modern classified advertisement platform designed to make buying and selling goods a seamless and refreshing experience. The site features a vibrant blue color palette, chosen specifically to evoke a sense of freshness and trust, highlighting the quality and reliability of the products being listed. User interactions are thoughtfully designed with smooth transitions and sleek animations, ensuring a user-friendly and engaging experience throughout. Stepper integrations guide users effortlessly through key processes such as listing a product, making a purchase, or connecting with a seller, making the overall journey both intuitive and enjoyable.",
    figmaLink: "https://www.figma.com/design/vjw0KH2bLFpvx9HWcalqCr/Untitled-(Copy)-(Copy)?t=H7i8JT60nhslbijq-1",
    figmaIframe: "https://embed.figma.com/proto/vjw0KH2bLFpvx9HWcalqCr/Untitled-(Copy)-(Copy)?scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&embed-host=share",
    webViewImage: "assets/uxui/secondhand/view.png",
    thumbnail: "assets/uxui/secondhand/cover.png",
  },
  {
    name: "Music Memories",
    description: "This UX design project focuses on creating an immersive music player that enhances the emotional connection between users and their favorite tracks. The app allows users to attach personalized memory notes and images to specific songs, creating a nostalgic experience as they listen. With a clean, dark-themed interface, users can view their memories while playing the song and easily edit or add new notes. The design shown highlights the integration of song details and a memory list, offering a streamlined user interaction for both music playback and memory creation.",
    figmaLink: "https://www.figma.com/design/JATzmmUxwztpbONflJoIrv/...",
    figmaIframe: "https://embed.figma.com/proto/vjw0KH2bLFpvx9HWcalqCr/...",
    webViewImage: "assets/uxui/music_memories/view.png",
    thumbnail: "assets/uxui/music_memories/cover.png",
  },
  {
    name: "I Manage Me",
    description: "This UX design project revolves around a time-boxing app aimed at helping users manage their tasks and time more effectively. Designed with 2024 UI/UX trends in mind, such as neumorphism and gradient aesthetics, the interface provides a seamless experience for both light and dark modes, blending them harmoniously without requiring users to select a specific mode. The color palette features calming green and white tones to create a relaxing ambiance, while various time display styles subtly pressure users to stay on track with their tasks. The design strikes a balance between functionality and aesthetics, ensuring users feel both motivated and at ease while managing their day.",
    figmaLink: "https://www.figma.com/design/MDbcOS6sYb6w6Xm7YA5Fbv/...",
    figmaIframe: "https://embed.figma.com/proto/vjw0KH2bLFpvx9HWcalqCr/...",
    webViewImage: "assets/uxui/IMM/view.png",
    thumbnail: "assets/uxui/IMM/cover.png",
  },
  {
    name: "Easy Quick Convert",
    description: "Leveraging the emerging neumorphism style, I created a visually appealing interface that combines soft, 3D-like elements with modern purple and blue color gradients, representing speed and ease of use. Built with Vue.js, the design emphasizes simplicity, ensuring that users can navigate effortlessly while enjoying a highly responsive experience across all devices. I optimized the site’s layout and interactions to make every step intuitive and engaging for quick file conversions and image compression. The result is a polished, fast-performing tool that’s both functional and visually captivating.",
    figmaLink: "https://www.figma.com/design/93R6JQPHQkdbiNJ8k99ban/...",
    figmaIframe: "https://embed.figma.com/proto/vjw0KH2bLFpvx9HWcalqCr/...",
    webViewImage: "assets/uxui/easyQuickConvert/view.png",
    thumbnail: "assets/uxui/easyQuickConvert/cover.png",
  },
];

const Uxui = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const nextSlide = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  const visibleThumbnails = [
    projects[(selectedIndex - 1 + projects.length) % projects.length],
    projects[selectedIndex],
    projects[(selectedIndex + 1) % projects.length],
  ];

  return (
    <div className="lg:max-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col lg:flex-row p-6 relative">
      {/* Project Info */}
      <div className="lg:w-[50%] w-full lg:m-5 flex flex-col lg:px-10 py-10 lg:py-0">
        <h1 className="text-3xl font-bold mx-5">{projects[selectedIndex].name}</h1>
        <div className="lg:w-[60%] w-[90%] h-[35vh] flex justify-center items-center my-5">
          <img
            src={projects[selectedIndex].webViewImage}
            alt={projects[selectedIndex].name}
            className="w-full h-full object-fit rounded-lg"
          />
        </div>
        <p className="text-sm h-[35vh] overflow-scroll m-3">
          {projects[selectedIndex].description}
        </p>
        <a
          href={projects[selectedIndex].figmaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          View Figma Design
        </a>
      </div>

      {/* Figma Design View */}
      <div className="lg:w-[50%] w-full flex justify-center items-center p-1 lg:px-10 py-10 lg:py-0">
        <div className="relative w-full group">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-lg blur-sm group-hover:blur-md transition-all duration-300 animate-border-flow"></div>
          <div className="absolute inset-[2px] bg-black rounded-lg"></div>
          <div className="relative">
            <iframe
              title={projects[selectedIndex].name}
              src={projects[selectedIndex].figmaIframe}
              className="w-full h-[80vh] rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Toggle Button for Thumbnail Slider */}
      <button
        className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 p-3 rounded-l-lg text-white hover:bg-gray-600 transition-all duration-300 z-50"
        onClick={toggleSlider}
      >
        {isSliderOpen ? <FaChevronRight size={20} /> : <FaChevronLeft size={20} />}
      </button>


      {/* Thumbnail Slider */}
      <div
        className={`lg:w-[20%] w-full flex flex-col items-center justify-center fixed right-0 top-0 h-full bg-gray-900 bg-opacity-30 backdrop-blur-lg p-4 shadow-lg transition-transform duration-300 ${isSliderOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >

        <button className="text-white mb-2" onClick={prevSlide}>
          <FaArrowUp size={30} />
        </button>
        <div className="flex flex-col items-center h-full justify-center overflow-hidden">
          {visibleThumbnails.map((proj, i) => (
            <img
              key={proj.name}
              src={proj.thumbnail}
              alt={proj.name}
              className={`w-full h-[30%] transition-transform duration-300 rounded-lg cursor-pointer mb-2 ${i === 1 ? " opacity-100 scale-102" : "opacity-50"
                }`}
              onClick={() => setSelectedIndex((selectedIndex + i - 1 + projects.length) % projects.length)}
            />
          ))}
        </div>
        <button className="text-white mt-2" onClick={nextSlide}>
          <FaArrowDown size={30} />
        </button>
      </div>
    </div>
  );
};

export default Uxui;
