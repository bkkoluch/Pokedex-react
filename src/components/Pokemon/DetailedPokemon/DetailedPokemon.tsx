import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './DetailedPokemon.module.css';
import { connect } from 'react-redux';

const DetailedPokemon = (props: any) => {
	const [redirect, setRedirect] = useState(false);
	console.log(props);
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
