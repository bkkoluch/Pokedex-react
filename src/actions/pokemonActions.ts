import { GET_ALL_POKEMON_DATA } from './types';

import pokemonData from 'assets/pokemon/pokemon.json';
import pokemonAbilities from 'assets/pokemon/pokemonAbilities.json';
import allAbilities from 'assets/pokemon/abilities.json';

export const getAllPokemonData = (
	pokemonData: any,
	pokemonAbilities: any,
	allAbilities: any
) => ({
	type: GET_ALL_POKEMON_DATA,
	payload: { pokemonData, pokemonAbilities, allAbilities },
});

export const fetchPokemonData = () => {
	return (dispatch: any) => {
		dispatch(getAllPokemonData(pokemonData, pokemonAbilities, allAbilities));
	};
};
