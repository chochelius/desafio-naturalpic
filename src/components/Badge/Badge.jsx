import React from "react";
import "./Badge.css";

const Badge = ({ isFavorite, onToggleFavorite }) => {
    return (
        <div className="badge-container">
            <span className="badge badge-primary">{isFavorite ? "Favorite" : "Not Favorite"}</span>
            <button className="btn btn-sm btn-outline-primary" onClick={onToggleFavorite}>
                {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
        </div>
    );
};

export default Badge;