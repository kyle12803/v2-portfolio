import { FaFileAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SECTIONS } from "../constants";
import { Link, scrollSpy } from "react-scroll";
import { useEffect, useState } from "react";

const Sidebar = () => {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		scrollSpy.update();
	}, []);

	return (
		<div className="lg:flex lg:flex-col h-full justify-between">
			<div>
				<h1 className="text-4xl font-bold mb-3">Kyle Chung</h1>
				<p className="text-2xl mb-1 text-[#5c5c5c]">Student at Northeastern University</p>
				<p className="text-base text-[#676767]">
					B.S. in Computer Science and Business Administration
				</p>

				<nav className="hidden lg:block lg:space-y-6 lg:mt-16">
					{SECTIONS.map((section) => (
						<Link
							to={section.id}
							key={section.id}
							spy={true}
							smooth={true}
							offset={-96}
							duration={250}
							onSetActive={() => setActiveSection(section.id)}
							className={`flex items-center text-lg font-medium ${
								activeSection === section.id ? "text-[#0855b1] font-bold" : "hover:text-[#0855b1]"
							}`}
						>
							{activeSection === section.id && <span className="text-[#0855b1] mr-2">{">"}</span>}
							<span>{section.label}</span>
						</Link>
					))}
				</nav>
			</div>

			<div className="flex space-x-6 mt-6 mb-20 lg:mt-10 lg:mb-0">
				<a
					href="https://github.com/kyle12803"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-700 hover:text-[#0855b1] transition"
				>
					<FaGithub size={24} />
				</a>
				<a
					href="https://linkedin.com/in/kylechung03"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-700 hover:text-[#0855b1] transition"
				>
					<FaLinkedin size={24} />
				</a>
				<a
					href="/Kyle_Chung_Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-700 hover:text-[#0855b1] transition"
				>
					<FaFileAlt size={24} />
				</a>
			</div>
		</div>
	);
};

export default Sidebar;
