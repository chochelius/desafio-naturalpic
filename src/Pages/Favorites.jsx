import React from "react";
import { useFavorites } from "../Context/FavoritesContex";
import Main from "../components/Main/Main";

// const Favorites = () => {
//   const { favorites } = useFavorites();
//   const filteredFavorites = favorites ? favorites.filter(Boolean) : [];

//   return <Main images={filteredFavorites} favorites={favorites} />;
// };

// export default Favorites;
// if there's no favoritos, show a message that say "aún no tienes favoritos, agrega alguno a esta sección with a link to the gallery page"

const Favorites = () => {
    const { favorites } = useFavorites();
    const filteredFavorites = favorites ? favorites.filter(Boolean) : [];
    return (
        <div>
        {filteredFavorites.length === 0 ? (
            <div>
            <h1>Aún no tienes favoritos</h1>
            <p>Agrega alguno a esta sección</p>
            </div>
        ) : (
            <Main images={filteredFavorites} favorites={favorites} />
        )}
        </div>
    );
    }

export default Favorites;
