import React, { useState } from 'react';
import styles from './Pokemon.module.css';
import { Redirect } from 'react-router-dom';
export default function Pokemon(props) {
	const [redirect, setRedirect] = useState(false);

	const handleRedirectToDetailedPokemon = () => {
		setRedirect(true);
	};

	if (redirect) {
		return (
			<Redirect
				to={{
					pathname: '/pokemon',
					name: props.name,
					image: props.image,
				}}
			/>
		);
	}

	return (
		<div
			className={styles.pokemon__container}
			onClick={handleRedirectToDetailedPokemon}
		>
			<img src={props.image} alt={`${props.name} image`} />
			<h5 className={styles.pokemon__name}>{props.name}</h5>
		</div>
	);
}
