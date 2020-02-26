import React, { useState } from 'react';
import './AuthForm.scss';

const AuthForm = ({ signUp, signIn }) => {
	const [state, setState] = useState({
		email: "",
		password: "",
	});
	
	const handleSubmit = e => e.preventDefault();
	const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });
	const handleSignIn = e => signIn(state.email, state.password);

	return (
		<form className="auth-form" onSubmit={handleSubmit}>
			<input className="auth-form__input auth-form__email" name="email" type="text" placeholder="Email" value={state.email} onChange={handleChange} />
			<input className="auth-form__input auth-form__password" name="password" type="password" placeholder="Password" value={state.password} onChange={handleChange} />
			<div className="auth-form__buttons">
				<button className="auth-form__button auth-form__sign-up" onClick={signUp}>Sign Up</button>
				<button className="auth-form__button auth-form__sign-in" onClick={handleSignIn}>Sign In</button>
			</div>
		</form>
	);
};

export default AuthForm;
