import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import Footer from "./pages/Footer";
import axios from "axios";
import appointImage from "../../styles/image2.jpg";

const AppointmentPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointmentData = { name, email, date, time };
    console.log("Appointment Data:", appointmentData);

    setName("");
    setEmail("");
    setDate("");
    setTime("");
  };

  return (
    <div className="appointment row p-md-0 m-md-0">
      <div className={`col-md-6 p-md-0 m-md-0 image`}>
        <img src={appointImage} className="img-fluid" alt="Banner Image" />
      </div>
      <div
        className={`col-md-6 about d-flex align-items-center justify-content-center`}
      >
        <form onSubmit={handleSubmit}>
          <h1>Schedule an Appointment</h1>
          <div className="form-group">
            <label className="text-left" htmlFor="userName">
              Name
            </label>
            <input
              type="text"
              className="form-control border-bottom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="text-left" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              className="form-control border-bottom"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="text-left" htmlFor="date">
              Date:
            </label>
            <input
              type="date"
              className="form-control border-bottom"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="text-left" htmlFor="time">
              Time:
            </label>
            <input
              type="time"
              className="form-control border-bottom"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentPage;
