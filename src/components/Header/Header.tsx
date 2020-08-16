import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from 'utils/utils';
import styles from './Header.module.css';

interface HeaderProps {
	detailed?: boolean;
}

const Header: React.FC<HeaderProps> = ({ detailed }) => {
	const [input, setInput] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	return (
		<div className={styles.header__container}>
			<Link className={styles.header__link} to={ROUTES.ROOT}>
				Home
			</Link>
			<Link className={styles.header__link} to={ROUTES.ROOT}>
				List
			</Link>
			{!detailed ? (
				<input
					className={styles.header__input}
					type='text'
					placeholder='Search for a pokemon'
					value={input}
					onChange={handleChange}
				></input>
			) : (
				''
			)}
		</div>
	);
};

export default Header;
