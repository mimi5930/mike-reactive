import React from 'react';

const Portfolio = ({ projects }) => {
	return (
		<section className="container-fluid mb-5">
			<h1>My Projects</h1>
			<div className="row justify-content-evenly">
				{projects.map(project => {
					let { name, pic, features, url, gitHub } = project;
					return (
						<div className="card port-cards col-auto m-4" key={name}>
							<a href={url} target="_blank" rel="noreferrer">
								<img
									src={require(`../../assets/img/${pic}`)}
									alt={name}
									className="card-img-top port-img"
								></img>
							</a>
							<div className="card-body">
								<h5 className="card-title">{name}</h5>
								<h6 className="card-subtitle text-muted">{features}</h6>
								<a
									href={url}
									className="card-link"
									target="_blank"
									rel="noreferrer"
								>
									Deployed App
								</a>
								<a
									href={gitHub}
									className="card-link"
									target="_blank"
									rel="noreferrer"
								>
									GitHub
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
