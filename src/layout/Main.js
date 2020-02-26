import React from 'react';
import './Main.scss';

import User from '../components/User';
import NewPost from '../components/NewPost';
import Posts from '../components/Posts';

const Main = ({ user, setUser, posts, setPosts, newPost, setNewPost }) => {
	return (
		<main className="main">
			<User user={user} setUser={setUser} />
			{user && newPost
				? <NewPost setNewPost={setNewPost} />
				: <Posts user={user} posts={posts} setPosts={setPosts} setNewPost={setNewPost} />}
		</main>
	);
};

export default Main;
