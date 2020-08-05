import React from 'react';
import styles from './Pokedex.module.css';

import Pokemon from '../Pokemon/Pokemon';
import { connect } from 'react-redux';

const Pokedex = (props) => {
	return (
		<div>
			<ul className={styles.pokedex__container}>
				{props.pokemon.map((pokemon, index) => (
					<Pokemon
						key={pokemon.id}
						id={pokemon.id}
						name={pokemon.identifier}
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
};

const mapStateToProps = (state) => ({
	pokemon: state.pokemon.pokemon,
});

export default connect(mapStateToProps)(Pokedex);
