import React, { useState } from 'react';
import styles from './Pokemon.module.css';
import { Redirect } from 'react-router-dom';

export default function Pokemon(props, { history }) {
	const [redirect, setRedirect] = useState(false);

	const handleRedirectToDetailedPokemon = () => {
		setRedirect(true);
	};

	if (redirect) {
		return <Redirect push to='/pokemon' />;
	}

	return (
		<div
			className={styles.pokemon__container}
			onClick={handleRedirectToDetailedPokemon}
		>
			<img src={props.image} />
			<h5 className={styles.pokemon__name}>{props.name}</h5>
		</div>
	);
}
