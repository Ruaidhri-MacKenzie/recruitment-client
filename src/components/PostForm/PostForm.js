import React, { useState } from 'react';
import axios from 'axios';
import cookies from 'js-cookie';
import './PostForm.scss';

const PostForm = ({ closeNewPost }) => {
	const [state, setState] = useState({
		title: "",
		company: "",
		location: "",
		salary: "",
		salaryTerm: "year",
		description: "",
		requirements: "",
		closeDate: "",
		startDate: "",
	});

	const createNewPost = post => {
		const token = cookies.getJSON('sessionId');
		if (token) {
			axios.post('/post', post, { headers: {"Authorization" : `Bearer ${token}`}})
			.then(result => {
				console.log(result.data);
				closeNewPost()
			})
			.catch(err => console.log("ERROR: " + err.message));
		}
	}

	const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

	const handleSubmit = e => {
		e.preventDefault();
		createNewPost(state);
	};

	return (
		<form className="post-form" onSubmit={handleSubmit}>
			<input className="post-form__input post-form__title" type="text" placeholder="Job Title" name="title" value={state.title} onChange={handleChange} />

			<input className="post-form__input post-form__company" type="text" placeholder="Company" name="company" value={state.company} onChange={handleChange} />

			<input className="post-form__input post-form__location" type="text" placeholder="Location" name="location" value={state.location} onChange={handleChange} />
			
			<div className="post-form__salary">
				<input className="post-form__input post-form__salary-figure" type="number" min="0" placeholder="Salary" name="salary" value={state.salary} onChange={handleChange} />
				<select className="post-form__input post-form__salary-term" name="salaryTerm" value={state.salaryTerm} onChange={handleChange} >
					<option value="year">per Year</option>
					<option value="day">per Day</option>
					<option value="hour">per Hour</option>
				</select>
			</div>

			<textarea className="post-form__text-area post-form__description" type="text" placeholder="Description" name="description" value={state.description} onChange={handleChange} />

			<textarea className="post-form__text-area post-form__requirements" type="text" placeholder="Requirements" name="requirements" value={state.requirements} onChange={handleChange} />

			<div className="post-form__close">
				<label htmlFor="close" className="post-form__label post-form__close-label">Applications accepted until:</label>
				<input id="close" className="post-form__input post-form__close-date" type="date" name="closeDate" value={state.closeDate} onChange={handleChange} />
			</div>

			<div className="post-form__start">
				<label htmlFor="start" className="post-form__label post-form__start-label">Start Date:</label>
				<input id="start" className="post-form__input post-form__start-date" type="date" name="startDate" value={state.startDate} onChange={handleChange} />
			</div>

			<button className="post-form__button post-form__submit">Create Post</button>
		</form>
	);
};

export default PostForm;
