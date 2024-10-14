import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // For icons
import ClipLoader from 'react-spinners/ClipLoader';  // Spinner component
import './GraphicDesign.css';  // Ensure your CSS file is correct

// Define the paths for the images with proper folder names
const imagePaths = [
  { path: '/assets/graphic design/logo/', count: 34, name: 'Logo Designs' },
  { path: '/assets/graphic design/anime/', count: 19, name: 'Anime Style Drawings' },
  { path: '/assets/graphic design/character/', count: 17, name: 'Character Designs' },
  { path: '/assets/graphic design/portrait/', count: 5, name: 'Portrait Arts' },
  { path: '/assets/graphic design/coverdesign/', count: 29, name: 'Albums and Cover Designs' },
  { path: '/assets/graphic design/other/', count: 24, name: 'Other Designs' },
];

// Number of images to load per scroll
const BATCH_SIZE = 5;

const GraphicDesign = () => {
  const [selectedFolder, setSelectedFolder] = useState(imagePaths[0]);  // Default folder
  const [images, setImages] = useState([]);  // Store loaded images
  const [currentBatch, setCurrentBatch] = useState(0);  // Track batch loading
  const [loading, setLoading] = useState(false);  // Loading state
  const [fullImageIndex, setFullImageIndex] = useState(null);  // Index of current full image
  const observer = useRef(null);  // To track the last element for infinite scroll

  // Function to handle button clicks for folder selection
  const handleClick = (index) => {
    setSelectedFolder(imagePaths[index]);  // Change folder
    setCurrentBatch(0);  // Reset batch count
    setImages([]);  // Clear previous images
  };

  // Function to check if an image exists as jpg or png
  const checkImageExists = async (path, index) => {
    try {
      await axios.get(`${path}${index}.jpg`);
      return `${path}${index}.jpg`;
    } catch {
      try {
        await axios.get(`${path}${index}.png`);
        return `${path}${index}.png`;
      } catch {
        return null;
      }
    }
  };

  // Fetch the next batch of images
  const fetchNextBatch = useCallback(async () => {
    setLoading(true);
    const start = currentBatch * BATCH_SIZE;  // Start index for batch
    const end = start + BATCH_SIZE;  // End index for batch
    const imagePromises = Array.from(
      { length: Math.min(end, selectedFolder.count) - start },
      (_, i) => checkImageExists(selectedFolder.path, start + i + 1)
    );
    const imageResults = await Promise.all(imagePromises);
    setImages(prevImages => [...prevImages, ...imageResults.filter(img => img !== null)]);
    setCurrentBatch(prevBatch => prevBatch + 1);
    setLoading(false);
  }, [currentBatch, selectedFolder]);

  // Load initial batch when folder changes
  useEffect(() => {
    fetchNextBatch();
  }, [selectedFolder, fetchNextBatch]);

  // Infinite scroll with IntersectionObserver
  useEffect(() => {
    if (loading) return;  // Prevent observer when loading

    const observerCallback = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        fetchNextBatch();  // Load more when last image is visible
      }
    };

    const options = {
      root: null,  // Viewport as root
      rootMargin: '200px',  // Load earlier before user reaches the end
      threshold: 0.1  // Trigger when 10% of the element is visible
    };

    observer.current = new IntersectionObserver(observerCallback, options);

    if (observer.current && images.length > 0) {
      const lastImageElement = document.querySelector('.last-image');
      if (lastImageElement) observer.current.observe(lastImageElement);
    }

    return () => {
      if (observer.current) observer.current.disconnect();  // Cleanup observer
    };
  }, [images, loading, fetchNextBatch]);

  // Breakpoints for Masonry grid
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  // Close full image view
  const closeFullImage = () => setFullImageIndex(null);

  // Navigate to the previous image
  const showPrevImage = useCallback(() => {
    if (fullImageIndex > 0) {
      setFullImageIndex(fullImageIndex - 1);
    }
  }, [fullImageIndex]);

  // Navigate to the next image
  const showNextImage = useCallback(() => {
    if (fullImageIndex < images.length - 1) {
      setFullImageIndex(fullImageIndex + 1);
    }
  }, [fullImageIndex, images.length]);

  // Handle keyboard navigation (left/right arrows)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') showPrevImage();
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'Escape') closeFullImage();
    };

    if (fullImageIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [fullImageIndex, showPrevImage, showNextImage]);

  return (
    <div className="fullDiv min-h-screen text-white">
      {/* Folder selection buttons */}
      <div className=" flex justify-center space-x-4 py-6 folder-buttons overflow-x-auto">
      {imagePaths.map((folder, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded"
          >
            {folder.name}  {/* Show correct folder name */}
          </button>
        ))}
      </div>

      {/* Masonry layout for images */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.length > 0 ? (
          images.map((imgSrc, i) => (
            <img
              key={i}
              src={imgSrc}
              alt={`Design ${i + 1}`}  // Descriptive alt text
              className={i === images.length - 1 ? 'last-image hover-effect' : 'hover-effect'}
              style={{ width: '100%', marginBottom: '10px', cursor: 'pointer' }}
              onClick={() => setFullImageIndex(i)}  // Set full image index when clicked
            />
          ))
        ) : (
          <div className="flex justify-center items-center w-screen">
            <ClipLoader color="#36D7B7" loading={loading} size={150} />
          </div>
        )}
      </Masonry>

      {/* Full Image Modal with Navigation */}
      {fullImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 full-screen-modal">
          <img src={images[fullImageIndex]} alt="Full View" className="max-w-full max-h-full" />

          {/* Close Icon */}
          <FaTimes
            className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
            onClick={closeFullImage}
          />

          {/* Left Arrow for previous image */}
          {fullImageIndex > 0 && (
            <FaArrowLeft
              className="absolute left-4 text-white text-4xl cursor-pointer"
              onClick={showPrevImage}
            />
          )}

          {/* Right Arrow for next image */}
          {fullImageIndex < images.length - 1 && (
            <FaArrowRight
              className="absolute right-4 text-white text-4xl cursor-pointer"
              onClick={showNextImage}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default GraphicDesign;
