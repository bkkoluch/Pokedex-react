import React from 'react';
import styles from './Pokedex.module.css';

import Pokemon from 'components/Pokemon/Pokemon';
import { connect } from 'react-redux';

export interface PokemonObject {
	pokemon: any;
	key: any;
	id: number;
	name: string;
	image: string;
	imageBack: string;
	identifier: string;
}

interface Pok {
	pokemon: PokemonObject[];
}

interface State {
	pokemon: {
		pokemonData: PokemonObject[];
	};
}

const Pokedex: React.FC<Pok> = (props) => {
	return (
		<div>
			<ul className={styles.pokedex__container}>
				{props.pokemon.map((pokemon: PokemonObject, index: number) => (
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

const mapStateToProps = (state: State) => ({
	pokemon: state.pokemon.pokemonData,
});

export default connect(mapStateToProps)(Pokedex);
