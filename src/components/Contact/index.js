import React, { useState } from 'react';

const Contact = () => {
	const formSubmit = event => {
		event.preventDefault();
		console.log('submit');
	};

	return (
		<section className="container-fluid">
			<h1>Contact Mike</h1>
			<form onSubmit={formSubmit}>
				<div className="mb-2">
					<label className="form-label" htmlFor="name">
						Name:
					</label>
					<input className="form-control" type="text" name="name"></input>
				</div>
				<div className="mb-2">
					<label className="form-label" htmlFor="email">
						Email:
					</label>
					<input className="form-control" type="email" name="email"></input>
				</div>
				<div className="mb-2">
					<label className="form-label" htmlFor="email">
						Question or thoughts:
					</label>
					<textarea className="form-control" rows="3"></textarea>
				</div>
				<button className="btn btn-primary" type="submit">
					Submit
				</button>
			</form>
		</section>
	);
};

export default Contact;
