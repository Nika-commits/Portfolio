import { createFileRoute } from "@tanstack/react-router";
import GlobalGradientText from "#/components/Global/GradientText";

export const Route = createFileRoute("/projects")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<div>
				<div className="pt-4 md:pt-6 lg:pt-8 flex flex-col items-start gap-1 md:gap-2 px-4">
					<GlobalGradientText text="My Projects" />
					<p className="text-muted-foreground text-base">
						I am relatively new to the industry
					</p>
				</div>
				Working on it .
			</div>
		</div>
	);
}
