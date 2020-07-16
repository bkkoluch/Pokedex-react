import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainPage from '../components/MainPage/MainPage';
import DetailedPokemon from '../components/Pokemon/DetailedPokemon/DetailedPokemon';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={MainPage} />
				<Route path='/pokemon' component={DetailedPokemon} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
