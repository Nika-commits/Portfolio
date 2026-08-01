import AndroidDeveloperIntern from "#/components/Work/content/AndroidDeveloperIntern";
import FrontendDeveloper from "#/components/Work/content/FrontendDeveloper";
import FrontendDeveloperIntern from "#/components/Work/content/FrontendDeveloperIntern";
import WorkTimeLine, { type Timeline } from "#/components/Work/WorkTimeLine";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
    component: RouteComponent,
    pendingMs: 0,
});

function RouteComponent() {
    return (
        <div>
            {/*<div className="flex flex-col items-start gap-1 md:gap-2">*/}
            {/*<GlobalGradientText text="My Work Experiences" />*/}
            {/*<TypingText
                    className="text-sm md:text-base font-bold tracking-normal text-muted-foreground h-12 md:h-auto "
                    text="My journey from frontend dev to full-stack and native Android. 💼"
                >
                    <TypingTextCursor />
                </TypingText>*/}
            {/*</div>*/}

            {/*<Separator className="my-4 md:my-6" />*/}

            <WorkTimeLine timelines={releases} />
        </div>
    );
}

export const releases: Timeline[] = [
    {
        version: "Jul 1, 2026 - Present",
        date: "eSewa",
        content: <AndroidDeveloperIntern />,
    },
    {
        version: "Feb 9, 2026 - Present",
        date: "Resto Brain",
        content: <FrontendDeveloper />,
    },
    {
        version: "Sep 7, 2025 - Jan 7, 2026",
        date: "Resto Brain",
        content: <FrontendDeveloperIntern />,
    },
];
