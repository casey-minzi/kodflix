import React from 'react'
import './Movie.css';
import { Link } from 'react-router-dom';


export default function Movie({ image, title }) {
  return (
    <div className="item">
      <Link to='/details'>
        <img src={image} className="titleImg" alt={title} />
        <div className="titleOverlay">
          {title}
        </div>
      </Link>
    </div>
  )
}
