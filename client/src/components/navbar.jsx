import { Link } from "react-router-dom";
import "./navbar.css"
import { useContext } from "react";
import StoreContext from "../store/storeContext";

const Navbar = () => {
    const { cart, user, getCartCount } = useContext(StoreContext);


    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <Link className="nav-link active" to="/home">
                    <img src="logo-icon.png" alt="logo-img" width="70px" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/home">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/catalog">
                                Catalog
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/admin">
                                Admin
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <label className="lbl-user">
                            <i className="fa-regular fa-circle-user"></i>
                            {user.name}
                        </label>
                        <Link className="btn btn-outline-light" to="/cart">
                            <span className="badge text-bg-light me-1">{getCartCount()}</span>
                            View Cart

                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

/**
 * read the cart from the context
 * create the fn
 *    the function should return the number of product in the cart
 *
 */
