import React from "react";
import ImgCard from "../ImgCard/ImgCard";

const Main = ({ images, handleFavorite, isFavorite }) => {
    return (
        <div className="home w-100">
            <div className="container pt-5">
            <div className="row">
                {images && images.map((img) => (
                    <div className="col-12 col-md-6 col-lg-4" key={img.id}>
                        <ImgCard
                            id={img.id}
                            path={img.path}
                            description={img.description}
                            name={img.name}
                            isFavorite={isFavorite(img)}
                            handleFavorite={() => handleFavorite(img)}
                        />
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Main;
