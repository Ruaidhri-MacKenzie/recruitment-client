import React, { useState } from 'react';
import './App.scss';

import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

function App() {
	const [user, setUser] = useState(null);
	const [posts, setPosts] = useState(null);
	const [newPost, setNewPost] = useState(false);

  return (
    <div className="App">
			<Header title="Recruitment" subtitle="Matching people with positions" />
			<Main user={user} setUser={setUser} posts={posts} setPosts={setPosts} newPost={newPost} setNewPost={setNewPost} />
			<Footer copyright="Ruaidhri MacKenzie" />
    </div>
  );
}

export default App;
