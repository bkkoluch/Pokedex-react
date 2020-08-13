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

interface Abilities {
	pokemon_id: number;
}

interface AllAbilities {
	id: number;
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

const mapStateToProps = (state: any) => ({
	pokemonAbilities: state.pokemon.pokemonAbilities,
	allAbilities: state.pokemon.allAbilities,
});

export default connect(mapStateToProps)(DetailedPokemon);
