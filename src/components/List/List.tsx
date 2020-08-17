import React from 'react';
import { connect } from 'react-redux';

import styles from './List.module.css';
import Header from 'components/Header/Header';

interface ListPokemonObject {
	id: number;
	identifier: string;
	species_id: number;
	height: number;
	weight: number;
	base_experience: number;
	order: number;
	is_default: number;
}

interface ListProps {
	pokemon: ListPokemonObject[];
}

interface ListState {
	pokemon: { pokemonData: ListPokemonObject[] };
}

const List: React.FC<ListProps> = (props) => {
	return (
		<div className={styles.List__container}>
			<Header detailed={true} />
			<p>Click on the pokemon's name to check it's details!</p>
			<table>
				<tr className={styles['List__table__row--main']}>
					<th>Pokemon id</th>
					<th>Identifier</th>
					<th>Species id</th>
					<th>Height</th>
					<th>Weight</th>
					<th>Base experience</th>
				</tr>
			</table>
			<table>
				{props.pokemon.map((pokemon) => {
					return (
						<details key={pokemon.id}>
							<summary>{pokemon.identifier}</summary>
							<tr className={styles.List__table__row}>
								<td>{pokemon.id}</td>
								<td>{pokemon.identifier}</td>
								<td>{pokemon.species_id}</td>
								<td>{pokemon.height}</td>
								<td>{pokemon.weight}</td>
								<td>{pokemon.base_experience}</td>
							</tr>
						</details>
					);
				})}
			</table>
		</div>
	);
};

const mapStateToProps = (state: ListState) => ({
	pokemon: state.pokemon.pokemonData,
});

export default connect(mapStateToProps)(List);
