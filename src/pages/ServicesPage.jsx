import React, { useState, useEffect } from "react";
import ProfileImage from "../../styles/image.svg";
import axios from "axios";

const servicesData = [
  {
    id: "1",
    serviceName: "Service 1",
    description: "Description for Service 1.",
    duration: "1 hour",
    price: 50,
    imageUrl: "service1.jpg",
  },
  // Add data for the other 10 services here
];

const ServicesPage = () => {
  const [services, setServices] = useState([servicesData]);
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
    <div className="container mt-5">
      {services.map((service, i) => (
        <div className="row" key={service._id + i}>
          <div className="col-md-6 image">
            <img src={ProfileImage} className="img-fluid"></img>
          </div>
          <div className="col-md-6 about d-flex">
            <h2>{service.serviceName}</h2>
            <p>{service.description}</p>
            <p>Price: €{service.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesPage;
