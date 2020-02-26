import React from 'react';
import './Post.scss';

const Post = ({ post }) => {
	return (
		<li className="post">
			<p className="post__title">{post.title}</p>
			<p className="post__location">{post.location}</p>
			<p className="post__company">{post.company}</p>
			<p className="post__salary">£{post.salary}</p>
		</li>
	);
};

export default Post;
