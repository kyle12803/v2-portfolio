export const SECTIONS = [
	{ id: "about", label: "About" },
	{ id: "experience", label: "Experience" },
	{ id: "projects", label: "Projects" },
];

export const EXPERIENCES = [
	{
		title: "Software Engineer Intern",
		company: "Google - Google Workspace",
		duration: "June 2024 - Sept 2024",
		description:
			"Integrated Google Drive quota enforcement in Google Sites, including document size calculation, server-side validation, and client-side notifications for users exceeding storage limits.",
		technologies: [
			"Java",
			"JavaScript",
			"Google Closure Templates",
			"Cloud Spanner",
			"Google Guice",
		],
		link: "https://workspace.google.com/products/drive/",
	},
	{
		title: "Software Engineer Co-op",
		company: "Infinite Cooling",
		duration: "Jan 2024 - June 2024",
		description:
			"Enhanced performance by optimizing state management and reducing latency, built efficient APIs for data retrieval, and implemented customer-facing features to improve user experience and address evolving needs.",
		technologies: ["Typescript", "React.js", "Python", "Django", "MongoDB", "Git"],
		link: "https://www.infinite-cooling.com",
	},
	{
		title: "STEP Intern",
		company: "Google - Google Cloud",
		duration: "June 2023 - Sept 2023",
		description:
			"Developed a large-scale data processing pipeline and created a visualization tool to support data analysis, helping the team make informed decisions on resource usage and partner data limits.",
		technologies: ["C++", "Data Pipelines", "Google Bigtable", "Google Tesst"],
		link: "https://www.google.com/travel/search",
	},
	{
		title: "Software Engineer Co-op",
		company: "Mastercam",
		duration: "Jan 2023 - June 2023",
		description:
			"Streamlined build workflows to reduce production build times by 70% and improved development processes through automation, migration, and knowledge sharing.",
		technologies: ["PowerShell", "Groovy", "Jenkins", "Github Actions", "CI/CD", "Agile"],
		link: "https://www.mastercam.com",
	},
	{
		title: "Office Intern",
		company: "Asian American Center - Northeastern University",
		duration: "Sept 2022 - Present",
		description:
			"Promoted awareness of the Asian community and fostered inclusivity by collaborating on the creation and organization of student events.",
		technologies: [],
		link: "https://asianamericancenter.northeastern.edu",
	},
];

export const PROJECTS = [
	{
		image: "/projects/ezracooper.png",
		title: "Dr. Ezra Cooper Website",
		description:
			"Responsive website for Dr. Ezra Cooper, a chiropractor in Syosset, NY, featuring details of services offered, office pictures, and a contact form",
		technologies: ["Javascript", "Next.js", "Tailwind CSS", "Email.js"],
		githubLink: "https://github.com/kyle12803/dr-cooper-chiropractor",
		demoLink: "https://drezracooper.vercel.app/home",
	},
	{
		image: "/projects/spreadsheet.png",
		title: "Spreadsheet Application",
		description:
			"Dynamic spreadsheet application supporting cell formulas, references, range expressions, and more.",
		technologies: ["TypeScript", "React.js", "Jest", "Tailwind CSS", "Peggy", "Recharts"],
	},
	{
		image: "/projects/makemoney.png",
		title: "MakeMoney",
		description:
			"Stock tracking tool that allows users to sign up, manage portfolios with public and private watchlists, and explore other user's profiles.",
		technologies: [
			"Javascript",
			"React.js",
			"Axios",
			"Bootstrap",
			"Chart.js",
			"Redux",
			"Node.js",
			"Express",
			"Mongoose",
			"MongoDB",
			"Yahoo Finance API",
		],
		githubLink: "https://github.com/MakeMoney-WebDev",
		demoLink: "https://main--mellifluous-hotteok-2f6aed.netlify.app/#/MakeMoney/Home",
	},
	{
		image: "/projects/kanbas.png",
		title: "Kanbas",
		description:
			"A learning management system inspired by Canvas LMS, allowing educators to manage courses, assignments, modules, enrollments, and grades.",
		technologies: [
			"Javascript",
			"React.js",
			"Axios",
			"Bootstrap",
			"Redux",
			"Node.js",
			"Express",
			"Mongoose",
			"MongoDB",
		],
		githubLink: "https://github.com/kyle12803/kanbas-react-web-app",
	},
	{
		image: "/projects/image_processor.png",
		title: "Image Processor",
		description:
			"Image processing application with CLI and GUI, built using the command design pattern and MVC/OOD principles, supporting image manipulation, enhancement, partial edits, and multi-format import/export.",
		technologies: ["Java", "Swing", "JUnit 4"],
		githubLink: "https://github.com/kyle12803/ImageProcessing",
	},
	{
		image: "/projects/marble_solitaire.png",
		title: "Marble Solitaire",
		description:
			"A command-line game that simulates marble solitaire, built using MVC/OOD principles featuring multiple board types and configurations, with functionality to move, flip, and remove marbles following game rules.",
		technologies: ["Java", "JUnit 4"],
	},
	{
		image: "/projects/maze_search.png",
		title: "Maze Search",
		description:
			"Interactive maze game featuring random maze generation using Kruskal's algorithm and pathfinding with DFS and BFS.",
		technologies: ["Java", "Javalib", "Tester"],
	},
	{
		image: "/projects/ships_n_bullets.png",
		title: "ShipsNBullets",
		description:
			"Interactive space shooter game featuring dynamic ship spawning, collision detection, score tracking, and recursive data structures to manage game state and animations",
		technologies: ["Java", "Javalib", "Tester"],
	},
];
