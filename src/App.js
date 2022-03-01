import React, { useState } from 'react';
import './style.css';
import images from './image-gallery.json';
import ImageContainer from '../components/ImageContainer';

export default function App() {
  const imagesPerPage = 2;
  const [activePage, setActivePage] = useState(1);
  const [displayedImagesIndexes, setDisplayedImagesIndexes] = useState([
    0,
    0 + imagesPerPage,
  ]);
  const [previousDisabled, setPreviousDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const imagesCount = images.length;
  console.log(imagesCount);
  const pages = imagesCount / imagesPerPage;
  // console.log('pages', pages);

  const onClickNext = () => {
    setDisplayedImagesIndexes([
      displayedImagesIndexes[0] + 2,
      displayedImagesIndexes[1] + 2,
    ]);
    // disable next button when last page is reached
  };
  return (
    <div className="app">
      <h1>Image Gallery Task</h1>
      <div className="gallery">
        {images
          .slice(displayedImagesIndexes[0], displayedImagesIndexes[1])
          .map((image, index) => {
            return <ImageContainer key={index} image={image} />;
          })}
      </div>
      <div className="pagination">
        <button disabled={previousDisabled}>Previous</button>
        <button disabled={nextDisabled} onClick={onClickNext}>
          Next
        </button>
      </div>
    </div>
  );
}
