import React from 'react'
import './Movie.css';
import { Link } from 'react-router-dom';


export default function Movie({ image, title, id }) {
  return (
    <div className="item">
      <Link to={`/${id}`}>
        <img className="titleImg" src={image} alt={title} id={id} />
        <div className="titleOverlay">
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  )
}
