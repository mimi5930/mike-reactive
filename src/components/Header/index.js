import React from 'react';

const Header = () => {
	return (
		<nav className="navbar bg-dark text-white">
			<div className="container-fluid title">
				<a className="navbar-brand text-white pt-0" href="/">
					Mike Miller
				</a>
				<ul className="row justify-content-end">
					<div className="nav-item col-auto">About Me</div>
					<div className="nav-item col-auto">Portfolio</div>
					<div className="nav-item col-auto">Resume</div>
					<div className="nav-item col-auto">Contact</div>
				</ul>
			</div>
		</nav>
	);
};

export default Header;
