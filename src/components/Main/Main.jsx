import React from "react";
import ImgCard from "../ImgCard/ImgCard";

const Main = ({ images, favorites, handleFavorite, onToggleFavorite }) => {
    return (
        <div className="container">
            <div className="row">
                {images && images.map((img) => (
                    <div className="col-12 col-md-6 col-lg-4" key={img.id}>
                        <ImgCard
                            id={img.id}
                            path={img.path}
                            description={img.description}
                            name={img.name}
                            //   onToggleFavorite
                            isFavorite={favorites.isFavorite(img)}
                            onToggleFavorite={() => onToggleFavorite(img)}
                            handleFavorite={() => handleFavorite(img)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;
