import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card(props) {
  const { imageSrc, title, description, icon, className } = props;

  return (
    <div className={`card ${className}`}>
       {icon ? <FontAwesomeIcon size="3x" icon={icon} className={`card-icon ${props.icon}`} />
        : <img src={imageSrc} className="card-img-top" alt={title} />
      }      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
    );
  }

export default Card;