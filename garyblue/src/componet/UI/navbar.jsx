import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import AuthContext from "../../context/auth-context";
import CartContext from "../../context/cart-contex";
import Logo from "../../Images/GaryBlueLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

export default function NavBar(props) {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const cartIcon = <FontAwesomeIcon icon={faCartShopping} />;
  const userIcon = <FontAwesomeIcon icon={faUser} />;

  // by switching between the isLoggenIn state we can switch what links are displayed based on that state.

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            alt=""
            width="70rem"
            height="70rem"
            className="d-inline-block align-text-centre me-3 rounded-circle"
          />
          <h1 className="d-inline">Gary Blue's Dinner</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav me-4 ">
            <li className="nav-item px-2">
              <NavLink
                className="nav-link clickable h3"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link clickable h3" to="/menu">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link clickable h3"
                to={isLoggedIn ? "/order" : "/auth"}
              >
                Order Now
              </NavLink>
            </li>
          </ul>
          {isLoggedIn && (
            <NavLink className="nav-link clickable " to="/cart">
              <button
                type="button"
                onClick={props.onShowCart}
                className="btn btn-outline-light me-2 btn-lg"
              >
                {cartIcon}
                <span className="badge bg-primary rounded-circle ms-2  ">
                  {" "}
                  10
                </span>
              </button>
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink className="nav-link clickable " to="/auth">
              <button
                type="button"
                className="btn btn-outline-light btn-lg me-2 "
              >
                {userIcon} Login
              </button>
            </NavLink>
          )}
          {isLoggedIn && (
            <button
              type="button"
              className="btn btn-outline-light btn-lg me-2 "
              onClick={authCtx.logout}
            >
              {userIcon} Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
