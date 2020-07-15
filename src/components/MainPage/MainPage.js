import React from 'react';
import './MainPage.css';
import Pokedex from '../Pokedex/Pokedex.js';

export default function MainPage() {
	return (
		<div>
			<p>Welcome to Pokedex React app</p>
			<Pokedex />
		</div>
	);
}
