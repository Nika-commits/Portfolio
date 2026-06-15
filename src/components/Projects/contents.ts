import {
	type SimpleIcon,
	siBlazor,
	siDocker,
	siDotnet,
	siExpress,
	siFastapi,
	siGooglecloud,
	siJavascript,
	siMongodb,
	siNextdotjs,
	siPostgresql,
	siReact,
	siSupabase,
	siTanstack,
	siTypescript,
	siVercel,
} from "simple-icons";

type TechStack = {
	name: string;
	icon: SimpleIcon;
};

type ProjectContent = {
	name: string;
	description: string;
	images: string[];
	liveUrl: string | null;
	githubUrl: string | null;
	techStack: TechStack[];
};

export const Projects: ProjectContent[] = [
	{
		name: "Tap WholeSale AI",
		description: `This is a web-based wholesale ecommerce platform with essential
		ecommerce features like User authentication, Products and
		Catalogues, Shopping and checkout, Payments Integration, Admin
		Management with AI powered features like Sales Demand Forecasting
		and a complete Recommendation Engine which are based on real-world
		data. This project is designed to provide digital wholesale
		platform for small to medium business owners running a clothing outlet.`,
		images: [
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/tapwholesale.webp",
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/tapwholesale-prod.webp",
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/forecast.webp",
		],
		liveUrl: "https://tapwholesalenepal.com",
		githubUrl: null,
		techStack: [
			{ name: "Next.js", icon: siNextdotjs },
			{ name: "Fast API", icon: siFastapi },
			{ name: "Supabase", icon: siSupabase },
			{ name: "Vercel", icon: siVercel },
			{ name: "Google Cloud", icon: siGooglecloud },
			{ name: "Docker", icon: siDocker },
		],
	},

	{
		name: "Nep Auto",
		description: `This is a web-based auto sales platform with essential
		ecommerce features like User authentication, Products and
		Catalogues, Shopping and checkout, Payments Integration, Admin
		Management with AI powered features like Sales Demand Forecasting
		and a complete Recommendation Engine which are based on real-world
		data. This project is designed to provide digital auto sales
		platform for small to medium business owners running an auto outlet.`,
		images: [
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/home.webp",
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/partss.webp",
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/sales.webp",
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/dashboard.webp",
		],
		liveUrl: null,
		githubUrl: "https://github.com/hacket41/NepAuto",
		techStack: [
			{ name: "Tanstack Start", icon: siTanstack },
			{ name: "ASP.NET", icon: siDotnet },
			{ name: "PostgreSQL", icon: siPostgresql },
			{ name: "Docker", icon: siDocker },
		],
	},

	{
		name: "Quizex ",
		description: `A modern full-stack quiz application built with React and
		TypeScript for the frontend and Node.js for the backend. This
		comprehensive platform allows users to create, manage, and
		attempt quizzes with real-time scoring and detailed analytics.`,
		images: [
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/UnAuthHomePage.webp",
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/CreateQuestionSet.webp",
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/leadeboard.webp",
		],
		liveUrl: null,
		githubUrl: "https://github.com/Nika-commits/QuizX__FullStack-Quiz-App",
		techStack: [
			{ name: "React", icon: siReact },
			{ name: "TypeScript", icon: siTypescript },
			{ name: "Express.js", icon: siExpress },
			{ name: "MongoDB", icon: siMongodb },
		],
	},

	{
		name: "Custom Home Page",
		description: `A simple custom new tab page extension that displays a search bar,
		drag and droppable infinite shortcuts and other personal utilities.
		I basically built this as I wanted more shortcuts in my new tab page
		and chrome only provides a limited number of shortcuts. Other than
		that, I think this just looks better haha.`,
		images: [
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/custom-tab.webp",
		],
		liveUrl: "https://nika-commits.github.io/custom-new-tab/",
		githubUrl: "https://github.com/Nika-commits/custom-new-tab",
		techStack: [
			{ name: "React", icon: siReact },
			{ name: "JavaScript", icon: siJavascript },
		],
	},

	{
		name: "My Journal",
		description: `A feature rich cross platform journaling app built with dotNet MAUI Blazor Hybrid`,
		images: [
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/journal-write.webp",
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/journal-list.webp",
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/calendar.webp",
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/settings.webp",
		],
		liveUrl: null,
		githubUrl: "https://github.com/Nika-commits/MyJournal",
		techStack: [
			{ name: "Blazor", icon: siBlazor },
			{ name: ".NET MAUI", icon: siDotnet },
		],
	},
];
