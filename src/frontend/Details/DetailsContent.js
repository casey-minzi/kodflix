import React from 'react'

export default function DetailsContent({movie}) {
  return (
    <div className="Details">
				<div className="container">
					<div className="item">
						<h2 className="movieTitle">
							{movie.title}
						</h2>
						<div className="synopsis">{movie.synopsis}</div>
					</div>
					<div className="item">
						<div className="imageBox">
							<img 
								src={require(`../common/images/${movie.id}.jpg`)}
								alt={movie.title}
							/>
						</div>
					</div>
				</div>
			</div>
  )
}
