import React, { createContext, useState, useContext } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (image) => {
        if (!favorites.some(fav => fav.id === image.id)) {
            setFavorites(prevFavorites => [...prevFavorites, image]);
        }
    };

    const removeFavorite = (image) => {
        setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== image.id));
    };

    const isFavorite = (image) => {
        return favorites.some(fav => fav.id === image.id);
    };

    const handleFavorite = (image) => {
        if (isFavorite(image)) {
            removeFavorite(image);
        } else {
            addFavorite(image);
        }
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, handleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoritesContext);
