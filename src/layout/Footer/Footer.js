import React from 'react';
import './Footer.scss';

const Footer = ({ copyright }) => {
	return (
		<footer className="footer">
			{copyright && <p className="footer__copyright">{copyright} &copy; {new Date().getFullYear()}</p>}
		</footer>
	);
};

export default Footer;
