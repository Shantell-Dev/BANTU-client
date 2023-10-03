// src/components/Navbar.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  //const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const isLoggedIn = false;
  useEffect(() => {
    const toggleButton = document.querySelector(".navbar-toggler");
    const collapseDiv = document.querySelector(".navbar-collapse");

    toggleButton.addEventListener("click", () => {
      collapseDiv.classList.toggle("show");
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container">
        <a className="navbar-brand" href="/">
          BANTU
        </a>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <button>Home</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">
                {" "}
                <button>Services</button>{" "}
              </Link>
            </li>
            {!isLoggedIn && (
              <>
                <li>
                  <Link to="/signup" className="nav-link">
                    {" "}
                    <button>Sign Up</button>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="nav-link">
                    {" "}
                    <button>Login</button>{" "}
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
