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

export type ProjectContent = {
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
		description: `
# Tap WholeSale AI

An AI-powered wholesale ecommerce platform built to help small and medium-sized clothing retailers digitize their operations and manage their business more efficiently. The platform combines traditional ecommerce functionality with intelligent business tools that help store owners make data-driven decisions.

## Features

- Secure authentication and role-based access control.
- Product, catalogue, and inventory management.
- Shopping cart and checkout workflows.
- Order and customer management.
- Administrative analytics dashboard.
- AI-powered product recommendation engine.
- Sales demand forecasting using historical sales data.

## Technical Highlights

The application was built using Next.js, FastAPI, Supabase, Docker, Google Cloud, and Vercel. The architecture separates frontend, backend, and AI services to maintain scalability and performance while supporting real-world ecommerce workflows.

## Outcome

This project demonstrates full-stack development, cloud deployment, containerization, machine learning integration, and the implementation of business intelligence features within a production-style ecommerce platform.`,
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
		description: `
# Nep Auto

A full-stack automotive ecommerce platform designed to simplify the buying and selling of vehicle parts through a centralized digital marketplace. The system provides customers with an intuitive shopping experience while offering business owners powerful inventory and sales management tools.

- User authentication and account management.
- Automotive parts catalogue and search functionality.
- Shopping cart and checkout system.
- Inventory and product management dashboard.
- Sales tracking and reporting.
- Recommendation system for related products.
- Forecasting tools for inventory planning.

## Technical Highlights

Built using TanStack technologies, ASP.NET, PostgreSQL, and Docker, the application follows modern full-stack development practices with a focus on scalability, maintainability, and performance.

## Outcome

This project showcases enterprise application architecture, database design, API development, containerized deployment, and business management workflows commonly found in real-world ecommerce systems.`,
		images: [
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/home.webp",
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/partss.webp",
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/sales.webp",
			"https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/dashboard.webp",
		],
		liveUrl: null,
		githubUrl: "https://github.com/hacket41/NepAuto",
		techStack: [
			{ name: "Tanstack", icon: siTanstack },
			{ name: "ASP.NET", icon: siDotnet },
			{ name: "PostgreSQL", icon: siPostgresql },
			{ name: "Docker", icon: siDocker },
		],
	},

	{
		name: "Quizex ",
		description: `
# Quizex

A modern full-stack quiz platform that allows users to create, manage, and participate in quizzes while tracking their performance through real-time scoring and analytics. The application was designed to provide an engaging and interactive learning experience.

- Quiz and question set creation.
- User authentication and profile management.
- Real-time quiz scoring.
- Leaderboards and rankings.
- Detailed performance analytics.
- Responsive user interface across devices.

## Technical Highlights

The frontend was developed using React and TypeScript, while the backend was built with Express.js and MongoDB. The project follows a client-server architecture with REST APIs for communication between services.

## Outcome

This project demonstrates full-stack web development, API integration, state management, authentication systems, and database modeling for educational applications.`,
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
		description: `
# Custom Home Page

A customizable browser new-tab page created to provide a cleaner and more productive browsing experience. The project was inspired by the limitations of traditional browser shortcut systems and focuses on flexibility and ease of use.

- Infinite customizable shortcuts.
- Drag-and-drop shortcut organization.
- Local storage persistence.
- Integrated search functionality.
- Responsive and minimal user interface.
- Shortcut creation, editing, and deletion.

## Technical Highlights

Built with React and JavaScript, the application focuses on smooth interactions, efficient state management, and a lightweight user experience. The project makes extensive use of browser APIs and local storage for data persistence.

## Outcome

This project highlights frontend development skills, user experience design, drag-and-drop functionality, and client-side data management techniques.`,
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
		description: `
# My Journal

A cross-platform journaling application built with .NET MAUI Blazor Hybrid that allows users to create, organize, and manage personal journal entries across multiple devices through a single shared codebase.

- Rich journal writing experience.
- Calendar-based navigation.
- Journal organization and history tracking.
- Search and filtering capabilities.
- User settings and customization options.
- Cross-platform desktop and mobile support.

## Technical Highlights

The application leverages .NET MAUI and Blazor Hybrid to combine native platform capabilities with modern web technologies. The architecture emphasizes code reuse, maintainability, and a consistent user experience across platforms.

## Outcome

This project demonstrates hybrid application development, cross-platform architecture, local data management, and modern .NET development practices.
`,
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
