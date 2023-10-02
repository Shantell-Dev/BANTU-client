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
      <Link to="/">
        <button>Home</button>
        <button>Services</button>
        <button>Signup</button>
        <button>Login</button>
      </Link>
    </div>
  </div>
</div>
    </nav>
  );
}
export default Navbar;
