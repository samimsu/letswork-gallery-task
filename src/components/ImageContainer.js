import React from "react";

const ImageContainer = ({ image, handleDelete }) => {
  return (
    <div className="imageContainer">
      <img src={image.img} width="100px" alt={image.text} />
      <p>{image.text}</p>
      <button>Edit</button>
      <button onClick={() => handleDelete(image)}>Delete</button>
    </div>
  );
};

export default ImageContainer;
