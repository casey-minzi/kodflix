import React from 'react';
import Movie from '../Movie/Movie';
import gallery_get from './gallery_get'

export default function Gallery() {
	return (
		<div className="Movie">
			<div className="container">
				{gallery_get().map(({title, image, id}) => (
					<Movie
						key = {id}
						title={title}
						image={image}
						id={id}
					/>
				))
				}
			</div>
		</div>
	)
}
