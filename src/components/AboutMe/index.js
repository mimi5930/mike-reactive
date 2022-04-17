import React from 'react';

const AboutMe = () => {
  return (
    <section className="container-fluid d-flex flex-column m-3 align-items-center mt-5">
      <img
        alt="Mike smiling at the camera"
        className="profile-img mb-5"
        src={require('../../assets/img/mike.jpg')}
      ></img>
      <div className="card profile-text-container">
        <p className="card-text profile-text">
          Michael Miller is an aspiring web developer and musician in Woodbury,
          Minnesota. Miller is currently enrolled in the University of
          Minnesota's Coding Bootcamp through Trilogy Education Services where
          he is engaging in front-end and back-end development.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
