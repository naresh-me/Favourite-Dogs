import React, { useEffect, useCallback, useState } from "react";
import "./ImageCard.css";

const ImageCard = () => {
  const [imageURL, setimageURL] = useState();
  console.log("Image card");
  const fetchData = useCallback(async () => {
    try {
      const data = await fetch("https://random.dog/woof.json?filter=jpg");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    console.log("App");
    fetch("https://random.dog/woof.json?filter=mp4")
      .then((data) => data.json())
      .then((result) => {
        setimageURL(result.url);
      });
  }, []);

  const addToFavourites = () => {
    localStorage.setItem(imageURL, imageURL);
  };
  return (
    <div className="divImgCard">
      <img className="imgCard" src={imageURL} alt="Something" />
      <button onClick={addToFavourites}>Add to Favourites</button>
    </div>
  );
};

export default ImageCard;
