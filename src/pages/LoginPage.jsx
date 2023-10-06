import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import loginImage from "../../styles/image4.svg";

const API_URL = "http://localhost:5005";

function LoginPage(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);
  const handleuserName = (e) => setUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { userName, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        console.log("JWT token", response.data.authToken);
        storeToken(response.data.authToken);

        authenticateUser();
        navigate("/"); // <== ADD
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="log row p-md-0 m-md-0">
      <div className={`col-md-6 p-md-0 m-md-0 image`}>
        <img src={loginImage} className="img-fluid" alt="Banner Image" />
      </div>
      <div
        className={`col-md-6 about d-flex align-items-center justify-content-center`}
      >
        <form onSubmit={handleLoginSubmit}>
          <h1>Login</h1>
          <div className="form-group">
            <label className="text-left" htmlFor="userName">
              UserName:
            </label>
            <input
              type="userName"
              className="form-control border-bottom"
              id="userName"
              name="userName"
              value={userName}
              onChange={handleuserName}
              placeholder="Enter userName"
              required
            />
          </div>
          <div className="form-group">
            <label className="text-left" htmlFor="password">
              Password:
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
          <button onClick={handleLogInClick} className="btn btn-dark">
            LogIn
          </button>
          <p>
            Don't have an account yet? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default LoginPage;
