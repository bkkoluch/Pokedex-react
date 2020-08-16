import React from 'react';
import { ROUTES } from 'utils/utils';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

interface HeaderProps {
	detailed?: boolean;
}
const Header: React.FC<HeaderProps> = ({ detailed }) => {
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
				></input>
			) : (
				''
			)}
		</div>
	);
};

export default Header;
