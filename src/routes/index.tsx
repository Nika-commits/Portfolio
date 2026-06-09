import { createFileRoute } from "@tanstack/react-router";
import { MyName } from "#/components/Home/MyName";
import { Separator } from "#/components/ui/separator";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<main className="flex flex-col ">
			<div className="pt-4 md:pt-10 lg:pt-16">
				<MyName loop={true} holdDelay={2500} />
			</div>
			<Separator className="my-8" />
		</main>
	);
}
