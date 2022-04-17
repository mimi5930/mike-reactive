import React, { useState } from 'react';
import { isEmail } from '../../utils/validateEmail';

const Contact = () => {
  // form values
  const [formValues, SetValues] = useState({ name: '', email: '', text: '' });

  // error message
  const [errorText, setErrorText] = useState('');

  // every time a value is changed
  const updateHandler = event => {
    const submission = event.target;
    if (event.target.name === 'email') {
      const validEmail = isEmail(submission.value);
      !validEmail ? setErrorText('this email is invalid') : setErrorText('');
    } else {
      !event.target.value.length
        ? setErrorText(`${submission.name} is required for submission`)
        : setErrorText('');
    }

    if (!errorText) {
      SetValues({ ...formValues, [submission.name]: submission.value });
    }
  };

  // upon form submission
  const formSubmit = event => {
    event.preventDefault();
    console.log('User submitted the following', formValues);
  };

  return (
    <section className="container-fluid">
      <h1>Contact Mike</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-2">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            defaultValue={formValues.name}
            onBlur={updateHandler}
          ></input>
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            defaultValue={formValues.email}
            onBlur={updateHandler}
          ></input>
        </div>
        <div className="mb-2">
          <label className="form-label" htmlFor="text">
            Question or thoughts:
          </label>
          <textarea
            className="form-control"
            rows="3"
            name="text"
            defaultValue={formValues.text}
            onBlur={updateHandler}
          ></textarea>
        </div>
        <button className="btn btn-primary mb-2" type="submit">
          Submit
        </button>
        {errorText && <p className="text-danger">{errorText}</p>}
      </form>
    </section>
  );
};

export default Contact;
