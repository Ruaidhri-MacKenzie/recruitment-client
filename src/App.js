import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookies from 'js-cookie';
import './App.scss';

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

function App() {
	const [user, setUser] = useState(null);
	const [posts, setPosts] = useState(null);

	const getPosts = () => {
		axios.get('/post')
		.then(result => {
			setPosts(result.data);
		})
		.catch(err => console.log("ERROR: " + err.message));
	};

	const signUp = (email, password) => {
		axios.post('/user/signup', {
			email,
			password,
		})
		.then(result => {
			if (result.data.message) console.log(result.data.message);

			const inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
			cookies.set('sessionId', result.data.token, { expires: inOneHour });
			setUser(result.data.user);
		})
		.catch(err => console.log("ERROR: " + err.message));
	};

	const signIn = (email, password) => {
		axios.post('/user/signin', {
			email,
			password,
		})
		.then(result => {
			if (result.data.message) console.log(result.data.message);

			const inOneHour = new Date(new Date().getTime() + 60 * 60 * 1000);
			cookies.set('sessionId', result.data.token, { expires: inOneHour });
			setUser(result.data.user);
		})
		.catch(err => console.log("ERROR: " + err.message));
	};

	const signOut = () => {
		cookies.remove('sessionId');
		setUser(null);
	};

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
	useEffect(getPosts, []);

  return (
    <div className="App">
			<Header title="Recruitment" subtitle="Matching people with positions" />
			<Main user={user} posts={posts} signUp={signUp} signIn={signIn} signOut={signOut} />
			<Footer copyright="Ruaidhri MacKenzie" />
    </div>
  );
}

export default App;
