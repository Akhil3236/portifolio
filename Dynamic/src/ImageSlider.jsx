
import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handleClick = (url) => {
    window.open(url, '_blank'); 
  };

  
  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: 'auto' }}>
      <img
        src={images[index].src}
        alt={`Slide ${index}`}
        onClick={() => handleClick(images[index].link)}
        style={{

          width: '100%',
          height: '410px',
          borderRadius: '12px',
          objectFit:'cover',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          cursor: 'pointer',
        }}
      />
    </div>
  );
};

export default ImageSlider;
