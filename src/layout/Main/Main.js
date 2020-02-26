import React from 'react';
import './Main.scss';

import User from '../../components/User/User';
import NewPost from '../../components/NewPost/NewPost';
import Posts from '../../components/Posts/Posts';

const Main = ({ user, setUser, posts, newPost, setNewPost }) => {
	return (
		<main className="main">
			<User user={user} setUser={setUser} />
			{user && newPost
				? <NewPost setNewPost={setNewPost} />
				: <Posts user={user} posts={posts} setNewPost={setNewPost} />}
		</main>
	);
};

export default Main;
