import React from 'react';
import './MainPage.css';

import Pokedex from 'components/Pokedex/Pokedex';
import Header from 'components/Header/Header';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
	return (
		<div>
			<Header />
			<Pokedex />
		</div>
	);
};

export default MainPage;
