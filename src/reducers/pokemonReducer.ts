import { Type } from 'actions/types';

interface PokemonState {
	pokemonData: object[];
	pokemonAbilities: object[];
	allAbilities: object[];
	searchedPokemon: string;
}

interface Action {
	type: Type;
	payload: PokemonState;
}

const initialState: PokemonState = {
	pokemonData: [],
	pokemonAbilities: [],
	allAbilities: [],
	searchedPokemon: '',
};

const pokemonReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case Type.GET_ALL_POKEMON_DATA:
			return {
				...state,
				pokemonData: action.payload.pokemonData,
				pokemonAbilities: action.payload.pokemonAbilities,
				allAbilities: action.payload.allAbilities,
			};
		case Type.SEARCH_FOR_POKEMON:
			return {
				...state,
				searchedPokemon: action.payload.searchedPokemon,
			};
		default:
			return state;
	}
};

export default pokemonReducer;
