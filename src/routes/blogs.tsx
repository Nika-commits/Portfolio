import { createFileRoute } from "@tanstack/react-router";
import GlobalGradientText from "#/components/Global/GLobalGradientText";
import { Separator } from "#/components/ui/separator";

export const Route = createFileRoute("/blogs")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<div className="flex flex-col items-start gap-1 md:gap-2">
				<GlobalGradientText text="My Blogs" />

				<p className="text-base md:text-lg font-bold tracking-wide text-muted-foreground">
					A Glimpse inside my mind. 💭
				</p>
			</div>

			<Separator className="my-4 md:my-6" />

			<div>
				<span>
					Will write some personal blog posts about my experiences in Software
					Development and learnings soon ....
				</span>
			</div>
		</div>
	);
}
