import React, { useState } from 'react';

const Header = ({ sections }) => {
	const [currentContent, setContent] = useState('about-me');

	const sectionChange = async event => {
		setContent(event.target.getAttribute('data-id'));
	};

	return (
		<nav className="navbar bg-dark text-white">
			<div className="container-fluid title">
				<a className="navbar-brand text-white pt-0" href="/">
					Mike Miller
				</a>
				<ul className="row justify-content-end">
					{sections.map(section => {
						return (
							<div
								key={section.dataId}
								data-id={`${section.dataId}`}
								className="nav-item col-auto"
								onClick={sectionChange}
							>
								{section.name}
							</div>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Header;
