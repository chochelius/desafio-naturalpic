import React from "react";


const Home = () => {
    return (
        <div className="home ">
            <div className="row">

                <div className="col-sm-6">
                    <img src="/small-robot.jpg" alt="background" className=" w-75  m-5 p-5"
                    />

                </div>
                <div className="col-sm-6 pt-5 align-content-center justify-content-around mt-5 text-start mb-5">

                    <p className="fs-4 text-white">Bienvenido a la galería de imagenes. <br /> Aquí podrás ver muchos  paisajes </p> <br /> <p className=" fs-4 text-white text-decoration-underline">  Ninguno de estos paisajes es real </p> <br /> <p className=" font-monospace text-white"> Fueron hechos con inteligencia artificial generativa </p> <br /> <p className="text-white fs-4"> Espero que te gusten</p>
                </div>
            </div>
        </div>
    );
};

export default Home;