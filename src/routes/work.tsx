import { createFileRoute } from "@tanstack/react-router";
import FrontendDeveloper from "#/components/Work/content/FrontendDeveloper";
import FrontendDeveloperIntern from "#/components/Work/content/FrontendDeveloperIntern";
import WorkTimeLine, { type Timeline } from "#/components/Work/WorkTimeLine";

export const Route = createFileRoute("/work")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
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
