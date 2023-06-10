import React from 'react';

// const Footer = () => {
//     return (

const Footer = () => {
    //dark footer that is always at the bottom of the page
    //footer is a container that holds the text and the links in font awesome to github
    return (
        <footer className="custom-footer footer bg-dark fixed-bottom position-fixed">
            <div className="container text-white">
                <span className="text-white">© 2023</span>
                <a href="test.jclabs.com" className="text-muted"> JCLabs</a>
                <span className="text-white mx-auto"> All rights reserved.</span>
                <a href="http://chochelius.github.com" className="text-white ms-5"> 
                <i className="fab fa-github"></i>Github
                </a>
            </div>
        </footer>
    );
};

export default Footer;