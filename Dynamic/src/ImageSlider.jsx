
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
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <img
        src={images[index].src}
        alt={`Slide ${index}`}
        onClick={() => handleClick(images[index].link)}
        style={{

          width: '100%',
          height: '100%',
          borderRadius: '16px',
          objectFit: 'fill',
          cursor: 'pointer',
        }}
      />
    </div>
  );
};

export default ImageSlider;
