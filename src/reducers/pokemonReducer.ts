import { GET_ALL_POKEMON_DATA } from 'actions/types';

interface initialState {
	pokemonData: object[];
	pokemonAbilities: object[];
	allAbilities: object[];
}

const initialState: initialState = {
	pokemonData: [],
	pokemonAbilities: [],
	allAbilities: [],
};

const pokemonReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case GET_ALL_POKEMON_DATA:
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
