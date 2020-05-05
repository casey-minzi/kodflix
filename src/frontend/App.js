import React from 'react';
import Gallery from './Gallery/Gallery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Details from './Details/Details';
import NotFound from './NotFound/NotFound';
import Header from './Header/Header';

function App() {
	return (
		<div className="App">
			<Router>
					<Header />
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
