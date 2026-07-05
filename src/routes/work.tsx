import { createFileRoute } from "@tanstack/react-router";
import {
	TypingText,
	TypingTextCursor,
} from "#/components/animate-ui/primitives/texts/typing";
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
				{/*<p className="text-base lg:text-lg font-bold tracking-normal text-muted-foreground">*/}
				<TypingText
					className="text-base md:text-lg font-bold tracking-normal text-muted-foreground h-12 md:h-auto "
					text="My journey from frontend dev to full-stack and native Android. 💼"
					// loop
				>
					<TypingTextCursor />
				</TypingText>
				{/*</p>*/}
			</div>

			<Separator className="my-4 md:my-6" />

			<WorkTimeLine timelines={releases} />
		</div>
	);
}

export const releases: Timeline[] = [
	{
		version: "eSewa",
		date: "Jul 1, 2026 - Present",
		content: <AndroidDeveloperIntern />,
	},
	{
		version: "Resto Brain",
		date: "Feb 9, 2026 - Present",
		content: <FrontendDeveloper />,
	},
	{
		version: "Resto Brain",
		date: "Sep 7, 2025 - Jan 7, 2026",
		content: <FrontendDeveloperIntern />,
	},
];
