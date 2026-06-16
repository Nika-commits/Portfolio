import { createFileRoute } from "@tanstack/react-router";
import GlobalGradientText from "#/components/Global/GLobalGradientText";
import { Separator } from "#/components/ui/separator";
import FrontendDeveloper from "#/components/Work/content/FrontendDeveloper";
import FrontendDeveloperIntern from "#/components/Work/content/FrontendDeveloperIntern";
import WorkTimeLine, { type Timeline } from "#/components/Work/WorkTimeLine";

export const Route = createFileRoute("/work")({
	component: RouteComponent,
	pendingMs: 0,
});

function RouteComponent() {
	return (
		<>
			{/*<motion.div
				id="scroll-indicator-home"
				style={{
					scaleX: scrollYProgress,
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					height: 8,
					originX: 0,
					backgroundColor: "var(--color-primary)",
				}}
			/>*/}
			<div>
				<div className="pt-4 md:pt-6 lg:pt-8 flex flex-col items-start gap-1 md:gap-2 px-4">
					<GlobalGradientText text="My Work Experiences" />
					<p className="text-base lg:text-lg font-bold tracking-wide text-muted-foreground">
						I am relatively new to the industry with around 1 year of
						experience. 🌱
					</p>
				</div>

				<Separator className="my-8 " />

				<WorkTimeLine timelines={releases} />
			</div>
		</>
	);
}

export const releases: Timeline[] = [
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
