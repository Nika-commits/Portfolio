import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import GlobalGradientText from "#/components/Global/GLobalGradientText";
import CustomHomepage from "#/components/Projects/CustomHomepage";
import NepAuto from "#/components/Projects/NepAuto";
import Quizex from "#/components/Projects/Quizex";
import TapWholeSale from "#/components/Projects/TapWholeSale";

export const Route = createFileRoute("/projects")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<div className="pt-4 md:pt-6 lg:pt-8 flex flex-col items-start gap-1 md:gap-2 px-4">
				<GlobalGradientText text="My Projects" />
				<p className="text-muted-foreground text-base">
					Stuff I have worked on
				</p>
			</div>

			<motion.div className="py-8 flex flex-col gap-6">
				<TapWholeSale />

				<Quizex />

				<CustomHomepage />

				<NepAuto />
			</motion.div>
		</>
	);
}
