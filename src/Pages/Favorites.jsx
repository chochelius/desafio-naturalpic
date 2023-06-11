import React, { useContext } from "react";
import { FavoritesContext } from "../Context/FavoritesContex";
import Main from "../components/Main/Main";

const Favorites = () => {
  const { favorites, removeFavorite, isFavorite } = useContext(FavoritesContext);

  const handleFavorite = (image) => {
    if (isFavorite(image)) {
      removeFavorite(image);
    }
  };

  return (
      // if there's no favorites, show a message
      // otherwise, show the images
    //   <Main images={favorites} handleFavorite={handleFavorite} isFavorite={isFavorite} />
      
        <div className="home w-100">
            <div className="container pt-5">
                
            {favorites.length === 0 ? (
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 container-fluid mt-5 ">
                            <p className="text-center text-white">No tienes ningún favorito en tu galería, agrega algunos para comenzar</p>
                        </div>
                    </div>
                ) : (
                    <Main images={favorites} handleFavorite={handleFavorite} isFavorite={isFavorite} />
                )}
            </div>
        </div>
    );
};

export default Favorites;