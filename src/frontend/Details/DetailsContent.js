import React from 'react'

export default function DetailsContent({title, synopsis, id}) {
  return (
    <div className="Details">
				<div className="container">
					<div className="item">
						<h2 className="movieTitle">
							{title}
						</h2>
						<div className="synopsis">{synopsis}</div>
					</div>
					<div className="item">
						<div className="imageBox">
							<img 
								src={require(`../common/images/${id}.jpg`)}
								alt={title}
							/>
						</div>
					</div>
				</div>
			</div>
  )
}
