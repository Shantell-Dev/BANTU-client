import React, { useState } from 'react';

const AppointmentPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can send the appointment data to your backend API
    // For simplicity, we'll just log it to the console
    const appointmentData = { name, email, date, time };
    console.log('Appointment Data:', appointmentData);

    // Optionally, you can clear the form fields after submission
    setName('');
    setEmail('');
    setDate('');
    setTime('');
  };

  return (
    <div className="appointment-page">
      <h1>Schedule an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Schedule</button>
      </form>
    </div>
  );
};

export default AppointmentPage;
