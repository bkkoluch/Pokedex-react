import pokemon from './pokemonReducer';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
	pokemon,
});

export default allReducer;
