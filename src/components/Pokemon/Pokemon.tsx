import React from 'react';
import styles from './Pokemon.module.css';
import { Link } from 'react-router-dom';

interface PokemonProps {
	id: number;
	name: string;
	image: string;
	imageBack: string;
}

const Pokemon: React.FC<PokemonProps> = (props) => {
	return (
		<Link
			to={{
				pathname: '/pokemon',
				state: {
					name: props.name,
					image: props.image,
					id: props.id,
				},
			}}
			className={styles.pokemon__container}
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
		</Link>
	);
};

export default Pokemon;
