import React from 'react';

const ImageContainer = ({ image }) => {
  return (
    <div className="imageContainer">
      <img src={image.img} alt={image.text} />
      <p>{image.text}</p>
    </div>
  );
};

export default ImageContainer;
