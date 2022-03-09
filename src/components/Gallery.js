import React from "react";
import ImageContainer from "./ImageContainer";

const Gallery = ({ activePage, images, imagesPerPage, handleDelete }) => {
  const startIndex = (activePage - 1) * imagesPerPage;
  const stopIndex = startIndex + imagesPerPage;
  return (
    <div className="gallery">
      {images.slice(startIndex, stopIndex).map((image, index) => {
        return (
          <ImageContainer
            key={index}
            image={image}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};

export default Gallery;
