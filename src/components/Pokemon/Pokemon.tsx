import React, { useState } from 'react';
import styles from './Pokemon.module.css';
import { Link, Redirect } from 'react-router-dom';
import { PokemonObject } from 'components/Pokedex/Pokedex';

export default function Pokemon(props: any) {
	const [redirect, setRedirect] = useState(false);

	const handleRedirectToDetailedPokemon = () => {
		setRedirect(true);
	};

	if (redirect) {
		return (
			<Redirect
				to={{
					pathname: '/pokemon',
					state: {
						name: props.name,
						image: props.image,
						id: props.id,
					},
				}}
			/>
		);
	}

	return (
		<div
			className={styles.pokemon__container}
			onClick={handleRedirectToDetailedPokemon}
		>
			<img
				src={props.image}
				alt={`${props.name} from the front`}
				className={styles.pokemon__image}
			/>
			<img
				src={props.imageBack}
				alt={`${props.name} from the back`}
				className={styles['pokemon__image--back']}
			/>
			<h5 className={styles.pokemon__name}>{props.name}</h5>
		</div>
	);
}
