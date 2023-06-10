import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark position-fixed w-100 z-3">
            <div className="container-fluid w-100">
                <Link className="navbar-brand" to="/">Paisajes Irreales</Link>
                <img src="/logo.svg" alt="logo" height="40px" width="40px" className="d-inline-block align-text-top" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
                        <Link className="nav-link" to="/gallery">Galería</Link>
                        <Link className="nav-link" to="/favorites">Favoritos</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
