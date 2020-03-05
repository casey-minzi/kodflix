import React from 'react';
import './Movie.css';


export default function Movie(props) {
  return (
    <div className="item">
      <img src={props.img} className="titleImg" alt={props.alternative} />
      <div className="titleOverlay">
        <h2>{props.title}</h2>
      </div>
    </div>
  )
}
