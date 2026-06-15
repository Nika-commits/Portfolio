import { TanStackDevtools } from "@tanstack/react-devtools";
import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
	useNavigate,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
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
					<div style={{ viewTransitionName: "main-content" }}>
						<TooltipProvider>
							<Outlet />
						</TooltipProvider>
					</div>
				</main>
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}

// function BackgroundGradients() {
// 	return (
// 		<div className="relative h-full w-full bg-background">
// 			<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size[14px_24px]"></div>
// 			<div className="absolute left-0 right-0 top-[-10%] h-250 w-250 rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
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
