import Sidebar from "./components/Sidebar";
import Bio from "./components/Bio";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import "./index.css";
import { Element } from "react-scroll";
import { SECTIONS } from "./constants";

const App = () => {
	return (
		<div className="mx-auto min-h-screen max-w-screen-xl px-6 pt-12 font-sans md:px-12 md:py-16 lg:py-0 !scroll-smooth">
			<div className="lg:flex lg:justify-between lg:gap-4">
				<div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
					<Sidebar />
				</div>

				<main className="lg:w-[52%] lg:pt-24">
					{SECTIONS.map((section) => (
						<Element name={section.id} key={section.id} className="pb-16 lg:pb-24">
							{section.id === "about" && <Bio />}
							{section.id === "experience" && <Experience />}
							{section.id === "projects" && <Projects />}
						</Element>
					))}
				</main>
			</div>
		</div>
	);
};

export default App;
