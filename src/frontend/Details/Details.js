import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Details.css';
import DetailsContent from './DetailsContent';


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
		let { movie } = this.state;
		if (movie) {
			return movie.id ?
				<DetailsContent {...movie} /> :
				<div />
		} else {
			return <Redirect to="/not-found" />;
		}
	}
}