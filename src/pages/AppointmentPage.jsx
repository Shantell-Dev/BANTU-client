import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import appointImage from "../../styles/image2.jpg";

const AppointmentPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const appointmentData = {
        name,
        email,
        date,
        time,
        service,
      };
      const response = await axios.post(
        "http://localhost:5005/appointments",
        appointmentData
      );
      if (response.data.success) {
        console.log("Appointment booked successfully!");
      } else {
        console.error("Failed to book appointment:", response.data.message);
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
    setName("");
    setEmail("");
    setDate("");
    setTime("");
    setService("");
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
            <label className="text-left" htmlFor="service">
              Service:
            </label>
            <input
              type="text"
              className="form-control border-bottom"
              value={service}
              onChange={(e) => setService(e.target.value)}
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
