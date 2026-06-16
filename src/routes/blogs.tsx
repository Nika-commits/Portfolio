import { createFileRoute } from "@tanstack/react-router";
import GlobalGradientText from "#/components/Global/GLobalGradientText";

export const Route = createFileRoute("/blogs")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<div className="pt-4 md:pt-6 lg:pt-8">
				<GlobalGradientText text="My Blogs" />
			</div>
			<div className="py-6">
				<span>
					Will write some personal blog posts about my experiences in Software
					Development and learnings soon ....
				</span>
			</div>
		</div>
	);
}
