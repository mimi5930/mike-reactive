import React from 'react';

const Header = ({ sections, currentContent, setContent }) => {
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
						let { dataId, name } = section;
						return (
							<div
								key={dataId}
								className="nav-item col-auto"
								onClick={sectionChange}
							>
								<li
									data-id={`${dataId}`}
									className={`nav-link pointer ${
										currentContent === dataId ? 'text-success' : 'text-light'
									}`}
								>
									{name}
								</li>
							</div>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Header;
