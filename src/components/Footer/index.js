import React from 'react';

const Footer = ({ links }) => {
	return (
		<footer className="navbar fixed-bottom bg-dark text-white">
			<div className="container-fluid">
				{links.map(link => {
					let { name, icon, url } = link;
					return <p key={name}>{name}</p>;
				})}
			</div>
		</footer>
	);
};

export default Footer;
