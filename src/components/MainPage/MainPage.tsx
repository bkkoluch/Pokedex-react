import React from 'react';
import './MainPage.css';

import Pokedex from 'components/Pokedex/Pokedex';
import Header from 'components/Header/Header';

const MainPage: React.FC = () => {
	return (
		<div>
			<Header />
			<Pokedex />
		</div>
	);
};

export default MainPage;
