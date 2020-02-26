import React from 'react';
import './User.scss';

import AuthForm from './AuthForm/AuthForm';
import UserDetails from './UserDetails/UserDetails';

const User = ({ user, setUser }) => {
	const renderContent = () => {
		if (user) return <UserDetails user={user} setUser={setUser} />
		else return <AuthForm setUser={setUser} />
	};

	return (
		<section className="user">
			<h2 className="user__title">{(user && user.username) || "Account"}</h2>
			{renderContent()}
		</section>
	);
};

export default User;
