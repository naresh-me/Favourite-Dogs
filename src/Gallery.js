import React from "react";
import ImageCard from "./ImageCard";
import "./Gallery.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  console.log("Gallery");

  function refreshPage() {
    window.location.reload(false);
  }

  // function goToFavorites() {
  //   <Navigate to="/favorites" replace={true} />;
  // }

  // for (let i = 0; i < 6; i++) {
  return (
    <>
      <div className="gallery">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
      <hr />
      <button onClick={refreshPage}>Refresh</button>
      {/* <button onClick={goToFavorites}>Go To Favorites</button> */}
      <Link to="favorites">Go To Favorites</Link>
    </>
  );
  // }
};

export default Gallery;
