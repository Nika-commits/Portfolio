import { createFileRoute } from "@tanstack/react-router";
import Introduction from "#/components/Home/Introduction";
import { MyName } from "#/components/Home/MyName";
import QuickLinks from "#/components/Home/QuickLinks";
import Skills from "#/components/Home/Skills";
import { Separator } from "#/components/ui/separator";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<main className="flex flex-col ">
			<MyName />

			<Separator className="my-4 md:my-6" />

			<QuickLinks />

			<Separator className="my-4 md:my-6 " />

			<Introduction />

			<Separator className="my-4 md:my-6 " />

			<Skills />

			<Separator className="my-4 md:my-6 " />
		</main>
	);
}
