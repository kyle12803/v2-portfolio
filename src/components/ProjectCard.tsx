import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
	image: string;
	title: string;
	description: string;
	technologies: string[];
	githubLink?: string;
	demoLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	image,
	title,
	description,
	technologies,
	githubLink,
	demoLink,
}) => {
	return (
		<div className="bg-gray-100 -left-4 p-4 rounded-lg flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4 w-[calc(100%+2rem)] relative">
			<img
				src={image}
				alt={title}
				className="h-32 w-52 sm:h-24 sm:w-40 object-fill rounded-lg border border-gray-300"
			/>

			<div className="flex-1">
				<div className="flex justify-between items-center mb-3">
					<h3 className="text-lg font-medium">{title}</h3>
					<div className="flex space-x-3">
						{githubLink && (
							<a
								href={githubLink}
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-800 hover:text-gray-600"
							>
								<FiGithub size={20} />
							</a>
						)}
						{demoLink && (
							<a
								href={demoLink}
								target="_blank"
								rel="noopener noreferrer"
								className="text-green-600 hover:text-green-500"
							>
								<FiExternalLink size={20} />
							</a>
						)}
					</div>
				</div>

				<p className="mb-3 text-sm text-gray-700 leading-relaxed">{description}</p>

				<div className="flex flex-wrap gap-2 mb-2">
					{technologies.map((tech) => (
						<span key={tech} className="bg-gray-300 text-gray-800 px-2 py-1 rounded text-xs">
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
