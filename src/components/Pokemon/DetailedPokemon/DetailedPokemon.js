import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './DetailedPokemon.module.css';
import { connect } from 'react-redux';

const DetailedPokemon = (props) => {
	const [redirect, setRedirect] = useState(false);

	const handleRedirectToPokedex = () => {
		setRedirect(true);
	};

	if (redirect) {
		return <Redirect to='/' />;
	}

	return (
		<div className={styles.detailedPokemon__container}>
			<button
				className={styles.detailedPokemon__previous}
				onClick={handleRedirectToPokedex}
			>
				Back
			</button>

			<div className={styles.detailedPokemon__card}>
				<img
					className={styles.detailedPokemon__image}
					src={props.location.image}
					alt={`${props.location.name}`}
				/>
				<h2 className={styles.detailedPokemon__name}>
					{props.location.name}
				</h2>
				<div className={styles.detailedPokemon__skills}>
					Skills:
					{props.pokemonAbilities.map((ability) =>
						ability.pokemon_id === props.location.id
							? props.allAbilities.map((realAbility) => {
									return ability.ability_id ===
										realAbility.id ? (
										<p>{realAbility.identifier}</p>
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

const mapStateToProps = (state) => ({
	pokemonAbilities: state.pokemon.pokemonAbilities,
	allAbilities: state.pokemon.allAbilities,
});

export default connect(mapStateToProps)(DetailedPokemon);
