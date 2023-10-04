import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServicePage = () => {
  const servicesData = [
    {
      serviceName: 'Service 1',
      description: 'Description for Service 1.',
      duration: '1 hour',
      price: 50,
      imageUrl: 'service1.jpg',
    },
    // Add data for the other 10 services here
  ];

  useEffect(() => {
    // Make an HTTP GET request to your backend API to fetch the services
    axios.get('/api/services')
      .then((response) => {
        setServices(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <h2>{service.name}</h2>
              <p>{service.description}</p>
              <p>Price: ${service.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServicesPage;
 
