import { createFileRoute } from "@tanstack/react-router";
import GlobalGradientText from "#/components/Global/GLobalGradientText";
import { Separator } from "#/components/ui/separator";
import AndroidDeveloperIntern from "#/components/Work/content/AndroidDeveloperIntern";
import FrontendDeveloper from "#/components/Work/content/FrontendDeveloper";
import FrontendDeveloperIntern from "#/components/Work/content/FrontendDeveloperIntern";
import WorkTimeLine, { type Timeline } from "#/components/Work/WorkTimeLine";

export const Route = createFileRoute("/work")({
	component: RouteComponent,
	pendingMs: 0,
});

function RouteComponent() {
	return (
		<div>
			<div className="flex flex-col items-start gap-1 md:gap-2">
				<GlobalGradientText text="My Work Experiences" />
				<p className="text-base lg:text-lg font-bold tracking-wide text-muted-foreground">
					I am relatively new to the industry with around 1 year of experience.
					🌱
				</p>
			</div>

			<Separator className="my-4 md:my-6" />

			<WorkTimeLine timelines={releases} />
		</div>
	);
}

export const releases: Timeline[] = [
	{
		version: "Recent Job",
		date: "July 1, 2026",
		content: <AndroidDeveloperIntern />,
	},
	{
		version: "Latest Job",
		date: "February 9, 2026",
		content: <FrontendDeveloper />,
	},
	{
		version: "First Job",
		date: "September 7, 2025",
		content: <FrontendDeveloperIntern />,
	},
];
