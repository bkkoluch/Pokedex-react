import React from 'react';
import pokemonData from '../../assets/pokemon/pokemon.json';
import styles from './Pokedex.module.css';

import Pokemon from '../Pokemon/Pokemon';

export default function Pokedex() {
	return (
		<div>
			<ul className={styles.pokedex__container}>
				{pokemonData.map((pokemonData, index) => (
					<Pokemon
						key={pokemonData.id}
						name={pokemonData.identifier}
						image={require('../../assets/sprites/pokemon/' +
							`${index + 1}` +
							'.png')}
						imageBack={require('../../assets/sprites/pokemonFromTheBack/' +
							`${index + 1}` +
							'.png')}
					/>
				))}
			</ul>
		</div>
	);
}
