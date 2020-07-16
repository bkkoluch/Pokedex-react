import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './DetailedPokemon.module.css';

export default function DetailedPokemon(props) {
	const [redirect, setRedirect] = useState(false);

	const handleRedirectToPokedex = () => {
		setRedirect(true);
	};

	if (redirect) {
		return <Redirect push to='/' />;
	}

	return (
		<div className={styles.detailedPokemon__container}>
			<button
				className={styles.detailedPokemon__previous}
				onClick={handleRedirectToPokedex}
			>
				Back
			</button>
			<img
				className={styles.detailedPokemon__image}
				src={props.location.image}
				alt={`${props.location.name} image`}
			/>
			<h2>{props.location.name}</h2>
		</div>
	);
}
