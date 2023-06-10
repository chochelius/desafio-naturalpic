import React from "react";
import "./Badge.css";

const Badge = ({ isFavorite, handleFavorite }) => {
  return (
    <div className="container position-static end-0">
      <span className="z-3">
        
      <button className="btn btn-lg" onClick={handleFavorite}>
          {isFavorite ? (
            <i className="fa-solid fa-heart fa-2x"></i>
          ) : (
            <i className="fa-solid fa-heart fa-2x"></i>
          )}
        </button>
        </span>

    </div>
  );
};

export default Badge;
