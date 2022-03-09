import React, { useEffect, useState } from "react";
import "./style.css";
import imageGallery from "./image-gallery.json";
import Pagination from "./components/Pagination";
import Gallery from "./components/Gallery";

export default function App() {
  const imagesJSON = [];
  for (let index in imageGallery) {
    imagesJSON.push({ ...imageGallery[index], key: index });
  }
  console.log(imagesJSON);
  const [images, setImages] = useState(imagesJSON);
  const [largestKey, setLargestKey] = useState(images.length - 1);
  const [imagesPerPage, setImagesPerPage] = useState(3);
  const [previousDisabled, setPreviousDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [addImageInput, setAddImageInput] = useState({ caption: "", url: "" });
  const [activePage, setActivePage] = useState(1);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  if (activePage === 1 && !previousDisabled) {
    setPreviousDisabled(true);
  }

  if (activePage < totalPages && nextDisabled) {
    setNextDisabled(false);
  }

  if (activePage === totalPages && !nextDisabled) {
    setNextDisabled(true);
  }

  const onClickNext = () => {
    setActivePage(activePage + 1);
    if (previousDisabled) {
      setPreviousDisabled(false);
    }
  };

  const onClickPrevious = () => {
    setActivePage(activePage - 1);
    if (nextDisabled) {
      setNextDisabled(false);
    }
  };

  const handleAddImage = (event) => {
    event.preventDefault();
    const keys = images.map((img) => img.key);
    setImages(
      images.concat({
        key: String(largestKey + 1),
        text: event.target[0].value,
        img: event.target[1].value,
      })
    );
    setLargestKey(largestKey + 1);
    setAddImageInput({ caption: "", url: "" });
  };

  const handleAddImageInputChange = (event) => {
    switch (event.target.name) {
      case "caption":
        setAddImageInput({ ...addImageInput, caption: event.target.value });
        break;
      case "url":
        setAddImageInput({ ...addImageInput, url: event.target.value });
        break;
      default:
        console.log("unknown input");
    }
  };

  const handleSelectChange = (event) => {
    setImagesPerPage(Number(event.target.value));
    setActivePage(1);
  };

  const handleDelete = (image) => {
    setImages(images.filter((img) => img.key !== image.key));
  };

  return (
    <div className="app">
      <h1>Image Gallery Task</h1>
      <form onSubmit={handleAddImage}>
        <input
          name="caption"
          placeholder="Caption"
          value={addImageInput.caption}
          onChange={handleAddImageInputChange}
        ></input>
        <input
          name="url"
          placeholder="URL"
          value={addImageInput.url}
          onChange={handleAddImageInputChange}
        ></input>
        <button className="add-image">Add Image</button>
      </form>
      <label>Images per page</label>
      <select defaultValue={imagesPerPage} onChange={handleSelectChange}>
        {images.map((image, index) => {
          return <option key={index}>{index + 1}</option>;
        })}
      </select>
      <Gallery
        activePage={activePage}
        images={images}
        imagesPerPage={imagesPerPage}
        handleDelete={handleDelete}
      />
      <Pagination
        onClickPrevious={onClickPrevious}
        onClickNext={onClickNext}
        previousDisabled={previousDisabled}
        nextDisabled={nextDisabled}
      />
    </div>
  );
}
