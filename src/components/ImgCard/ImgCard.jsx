import React from "react";
import "./ImgCard.css";
import Badge from "../Badge/Badge";

const ImgCard = ({ id, path, description, name, isFavorite, handleFavorite }) => {
    return (
        <div className="card mt-4">
            <Badge isFavorite={isFavorite} handleFavorite={handleFavorite} className="z-2 top-0 end-0" />
            <img src={path} className="card-img-top z-0 position-relative" alt={name} />
            <div className="card-body">
                <p className="card-text font-monospace">El prompt que se utilizó para crear esta imagen fué: {description}</p>
            </div>
        </div>
    );
};

export default ImgCard;
