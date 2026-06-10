import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<embed
				src="/resume/resume.pdf#toolbar=0&navpanes=0&zoom=80&scrollbar=0&statusbar=0&messages=0&toolbar=0&footer=0&view=FitV&pagemode=none&printmargin=0"
				type="application/pdf"
				title="Resume"
				className="w-full h-[90vh] border rounded-3xl"
			/>
		</div>
	);
}
