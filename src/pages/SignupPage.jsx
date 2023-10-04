// src/pages/SignupPage.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import signupImage from "../../styles/signup.jpg";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };

    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage">
      <div className="container banner mt-3 ">
        <div className="row">
          <div className="col-md-6 banner-image">
            <img src={signupImage} className="img-fluid" alt="Banner Image" />
          </div>
          <div className="col-md-6 banner-text">
            <h2>Sign Up</h2>

            <form onSubmit={handleSignupSubmit}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
              />

              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handlePassword}
              />

              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleName}
              />

              <button type="submit" class="btn btn-dark">
                SignUp
              </button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Already have account?</p>
            <Link to={"/login"}> Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
