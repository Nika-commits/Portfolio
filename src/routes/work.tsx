import { createFileRoute } from "@tanstack/react-router";
import GlobalGradientText from "#/components/Global/GradientText";
import FrontendDeveloper from "#/components/Work/content/FrontendDeveloper";
import FrontendDeveloperIntern from "#/components/Work/content/FrontendDeveloperIntern";
import WorkTimeLine, { type Timeline } from "#/components/Work/WorkTimeLine";

export const Route = createFileRoute("/work")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<div className="pt-4 md:pt-6 lg:pt-8 flex flex-col items-start gap-1 md:gap-2 px-4 py-12">
				<GlobalGradientText text="My Work Experiences" />
				<p className="text-muted-foreground text-base">
					I am relatively new to the industry
				</p>
			</div>
			<WorkTimeLine timelines={releases} />
		</div>
	);
}

export const releases: Timeline[] = [
	{
		version: "Latest Job",
		date: "February 9, 2025",
		content: <FrontendDeveloper />,
	},
	{
		version: "First Job",
		date: "September 7, 2025",
		content: <FrontendDeveloperIntern />,
	},
];
