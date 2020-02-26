import React from 'react';
import cookies from 'js-cookie';
import './UserDetails.scss';

const UserDetails = ({ user, setUser }) => {
	const signOut = () => {
		cookies.remove('sessionId');
		setUser(null);
	};

	return (
		<div className="user-details">
			<button className="user-details__button user-details__settings" onClick={signOut}>Settings</button>
			<button className="user-details__button user-details__sign-out" onClick={signOut}>Sign Out</button>
		</div>
	);
};

export default UserDetails;
