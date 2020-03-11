import React from 'react';
import Gallery from './Gallery/Gallery';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Details from './Details/Details';

function App() {
	return (
		<div className="App">
			<header>
				<h1> This is Kodflix</h1>
			</header>
			<BrowserRouter>
				<Route path='/' exact component={Gallery} />
				<Route path='/:showId' exact component={Details} />
			</BrowserRouter>
		</div>
	);
}

export default App;
