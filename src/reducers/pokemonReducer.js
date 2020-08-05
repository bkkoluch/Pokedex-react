import { GET_ALL_POKEMON_DATA } from '../actions/types';

const initialState = {
	pokemon: [],
	pokemonAbilities: [],
};

const pokemonReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_POKEMON_DATA:
			return {
				...state,
				pokemon: action.payload.pokemonData,
				pokemonAbilities: action.payload.pokemonAbilities,
				allAbilities: action.payload.allAbilities,
			};
		default:
			return state;
	}
};

export default pokemonReducer;
