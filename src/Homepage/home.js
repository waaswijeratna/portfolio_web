import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Slider } from '@mui/material';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Binary from './BinaryAnimation';
import SwagHand from './SwagHand';
import './home.css';
import Lottie from 'lottie-react';
import Bolb from '../lotties/bolbBG.json';
import NeonCircle from '../lotties/neonCircle.json';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSwagZIndexHigh, setIsSwagZIndexHigh] = useState(false);
  const [binarySpeed, setBinarySpeed] = useState(3000); // BinaryAnimation speed in ms

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSwagZIndex = () => {
    setIsSwagZIndexHigh(!isSwagZIndexHigh);
  };

  const handleSliderChange = (event, newValue) => {
    setBinarySpeed(newValue);
  };

  return (
    <div>
      <div className={` main flex flex-col md:flex-row min-h-screen p-6 bg-white text-gray-800 ${isSwagZIndexHigh ? 'blur-background' : ''}`}>
        {/* Left Side */}
        <div className="md:w-1/2 flex flex-col justify-center items-start space-y-9 text-left p-4 contentt">
          <h1 className="text-8xl font-extrabold desDiv">Portfolio</h1>
          <p className="text-lg desDiv">
            Hi, I'm Akhila Sanjeewa. I'm a user of the left brain and a fan of the right brain. Here's a brief look at my work.
          </p>

          {/* Image gallery */}
          <div className="flex space-x-4 mt-">
            {['GD', 'projects', 'uxui', 'photography', '3d'].map((img, index) => (
              <Link key={index} to={`/${img}`}>
                <img
                  key={index}
                  src={`/assets/images/${img}.png`}
                  alt={`img-${img}`}
                  className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-md shadow-l hover:shadow-xl transition-shadow transition-transform hover:scale-105"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex flex-col justify-center items-center p-4 contentt">
          <div className={`rounded-lg p-6 w-full md:w-2/3 shadow-lg transition-colors ${isDarkMode ? 'dark' : 'light'}`}>
            <h2 className="text-2xl font-semibold mb-4">My Categories</h2>
            <ul>
              <Link to="/GD">
                <li className={`p-3 rounded-lg mb-2 cursor-pointer ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                  Graphic Design
                </li>
              </Link>
              <Link to="/projects">
                <li className={`p-3 rounded-lg mb-2 cursor-pointer ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                  Projects
                </li>
              </Link>
              <Link to="/uxui">
                <li className={`p-3 rounded-lg mb-2 cursor-pointer ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                  UX Designs
                </li>
              </Link>
              <Link to="/photography">
                <li className={`p-3 rounded-lg mb-2 cursor-pointer ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                  Photography
                </li>
              </Link>
              <Link to="/3d">
                <li className={`p-3 rounded-lg mb-2 cursor-pointer ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                  3D Designs
                </li>
              </Link>
            </ul>
          </div>

          {/* Buttons and Icon Section */}
          <div className="flex justify-between items-center mt-4 w-full md:w-2/3">
            {/* Dark Mode Toggle */}
            <div className="flex items-center">
              <input
                type="checkbox"
                className="toggle toggle-lg"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
            </div>

            {/* Go to Personal Website button */}
            <a href="https://akhila-sanjeewa.netlify.app/">
              <button className="bg-green-900 text-white py-2 px-4 rounded hover:bg-blue-900 transition-colors duration-300">
                Go to Personal Website
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Conditionally render Binary and Swag components based on isDarkMode */}
      <div>
        <div className="binary">
          {!isDarkMode && <Binary speed={binarySpeed} />}
        </div>
        <div className={`Swag ${isSwagZIndexHigh ? 'z-10' : 'z-2'}`}>
          {isDarkMode && <SwagHand />}
        </div>

        <div className="toggleOptions">
          {!isDarkMode ? (
            <div className="SwagbtnDiv">
              <Slider
                value={binarySpeed}
                min={500}
                max={3000}
                step={100}
                onChange={handleSliderChange}
                className="binary-slider"
                sx={{ color: 'green', }}
              />
            </div>
          ) : (
            <div
              className="mt-4 p-2 bg-blue-900 text-white rounded-full swagButton cursor-pointer"
              onClick={toggleSwagZIndex}
            >
              {isSwagZIndexHigh ? <FaArrowDown className="Icolor" /> : <FaArrowUp className="Icolor" />}
            </div>
          )}
        </div>
        {!isDarkMode &&
          <iframe src="https://lottie.host/embed/a046a089-0556-4aeb-93d4-d3f020be691c/STH624V56A.json" title="test" className="circuitAni"></iframe>
        }

        <div className="toBlur">
        {isDarkMode &&
          < div className="lottieE">
            <div className="blobC">
              <Lottie animationData={Bolb} className={`blobBG  ${isSwagZIndexHigh ? 'blurL' : ''}`}></Lottie>
            </div>
            <div className="bgEffect">
              <Lottie animationData={NeonCircle} className={`Neon ${isSwagZIndexHigh ? 'blurL' : ''}`}></Lottie>
            </div>
          </div>
        }
        </div>
      </div>

    </div>

  );
};

export default Home;
