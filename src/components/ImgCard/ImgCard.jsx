import React from "react";
import "./ImgCard.css";
import Badge from "../Badge/Badge";

const ImgCard = ({ id, path, description, name, isFavorite, onToggleFavorite }) => {
    return (
        <div className="card mt-4">
            <Badge isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
            <img src={path} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default ImgCard;