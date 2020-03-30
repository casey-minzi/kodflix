import React from 'react'
import './Movie.css';
import { Link } from 'react-router-dom';


export default function Movie({ title, id }) {
  return (
    <div className="item">
      <Link to={`/${id}`}>
        <div className="imageContainer">
          <img 
            src={require(`../Gallery/images/${id}.jpg`)}
            className="titleImg"
            alt={title}
            id={id}
            key={id}
          />
        </div>
        <div className="titleOverlay">
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  )
}
