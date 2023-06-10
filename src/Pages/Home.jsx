import React from "react";


const Home = () => {
    return (
        <div className="home w-100 h-100">
            <div className="row">

                <div className="col-sm-6">
                    <img src="/small-robot.jpg" alt="background" className=" w-75  m-5 p-5"
                    />

                </div>
                <div className="col-sm-6 align-content-center mt-5 p-5">

                    <p className="fs-4 text-white">Bienvenido a la galería de imagenes. <br /> Aquí podrás ver muchos <p className="text-"> paisajes </p>Ninguno de estos paisajes es real Fueron hechos con inteligencia artificial generativa Espero que te gusten</p>
                </div>
            </div>
        </div>
    );
};

export default Home;