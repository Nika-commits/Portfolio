import { createFileRoute } from "@tanstack/react-router";
import { Github, Globe, Link } from "lucide-react";
import { motion } from "motion/react";
import GlobalGradientText from "#/components/Global/GLobalGradientText";
import { UnderlineLink } from "#/components/Global/UnderlineLink";
import { SimpleIcon } from "#/components/Home/Skills";
import { Projects } from "#/components/Projects/contents";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "#/components/ui/carousel";

export const Route = createFileRoute("/projects")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<div className="pt-4 md:pt-6 lg:pt-8 flex flex-col items-start gap-1 md:gap-2 px-4">
				<GlobalGradientText text="My Projects" />
				<p className="text-muted-foreground text-base">
					Things I've worked on 🛠️
				</p>
			</div>

			<motion.div className="py-8 flex flex-col gap-6">
				{Projects.map((project) => {
					return (
						<Card key={project.name}>
							<CardHeader>
								<CardTitle className="flex justify-between items-center">
									<UnderlineLink to="/">
										<span className="flex gap-4 items-center">
											{project.name}
										</span>
									</UnderlineLink>
								</CardTitle>
							</CardHeader>
							<CardContent className="flex flex-col space-y-4 px-6">
								<div className="w-full">
									<Carousel
										className="relative w-full"
										opts={{
											align: "start",
											loop: true,
										}}
									>
										<CarouselContent className="">
											{project.images.map((image, index) => (
												<CarouselItem key={image}>
													<img
														src={image}
														alt={`Slide ${index + 1}`}
														className="w-full h-full object-cover rounded-lg"
													/>
												</CarouselItem>
											))}
										</CarouselContent>
										<CarouselPrevious className="-left-4 z-99" />
										<CarouselNext className="-right-4 z-99" />
									</Carousel>
								</div>
								<div>
									<p className="text-justify">{project.description}</p>
								</div>
							</CardContent>
							<CardFooter className="flex justify-between py-2">
								<div className="flex flex-wrap gap-2 md:gap-4">
									{project.techStack.map((tech) => (
										<span
											key={tech.name}
											className="flex flex-col gap-2 items-center min-w-16"
										>
											<div className="bg-border rounded-lg p-1 md:p-2">
												<SimpleIcon icon={tech.icon} />
											</div>
											<p className="text-[10px] md:text-xs text-muted-foreground break-word">
												{tech.name}
											</p>
										</span>
									))}
								</div>

								<div className="flex gap-2">
									{project.liveUrl && (
										<a href={project.liveUrl} target="_blank" rel="noopener">
											<Button>
												<Globe />
												Live
											</Button>
										</a>
									)}

									{project.githubUrl && (
										<a href={project.githubUrl} target="_blank" rel="noopener">
											<Button>
												<Github />
												Github
											</Button>
										</a>
									)}
								</div>
							</CardFooter>
						</Card>
					);
				})}
			</motion.div>
		</>
	);
}
