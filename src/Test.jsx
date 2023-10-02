import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
//import ServicePage from "./pages/ServicePage";
//import AppointmentPage from "./pages/Appointment";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <IsPrivate>
              {" "}
              <ServicePage />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/services/:serviceId"
          element={
            <IsPrivate>
              {" "}
              <ServiceDetailsPage />{" "}
            </IsPrivate>
          }
        />
        <Route
          path="/services/edit/:serviceId"
          element={
            <IsPrivate>
              {" "}
              <EditServicePage />{" "}
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              {" "}
              <SignupPage />{" "}
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              {" "}
              <LoginPage />{" "}
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
