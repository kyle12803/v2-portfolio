import React from "react";
import { EXPERIENCES } from "../constants";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
	return (
		<section>
			<div className="space-y-8">
				{EXPERIENCES.map((experience) => (
					<ExperienceCard key={experience.title} {...experience} />
				))}
			</div>
		</section>
	);
};

export default Experience;
