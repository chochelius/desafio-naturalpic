import React, { useState, useEffect, useContext } from "react";
import { FavoritesContext } from "../Context/FavoritesContex";
import { images } from "../Api/Api";
import Main from "../components/Main/Main";

const Gallery = () => {
  const [allImages, setAllImages] = useState([]);
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    setAllImages(images);
  }, []);

  const handleFavorite = (image) => {
    if (isFavorite(image)) {
      removeFavorite(image);
    } else {
      addFavorite(image);
    }
  };

  return (
    <Main images={allImages} handleFavorite={handleFavorite} isFavorite={isFavorite} />
  );
};

export default Gallery;
