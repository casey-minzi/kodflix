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
			.then(movies => {
				this.setState({ movieList: movies });
			})

	}

	render() {
		return (
			<div className="Movie">
				<div className="container">
					{this.state.movieList.map(({ title, id }) => (
						<Movie
							key={id}
							title={title}
							id={id}
						/>
					))
					}
				</div>
			</div>
		)
	}
}