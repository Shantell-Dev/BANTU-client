// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  //const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-transparent navbar-expand-lg">
     <div class="bg-img">
  <div class="container">
    <div class="topnav">
      <a href="#home">Home</a>
      <a href="#service">Services</a>
      <a href="#signup">Signup</a>
      <a href="#login">Login</a>
    </div>
  </div>
</div>
    </nav>
  );
}
export default Navbar;
