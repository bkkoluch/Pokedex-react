import { Type } from 'actions/types';

interface PokemonState {
	pokemonData: object[];
	pokemonAbilities: object[];
	allAbilities: object[];
}

interface Action {
	type: Type;
	payload: PokemonState;
}

const initialState: PokemonState = {
	pokemonData: [],
	pokemonAbilities: [],
	allAbilities: [],
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
		default:
			return state;
	}
};

export default pokemonReducer;
