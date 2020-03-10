import React from 'react';
import Gallery from './Gallery/Gallery';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Details from './Details/Details';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Route path='/' exact component={Gallery} />
				<Route path='/details' exact component={Details} />
			</BrowserRouter>
		</div>
	);
}

export default App;
