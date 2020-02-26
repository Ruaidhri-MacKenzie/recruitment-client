import React, { useEffect } from 'react';
import axios from 'axios';
import './Posts.scss';

import Post from './Post/Post';

const Posts = ({ user, posts, setPosts, setNewPost }) => {
	const openNewPost = () => setNewPost(true);

	const getPosts = () => {
		axios.get('/post')
		.then(result => {
			setPosts(result.data);
		})
		.catch(err => console.log("ERROR: " + err.message));
	};
	useEffect(getPosts, []);

	return (
		<section className="posts">
			<header className="posts__header">
				<h2 className="posts__title">Posts</h2>
				{user && <button className="posts__new-post" onClick={openNewPost}>New Post</button>}
			</header>

			<ul className="posts__list">
				{posts && posts.length
					? posts.map(post => <Post key={post._id} post={post} />)
					: <li className="posts__no-posts"><p>No posts just now.</p></li>}
			</ul>
		</section>
	);
};

export default Posts;
