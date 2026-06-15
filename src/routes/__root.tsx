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
				<main className="container mx-auto max-w-3xl px-4 pb-18">
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
// 		<div
// 			className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none"
// 			aria-hidden="true"
// 		>
// 			<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] min-w-75 rounded-full bg-primary/5 dark:bg-primary/10 blur-[120px] transition-colors duration-500 ease-in-out" />

// 			<div className="absolute inset-0 text-foreground/8 dark:text-foreground/6 bg-[radial-gradient(currentColor_1px,transparent_1px)] bg-size-[4px_4px] transition-colors duration-500 ease-in-out" />
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
