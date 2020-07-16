import React from 'react';
import styles from './Pokemon.module.css';

export default function Pokemon(props) {
	return (
		<div className={styles.pokemon__container}>
			<img src={props.image} />
			<h5 className={styles.pokemon__name}>{props.name}</h5>
		</div>
	);
}
