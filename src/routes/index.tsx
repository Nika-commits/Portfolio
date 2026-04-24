import ProfileCard from "#/components/ProfileCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<main className="flex flex-col gap-6 p-10">
			<ProfileCard />
		</main>
	);
}
