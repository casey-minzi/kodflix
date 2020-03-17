import React, { Component } from 'react';
import gallery_get from '../Gallery/gallery_get';
import { Redirect } from 'react-router-dom';


export default class Details extends Component {
	constructor() {
		super();
		this.state = {
			movie: {}
		};
	}
	componentDidMount() {
		let showId = this.props.match.params.showId;
		let movie = gallery_get().find((movie) => movie.id === showId);
		this.setState({
			movie
		})
	}
	render() {
		if (this.state.movie === undefined) {
			return <Redirect to="/not-found" />;
		} else {
			return <h2>{this.state.movie.title}</h2>
		}
	}
}