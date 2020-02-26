import React from 'react';
import './Header.scss';

const Header = ({ title, subtitle }) => {
	return (
		<header className="header">
			{title && <h1 className="header__title">{title}</h1>}
			{subtitle && <p className="header__subtitle">{subtitle}</p>}
		</header>
	);
};

export default Header;
