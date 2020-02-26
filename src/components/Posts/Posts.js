import React from 'react';
import './Posts.scss';

import Post from './Post/Post';

const Posts = ({ user, posts, setNewPost }) => {
	const openNewPost = () => setNewPost(true);

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
