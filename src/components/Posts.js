import React from 'react';
import './Posts.scss';

const Post = ({ post }) => {
	return (
		<li className="post">
			<p className="post__title">{post.title}</p>
			<p className="post__description">{post.description}</p>
		</li>
	);
};

const Posts = ({ posts }) => {
	return (
		<section className="posts">
			<h2 className="posts__title">Posts</h2>
			<ul className="posts__list">
				{posts && posts.length
					? posts.map(post => <Post post={post} />)
					: <li className="posts__no-posts"><p>No posts just now.</p></li>}
			</ul>
		</section>
	);
};

export default Posts;
