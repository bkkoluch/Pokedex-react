import React from 'react';
import './MainPage.css';

import Pokedex from 'components/Pokedex/Pokedex';

export default function MainPage() {
	return (
		<div>
			<p>Search through the Pokedex for info about the Pokemon</p>
			<Pokedex />
		</div>
	);
}
