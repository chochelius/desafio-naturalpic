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

  const favorites = useContext(FavoritesContext);

  const onToggleFavorite = () => {
    if (isFavorite) {
        removeFavorite();
    } else {
        addFavorite();
    }
};


//     return (
//         <Main images={allImages} favorites={} handleFavorite={handleFavorite} />
//       );
      
// };

// export default Gallery;

return (
    <Main images={allImages} favorites={favorites} handleFavorite={handleFavorite} onToggleFavorite={onToggleFavorite} />
    );
    
};

export default Gallery;