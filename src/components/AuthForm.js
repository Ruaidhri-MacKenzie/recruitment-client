import React, { useState } from 'react';
import axios from 'axios';
import cookies from 'js-cookie';
import './AuthForm.scss';

const AuthForm = ({ setUser }) => {
	const [state, setState] = useState({
		email: "",
		password: "",
	});
	
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

	const handleSubmit = e => e.preventDefault();
	const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });
	const handleSignUp = e => signUp(state.email, state.password);
	const handleSignIn = e => signIn(state.email, state.password);

	return (
		<form className="auth-form" onSubmit={handleSubmit}>
			<input className="auth-form__input auth-form__email" name="email" type="text" placeholder="Email" value={state.email} onChange={handleChange} />
			<input className="auth-form__input auth-form__password" name="password" type="password" placeholder="Password" value={state.password} onChange={handleChange} />
			<div className="auth-form__buttons">
				<button className="auth-form__button auth-form__sign-up" onClick={handleSignUp}>Sign Up</button>
				<button className="auth-form__button auth-form__sign-in" onClick={handleSignIn}>Sign In</button>
			</div>
		</form>
	);
};

export default AuthForm;
