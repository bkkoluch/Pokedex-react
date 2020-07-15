import React from 'react';
import './MainPage.css';

import Header from '../Header/Header';
import Pokedex from '../Pokedex/Pokedex';

export default function MainPage() {
	return (
		<div>
			<Header />
			<p>Welcome to Pokedex React app</p>
			<Pokedex />
		</div>
	);
}
