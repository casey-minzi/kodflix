import React, { Component } from 'react';
import gallery_get from '../Gallery/gallery_get';
import { Redirect } from 'react-router-dom';
import './Details.css';


export default class Details extends Component {
	constructor() {
		super();
		this.state = {
			movie: {}
		};
	}

	componentDidMount() {
		let showId = this.props.match.params.showId;
		let movie;
		fetch('/rest/shows')
			.then(response => response.json())
			.then(movies => {
				movie = movies.find(movie => movie.id === showId);
				this.setState({ movie });
			})
	}

	render() {
		if (this.state.movie === undefined) {
			return <Redirect to="/not-found" />;
		} else {
			return (
			<div className="Details">
				<div className="container">
					<div className="item">
						<h2 className="movieTitle">
							{this.state.movie.title}
						</h2>
						<div className="synopsis">{this.state.movie.synopsis}</div>
					</div>
					<div className="item">
						<div className="imageBox">
							<img 
								src={require(`../Gallery/images/${id}.jpg`)}
								alt={this.state.movie.title}
							/>
						</div>
					</div>
				</div>
			</div>
		)}
	}
}