import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
	useNavigate,
} from "@tanstack/react-router";
import Navigation from "#/components/Navbar/Navigation";
import { Button } from "#/components/ui/button";
import { Separator } from "#/components/ui/separator";
import { TooltipProvider } from "#/components/ui/tooltip";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Pranish Chaulagain",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
	notFoundComponent: NotFound,
});

function RootDocument() {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="relative min-h-screen antialiased transition-colors duration-200 ease-linear scroll-smooth">
				{/*<BackgroundGradients />*/}
				<main className="container mx-auto max-w-2xl px-6 pb-18">
					<Navigation />
					<div style={{ viewTransitionName: "page-content" }}>
						<TooltipProvider>
							<Outlet />
						</TooltipProvider>
					</div>
				</main>
				{/* <TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/> */}
				<Scripts />
			</body>
		</html>
	);
}

// function BackgroundGradients() {
// 	return (
// 		<div className="h-full  bg-linear-to-bl from-primary to-secondary">
// 			<div className="relative w-full max-w-lg"></div>
// 		</div>
// 	);
// }

function NotFound() {
	const navigate = useNavigate();
	return (
		<main className="flex flex-col justify-center items-center ">
			<div className="pt-4 md:pt-6 lg:pt-8">
				<h1 className="text-4xl font-bold text-center">404</h1>
				<p className="text-xl text-center">
					The page you are looking for does not exist. 🥀🥀
				</p>
			</div>
			<Separator className="my-4 md:my-8 " />
			<div>
				<Button onClick={() => navigate({ to: "/" })}>Go to Home 👋🏽</Button>
			</div>
		</main>
	);
}
