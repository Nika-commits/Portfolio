import { createFileRoute } from "@tanstack/react-router";
import GlobalGradientText from "#/components/Global/GLobalGradientText";

export const Route = createFileRoute("/blogs")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="pt-4 md:pt-6 lg:pt-8">
			<GlobalGradientText text="My Blogs" />
		</div>
	);
}
