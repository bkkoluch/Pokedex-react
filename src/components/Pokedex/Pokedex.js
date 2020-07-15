import React from 'react';
import pokemonData from '../../assets/pokemon/pokemon.json';
import Pokemon from '../Pokemon/Pokemon';

export default function Pokedex() {
	return (
		<div>
			<ul>
				{console.log(pokemonData[0].identifier)}
				{pokemonData.map((pokemonData, index) => (
					<Pokemon
						key={pokemonData.id}
						name={pokemonData.identifier}
					/>
				))}
			</ul>
		</div>
	);
}
