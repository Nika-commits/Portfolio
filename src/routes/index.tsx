import { createFileRoute } from "@tanstack/react-router";
import { MorphingTextDemo } from "#/components/Home/MyName";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<main className="flex flex-col gap-6 py-4">
			<MorphingTextDemo loop={true} holdDelay={2500} />
		</main>
	);
}
