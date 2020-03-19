import React from 'react';
import Gallery from './Gallery/Gallery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Details from './Details/Details';
import NotFound from './NotFound/NotFound';
import kodflixLogo from './kodflix_logo.png';

function App() {
	return (
		<div className="App">
			<header>
				<h1>
					<img src={kodflixLogo} alt="Kodflix logo" className="KodflixLogo"/>
				</h1>
			</header>
			<Router>
				<Switch>
					<Route path='/' exact component={Gallery} />
					<Route path='/not-found' exact component={NotFound} />
					<Route path='/:showId' exact component={Details} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
