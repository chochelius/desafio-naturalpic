import React from "react";
import "./Badge.css";

const Badge = ({ isFavorite, handleFavorite }) => {
    return (
        <div className="position-absolute z-2">
            <span className="z-3">
                {isFavorite ? (

                    <button className="btn btn-lg text-danger" onClick={handleFavorite}>
                        <i className="fas fa-solid fa-heart fa-2x"></i>
                    </button>
                ) : (
                    <button className="btn btn-lg text-white" onClick={handleFavorite}>
                        <i className="fas fa-solid fa-heart fa-2x"></i>
                    </button>)}

            </span>

        </div>
    );
};

export default Badge;
