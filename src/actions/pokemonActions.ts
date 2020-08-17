import { Dispatch } from 'react';
import { Type } from './types';

import pokemonData from 'assets/pokemon/pokemon.json';
import pokemonAbilities from 'assets/pokemon/pokemonAbilities.json';
import allAbilities from 'assets/pokemon/abilities.json';

const getAllPokemonData = (
	pokemonData: object[],
	pokemonAbilities: object[],
	allAbilities: object[]
): object => ({
	type: Type.GET_ALL_POKEMON_DATA,
	payload: { pokemonData, pokemonAbilities, allAbilities },
});

export const fetchPokemonData = () => {
	return (dispatch: Dispatch<object>) => {
		dispatch(getAllPokemonData(pokemonData, pokemonAbilities, allAbilities));
	};
};

export const searchForPokemon = (searchedPokemon: string): object => ({
	type: Type.SEARCH_FOR_POKEMON,
	payload: { searchedPokemon },
});
