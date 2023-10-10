import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import signupImage from "../../styles/signup.jpg";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUserName = (e) => setUserName(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, username };

    axios
      .post(`${API_URL}/api/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        // const errorDescription = error.response.data.message;
        // setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="sign row p-md-0 m-md-0">
      <div className={`col-md-6 p-md-0 m-md-0 image`}>
        <img src={signupImage} className="img-fluid" alt="Banner Image" />
      </div>
      <div
        className={`col-md-6 about d-flex align-items-center justify-content-center`}
      >
        <form onSubmit={handleSignupSubmit}>
          <h1>Sign Up</h1>
          <div className={`d-flex align-items-center justify-content-center`}>
            <div className="form-group">
              <label className="text-left" htmlFor="userName">
                UserName
              </label>
              <input
                type="text"
                className="form-control border-bottom"
                id="UserName"
                name="userName"
                value={username}
                onChange={handleUserName}
                placeholder="Enter UserName"
                required
              />
            </div>
            <div className="form-group">
              <label className="text-left" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="form-control border-bottom"
                id="email"
                name="email"
                value={email}
                onChange={handleEmail}
                placeholder="Enter Email"
                required
              />
            </div>
          </div>
          <div className={`d-flex align-items-center justify-content-center`}>
            <div className="form-group">
              <label className="text-left" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                className="form-control border-bottom"
                id="password"
                name="password"
                value={password}
                onChange={handlePassword}
                placeholder="Enter Password"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-dark">
            Sign Up
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default SignupPage;
