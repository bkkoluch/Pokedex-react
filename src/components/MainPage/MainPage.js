import React from 'react';
import './MainPage.css';

import Pokedex from '../Pokedex/Pokedex.js';

export default function MainPage() {
	return (
		<div>
			<p>Search through the Pokedex for info about the Pokemon</p>
			<Pokedex />
		</div>
	);
}
