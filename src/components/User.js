import React from 'react';
import './User.scss';

import AuthForm from './AuthForm';
import UserDetails from './UserDetails';

const User = ({ user, signUp, signIn, signOut }) => {
	const renderContent = () => {
		if (user) return <UserDetails user={user} signOut={signOut} />
		else return <AuthForm signUp={signUp} signIn={signIn} />
	};

	return (
		<section className="user">
			<h2 className="user__title">{(user && user.username) || "Account"}</h2>
			{renderContent()}
		</section>
	);
};

export default User;
