import React from 'react';
import './NewPost.scss';

import PostForm from '../PostForm/PostForm';

const NewPost = ({ setNewPost }) => {
	const closeNewPost = () => setNewPost(false);

	return (
		<section className="new-post">
			<header className="new-post__header">
				<button className="new-post__button new-post__cancel" onClick={closeNewPost}>Cancel</button>
				<h2 className="new-post__title">New Post</h2>
			</header>

			<PostForm closeNewPost={closeNewPost} />
		</section>
	);
};

export default NewPost;
