import React from 'react';
import './Main.scss';

// No token - authenticate/sign up screen - username and password
// token - show dashboard - show user data
// display posts
// display post details

import User from '../components/User';
import Posts from '../components/Posts';

const Main = ({ user, posts, signUp, signIn, signOut }) => {
	return (
		<main className="main">
			<User user={user} signUp={signUp} signIn={signIn} signOut={signOut} />
			<Posts posts={posts} />
		</main>
	);
};

export default Main;
