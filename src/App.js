import React from "react";
import "./App.css";
import Gallery from "./Gallery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FavoriteGallery from "./FavoriteGallery";

function App() {
  console.log("App");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/favorites" element={<FavoriteGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
