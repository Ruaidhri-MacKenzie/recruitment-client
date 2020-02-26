import React from 'react';
import './UserDetails.scss';

const UserDetails = ({ user, signOut }) => {
	return (
		<div className="user-details">
			<h3 className="user-details__email">{user.email}</h3>
			<button className="user-details__button user-details__sign-out" onClick={signOut}>Sign Out</button>
		</div>
	);
};

export default UserDetails;
