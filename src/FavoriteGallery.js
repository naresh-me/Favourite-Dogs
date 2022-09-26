import React from "react";
import "./FavoriteGallery.css";
import { Link } from "react-router-dom";

const FavoriteGallery = () => {
  return (
    <>
      <div className="gallery">
        {Object.keys(localStorage).map((key) => {
          return (
            <img key={key} className="imgCard" src={key} alt="Something" />
          );
        })}
      </div>
      <hr />
      <Link to="/">Go To Gallery</Link>
    </>
  );

  // const addToFavourites = () => {};
};

export default FavoriteGallery;
