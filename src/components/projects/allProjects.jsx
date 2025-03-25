import React, { useEffect, useState } from "react";

import Project from "./project";

import "./styles/allProjects.css";

const AllProjects = () => {
	const projectsPerPage = 6;
	const [projects, setProjects] = useState([]);
	const [currentPage, setCurrentPage] = useState(0);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await fetch(
					"https://api.github.com/users/FabioRR235/repos"
				);
				const data = await response.json();
				setProjects(data);
			} catch (error) {
				console.error("Erro ao buscar projetos:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	const totalPages = Math.ceil(projects.length / projectsPerPage);
	const startIndex = currentPage * projectsPerPage;
	const visibleProjects = projects.slice(
		startIndex,
		startIndex + projectsPerPage
	);

	const nextPage = () => {
		if (currentPage < totalPages - 1) {
			setCurrentPage(currentPage + 1);
		}
	};

	const prevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};

	if (loading) {
		return <p>Carregando projetos...</p>;
	}

	return (
		<div className="all-projects-container">
			{visibleProjects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
						title={project.name}
						description={project.description || "Sem descrição"}
						linkText="Ver Repositorio"
						link={project.html_url}
					/>
				</div>
			))}

			<div className="pagination-controls">
				<button
					className="cta-fade-in"
					onClick={prevPage}
					disabled={currentPage === 0}
				>
					<svg
						id="arrow-horizontal"
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="10"
						viewBox="0 0 46 16"
					>
						<path
							id="Path_10"
							data-name="Path 10"
							d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
							transform="translate(16, 16) rotate(180)"
						></path>
					</svg>
				</button>
				<span className="current-page">
					{currentPage + 1}/{totalPages}
				</span>
				<button
					className="cta"
					onClick={nextPage}
					disabled={currentPage === totalPages - 1}
				>
					<svg
						id="arrow-horizontal"
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="10"
						viewBox="0 0 46 16"
					>
						<path
							id="Path_10"
							data-name="Path 10"
							d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
							transform="translate(30)"
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default AllProjects;
