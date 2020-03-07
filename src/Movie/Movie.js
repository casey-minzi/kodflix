import React from 'react'
import './Movie.css';


export default function Movie({ image, title }) {
  return (
    <div className="item">
      <img src={image} className="titleImg" alt={title} />
      <div className="titleOverlay">
        <h2>{title}</h2>
      </div>
    </div>
  )
}
