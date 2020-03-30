import React from 'react';
import Gallery from './Gallery/Gallery';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Details from './Details/Details';
import NotFound from './NotFound/NotFound';
import kodflixLogo from './kodflix_logo.png';

function App() {
	return (
		<div className="App">
			<Router>
				<header>
					<h1>
						<Link to="/">
							<img src={kodflixLogo} alt="Kodflix logo" className="KodflixLogo" />
						</Link>
					</h1>
				</header>
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
