import { FiExternalLink } from "react-icons/fi";

interface ExperienceProps {
	title: string;
	company: string;
	duration: string;
	description: string;
	technologies: string[];
	link: string;
}

const ExperienceCard = ({
	title,
	company,
	duration,
	description,
	technologies,
	link,
}: ExperienceProps) => {
	return (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="block -left-4 w-[calc(100%+2rem)] rounded-md p-6 mb-8 transform transition duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-[#0855b1] border border-transparent relative group"
		>
			<h3 className="text-xl font-bold group-hover:text-[#0855b1]">{title}</h3>
			<p className="text-[#676767]">{company}</p>
			<p className="text-sm mb-4 text-[#676767]">{duration}</p>
			<p className="leading-relaxed text-[#5c5c5c]">{description}</p>

			<div className="flex flex-wrap gap-2 mt-4">
				{technologies.map((tech) => (
					<span key={tech} className="bg-[#f0f0f0] text-[#676767] text-sm px-2 py-1 rounded-lg ">
						{tech}
					</span>
				))}
			</div>

			<span className="absolute top-6 right-6 text-[#0855b1] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
				<FiExternalLink size={20} />
			</span>
		</a>
	);
};

export default ExperienceCard;
