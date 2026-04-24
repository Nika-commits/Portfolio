import Navigation from "#/components/Navigation";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
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
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="relative min-h-screen">
				{/* Background layer */}
				<div className="fixed inset-0 -z-10 overflow-hidden">
					<div className="absolute top-[-20%] left-[10%] w-150 h-150 rounded-full bg-primary/10 blur-[120px]" />
					<div className="absolute bottom-[-10%] right-[5%] w-125 h-125 rounded-full bg-ring/20 blur-[100px]" />
					<div className="absolute top-[40%] left-[50%] w-100 h-100 rounded-full bg-muted-foreground/10 blur-[80px]" />
				</div>
				<main className="container mx-auto max-w-4xl px-4 transition-colors duration-300 ease-linear ">
					<Navigation />
					{children}
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
