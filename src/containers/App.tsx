import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPokemonData } from 'actions/pokemonActions';
import { ROUTES } from 'utils/utils';

import MainPage from 'components/MainPage/MainPage';
import DetailedPokemon from 'components/Pokemon/DetailedPokemon/DetailedPokemon';
import List from 'components/List/List';

import './App.css';

const App: React.FC = () => {
	const dispatch = useDispatch();
	dispatch(fetchPokemonData());

	return (
		<BrowserRouter>
			<Switch>
				<Route path={ROUTES.ROOT} exact component={MainPage} />
				<Route path={ROUTES.DETAILED_POKEMON} component={DetailedPokemon} />
				<Route path={ROUTES.POKEMON_LIST} component={List} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
