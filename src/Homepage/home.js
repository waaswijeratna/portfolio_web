import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
// import { FaPaintBrush } from 'react-icons/fa'; // Import paintbrush icon
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';



const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // const Model = () => {
  //   const { scene } = useGLTF('assets/3d/4/asasdasd.gltf');
  //   return <primitive object={scene} scale={0.5} />;
  // };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className=" flex flex-col md:flex-row min-h-screen p-6 bg-white text-gray-800">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col justify-center items-start space-y-9 text-left p-4">
        <h1 className="text-6xl font-extrabold">Portfolio</h1> {/* Enlarged portfolio text */}
        <p className="text-lg">
          Hi, I'm Akhila Sanjeewa. I'm passionate about web development and design. Here's a brief look at my work.
        </p>

        {/* Image gallery */}
        <div className="flex space-x-4 mt-">
          {['GD', 'projects', 'uxui', 'photography', '3d'].map((img, index) => (
            <Link key={index} to={`/${img}`}>
              <img
                key={index}
                src={`/assets/images/${img}.png`}
                alt={`img-${img}`}
                className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-md shadow-l hover:shadow-xl transition-shadow"
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 flex flex-col justify-center items-center p-4">
        <div className={`rounded-lg p-6 w-full md:w-2/3 shadow-lg transition-colors ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
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
            <Link to="/3d-designs">
              <li className={`p-3 rounded-lg mb-2 cursor-pointer ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                3D Designs
              </li>
            </Link>
          </ul>
        </div>


        {/* Buttons and Icon Section */}
        <div className="flex justify-between items-center mt-4 w-full md:w-2/3">
          {/* Left: Dark Mode Toggle */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="toggle toggle-lg"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            {/* <span className="ml-3 text-gray-700">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span> */}
          </div>


          {/* Middle: Go to Personal Website button */}
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Go to Personal Website
          </button>

          {/* Right: Paintbrush icon */}
          {/* <Canvas>
            <ambientLight intensity={0.5} />
            <Model />
            <OrbitControls />
          </Canvas> */}

        </div>
      </div>
    </div>
  );
};

export default Home;
