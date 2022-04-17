import React from 'react';

const AboutMe = () => {
	return (
		<section data-id="about-me">
			<img
				className="profile-img"
				src={require('../../assets/img/mike.jpg')}
			></img>
			<p>
				Michael Miller is an aspiring web developer and musician in Woodbury,
				Minnesota. Miller is currently enrolled in the University of Minnesota's
				Coding Bootcamp through Trilogy Education Services where he is engaging
				in front-end and back-end development.
			</p>
		</section>
	);
};

export default AboutMe;
