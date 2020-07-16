import React from 'react';
import styles from './DetailedPokemon.module.css';

export default function DetailedPokemon() {
	return (
		<div className={styles.detailedPokemon__container}>
			<p>Detailed Pokemon component</p>
			<img
				className={styles.detailedPokemon__image}
				src={require('../../../assets/sprites/pokemon/1.png')}
			/>
			<h2>Pokemon </h2>
		</div>
	);
}
