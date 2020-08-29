import React from 'react';
import styles from './Pokedex.module.css';

import Pokemon from 'components/Pokemon/Pokemon';
import { connect } from 'react-redux';

export interface PokemonObject {
	key: any;
	id: number;
	name: string;
	image: string;
	imageBack: string;
	identifier: string;
	height: number;
	weight: number;
}

interface Pok {
	pokemon: PokemonObject[];
	searchedPokemon: string;
}

interface PokedexState {
	pokemon: {
		pokemonData: PokemonObject[];
		searchedPokemon: string;
	};
}

const pokemonComponent = (pokemon: PokemonObject, index: number) => (
	<Pokemon
		key={pokemon.id}
		id={pokemon.id}
		name={pokemon.identifier}
		image={require('../../assets/sprites/pokemon/' + `${index + 1}` + '.png')}
		imageBack={require('../../assets/sprites/pokemonFromTheBack/' +
			`${index + 1}` +
			'.png')}
		height={pokemon.height}
		weight={pokemon.weight}
	/>
);

const Pokedex: React.FC<Pok> = (props) => {
	return (
		<div>
			<ul className={styles.pokedex__container}>
				{props.searchedPokemon === ''
					? props.pokemon.map((pokemon: PokemonObject, index: number) =>
							pokemonComponent(pokemon, index)
					  )
					: props.pokemon.map((pokemon: PokemonObject, index: number) =>
							pokemon.identifier.includes(props.searchedPokemon)
								? pokemonComponent(pokemon, index)
								: ''
					  )}
			</ul>
		</div>
	);
};

const mapStateToProps = (state: PokedexState) => ({
	pokemon: state.pokemon.pokemonData,
	searchedPokemon: state.pokemon.searchedPokemon,
});

export default connect(mapStateToProps)(Pokedex);
