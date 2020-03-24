import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import gallery_get from './gallery_get'

export default class Gallery extends Component {

	constructor() {
		super();
		this.state = {
			movie: {}
		}
	}

	componentDidMount() {
		fetch('/rest/shows')
			.then(response => response.json())
			.then(movie => {
				console.log(movie)
			})
	}

	render() {
		return (
			<div className="Movie">
				<div className="container">
					{gallery_get().map(({ title, image, id }) => (
						<Movie
							key={id}
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
}
