import { PROJECTS } from "../constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {
	return (
		<section>
			<div className="space-y-8">
				{PROJECTS.map((project) => (
					<ProjectCard key={project.title} {...project} />
				))}
			</div>
		</section>
	);
};

export default Projects;
