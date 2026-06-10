import { createFileRoute } from "@tanstack/react-router";
import Introduction from "#/components/Home/Introduction";
import { MyName } from "#/components/Home/MyName";
import QuickLinks from "#/components/Home/QuickLinks";
import { Separator } from "#/components/ui/separator";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<main className="flex flex-col ">
			<div className="pt-4 md:pt-6 lg:pt-8">
				<MyName loop={true} holdDelay={2500} />
			</div>
			<Separator className="my-4 md:my-6 " />

			<QuickLinks />

			<Separator className="my-4 md:my-6 " />

			<Introduction />
		</main>
	);
}
