import React, { useEffect } from 'react';
import axios from 'axios';
import cookies from 'js-cookie';
import './User.scss';

import AuthForm from './AuthForm';
import UserDetails from './UserDetails';

const User = ({ user, setUser }) => {
	const reconnect = () => {
		const token = cookies.getJSON('sessionId');
		if (token) {
			// Get user info
			axios.get('/user', { headers: {"Authorization" : `Bearer ${token}`}})
			.then(result => {
				setUser(result.data);
			})
			.catch(err => console.log("ERROR: " + err.message));
		}
	};
	useEffect(reconnect, []);

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
