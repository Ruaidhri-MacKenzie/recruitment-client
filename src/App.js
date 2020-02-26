import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookies from 'js-cookie';
import './App.scss';

import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';

function App() {
	// TODO: move to context and reducer to avoid prop drilling
	const [user, setUser] = useState(null);
	const [posts, setPosts] = useState(null);
	const [newPost, setNewPost] = useState(false);

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
	
	const getPosts = () => {
		axios.get('/post')
		.then(result => {
			setPosts(result.data);
		})
		.catch(err => console.log("ERROR: " + err.message));
	};
	
	useEffect(reconnect, []);
	useEffect(getPosts, []);

  return (
    <div className="App">
			<Header title="Recruitment" subtitle="Matching people with positions" />
			<Main user={user} setUser={setUser} posts={posts} newPost={newPost} setNewPost={setNewPost} />
			<Footer copyright="Ruaidhri MacKenzie" />
    </div>
  );
}

export default App;
