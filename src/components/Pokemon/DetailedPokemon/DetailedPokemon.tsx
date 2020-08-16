import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './DetailedPokemon.module.css';

interface DetailedPokemonProps {
	location: {
		state: {
			id: number;
			name: string;
			image: string;
		};
	};
	pokemonAbilities: object[];
	allAbilities: object[];
}

interface DetailedPokemonState {
	pokemon: {
		pokemonAbilities: object[];
		allAbilities: object[];
	};
}

interface Ability {
	pokemon_id: number;
	is_hidden: number;
	ability_id: number;
	slot: number;
}

interface RealAbility {
	generation_id: number;
	id: number;
	identifier: string;
	is_main_series: number;
}

const DetailedPokemon: React.FC<DetailedPokemonProps> = (props) => {
	return (
		<div className={styles.detailedPokemon__container}>
			<Link to='/' className={styles.detailedPokemon__previous}>
				Back
			</Link>

			<div className={styles.detailedPokemon__card}>
				<img
					className={styles.detailedPokemon__image}
					src={props.location.state.image}
					alt={`${props.location.state.name}`}
				/>
				<h2 className={styles.detailedPokemon__name}>
					{props.location.state.name}
				</h2>
				<div className={styles.detailedPokemon__skills}>
					Skills:
					{props.pokemonAbilities.map((ability: any) =>
						ability.pokemon_id === props.location.state.id
							? props.allAbilities.map((realAbility: any) => {
									console.log(ability);
									return ability.ability_id === realAbility.id ? (
										<p key={ability}>{realAbility.identifier}</p>
									) : (
										''
									);
							  })
							: ''
					)}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state: DetailedPokemonState) => ({
	pokemonAbilities: state.pokemon.pokemonAbilities,
	allAbilities: state.pokemon.allAbilities,
});

export default connect(mapStateToProps)(DetailedPokemon);
