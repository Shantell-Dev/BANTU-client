import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileImage from "../../styles/image.svg";
import ContactImage from "../../styles/image1.svg";
import { servicesData } from "./servicesData";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const [services, setServices] = useState(servicesData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/service")
      .then((response) => {
        setServices(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="services">
      <div className="home-container">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-6 intro">
                <h2>Our Services</h2>
                <p>
                  We see "YOU" and we create the look that matches your
                  personality best
                </p>
                <Link to="/appointment" className="nav-link">
                  <button type="button" className="btn btn-outline-danger">
                    Book Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid service">
        {services.map((service, i) => (
          <div className="row p-md-0 m-md-0" key={service._id + i}>
            <div
              className={`col-md-6 p-md-0 m-md-0 ${
                i % 1 === 0 ? "order-md-1" : ""
              } image`}
            >
              <img src={ProfileImage} className="img-fluid" alt="Service" />
            </div>
            <div
              className={`col-md-6 about d-flex ${
                i % 2 === 0 ? "order-md-2" : ""
              } text-center align-items-center flex-column justify-content-center`}
            >
              <h2>{service.serviceName}</h2>
              <p>{service.description}</p>
              <p>Duration: {service.duration}</p>
              <p>
                Price: €{service.price.from} - €{service.price.to}
              </p>
            </div>
          </div>
        ))}
        <div className="row p-md-0 m-md-0">
          <div className={`col-md-6 p-md-0 m-md-0 image`}>
            <img src={ContactImage} className="img-fluid" alt="Banner Image" />
          </div>
          <div
            className={`col-md-6 about d-flex align-items-center justify-content-center`}
          >
            <form>
              <div
                className={`d-flex align-items-center justify-content-center`}
              >
                <div className="form-group">
                  <label className="text-left" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control border-bottom"
                    id="firstName"
                    placeholder="Enter First Name"
                  />
                </div>
                <div className="form-group">
                  <label className="text-left" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control border-bottom"
                    id="lastName"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div
                className={`d-flex align-items-center justify-content-center`}
              >
                <div className="form-group">
                  <label className="text-left" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control border-bottom"
                    id="phone"
                    placeholder="Enter Phone"
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
                    placeholder="Enter Email"
                  />
                </div>
              </div>

              <fieldset className="border-bottom">
                <label className="text-left" htmlFor="phone">
                  Message
                </label>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Enter Your Message"
                  ></textarea>
                </div>
              </fieldset>

              <button type="button" className="btn btn-outline-danger">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
