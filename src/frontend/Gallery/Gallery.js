import React, { Component } from 'react';
import Movie from '../Movie/Movie';

export default class Gallery extends Component {

	constructor() {
		super();
		this.state = {
			movieList: []
		}
	}

	componentDidMount() {
		fetch('/rest/shows')
			.then(response => response.json())
			.then(movie => {
				this.setState({movieList: movie})
			})
	}

	render() {
		return (
			<div className="Movie">
				<div className="container">
					{this.state.movieList.map(({ title, image, id }) => (
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
