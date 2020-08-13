import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPokemonData } from 'actions/pokemonActions';

import MainPage from 'components/MainPage/MainPage';
import DetailedPokemon from 'components/Pokemon/DetailedPokemon/DetailedPokemon';

const App = () => {
	const dispatch = useDispatch();
	dispatch(fetchPokemonData());

	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={MainPage} />
				<Route path='/pokemon' component={DetailedPokemon} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
