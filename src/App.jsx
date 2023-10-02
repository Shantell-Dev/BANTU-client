import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
//import ServicePage from "./pages/ServicePage";
//import AppointmentPage from "./pages/Appointment";
//import SignupPage from "./pages/SignupPage";
//import LoginPage from "./pages/LoginPage";
//import IsPrivate from "./components/IsPrivate";
//import IsAnon from "./components/IsAnon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};
export default App;
