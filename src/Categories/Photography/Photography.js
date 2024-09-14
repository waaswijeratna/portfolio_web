import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import './Photography.css';
import 'tailwindcss/tailwind.css';

const imagesData = [
  { src: '/assets/photography/1.jpg', description: 'Samanalla Lake in distant view' },
  { src: '/assets/photography/2.jpg', description: 'Lagan of Unversity of Moratuwa' },
  { src: '/assets/photography/3.jpg', description: 'Bolgoda lake in a pinky evening' },
  { src: '/assets/photography/4.jpg', description: 'Beautifull yellow Anthela Astata moth' },
  { src: '/assets/photography/5.jpg', description: 'Sithulpawwa temple in a distant view' },
  { src: '/assets/photography/6.jpg', description: 'Daytime on a mountain road where leopards roam' },
  { src: '/assets/photography/7.jpg', description: 'Relaxing Black beetle' },
  { src: '/assets/photography/8.jpg', description: 'Bonzai tree and white marbels.' },
  { src: '/assets/photography/9.jpg', description: 'View of a misty mountain from a misty mountain' },
  { src: '/assets/photography/10.jpg', description: 'Temarind seed on a cracked cement' },
  { src: '/assets/photography/11.jpg', description: 'Tityus Riverai scoropian species.' },
  { src: '/assets/photography/12.jpg', description: 'Chain of mountains covered from mist' },
];

const Photography = () => {
  const [hoveredDescription, setHoveredDescription] = useState('');

  return (
    <div className="flex h-screen content">
      {/* Left Side - 2/5 width */}
      <div className="w-2/5 p-6 flex flex-col justify-around ">
        <div>
        <h2 className="text-5xl font-bold text-green-100">Nature speaks & photography listens</h2>
        <p className="mt-10 text-green-100 text-lg leading-relaxed">
          To me, photography is the art of capturing snapshots of what the eye sees and preserving memories. Nature is my main subject, and whenever I go out, my mind say, 'Let's take a screenshot'.
          </p>
        </div>
        {/* Hovered Description Box */}
        <div className="p-4 bg-green-100 border border-green-400 rounded-lg description-box">
          <p className="text-lg text-green-900">
            {hoveredDescription || 'Hover over a photo to see its description.'}
          </p>
        </div>
      </div>

      {/* Right Side - 3/5 width */}
      <div className="w-3/5 p-4 overflow-y-auto quilted-image-list">
        <ImageGallery images={imagesData} setHoveredDescription={setHoveredDescription} />
      </div>
    </div>
  );
};

export default Photography;
