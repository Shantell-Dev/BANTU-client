import React from 'react';

function Card({ imageSrc, title, description }) {
    return (
      <div className="card">
        <img src={imageSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
      </div>
    );
  }

export default Card;