import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImageGallery = ({ images, setHoveredDescription }) => {
  return (
    <ImageList
      variant="quilted"
      cols={4}  // Adjust to 4 for more quilted effect without big images
      gap={8}   // Slightly reduced gap to minimize spacing
      rowHeight={160} // Adjusted rowHeight for better image size
      className="w-full h-full content"
    >
      {images.map((image, index) => (
        <ImageListItem
          key={index}
          cols={index % 3 === 0 ? 2 : 1} // Fixed 2:1 ratio for quilted pattern
          rows={index % 3 === 0 ? 2 : 1}
          onMouseEnter={() => setHoveredDescription(image.description)}
          onMouseLeave={() => setHoveredDescription('')}
        >
          <img
            src={image.src}
            alt={image.description}
            className="object-cover w-full h-full rounded-md shadow-md hover:opacity-90 transition-opacity"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageGallery;
