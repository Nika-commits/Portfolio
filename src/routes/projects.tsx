import { createFileRoute } from "@tanstack/react-router";
import { BookOpenTextIcon, Globe } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import Markdown from "react-markdown";
import { siGithub } from "simple-icons";
import GlobalGradientText from "#/components/Global/GLobalGradientText";
import { UnderlineLink } from "#/components/Global/UnderlineLink";
import { SimpleIcon } from "#/components/Home/Skills";
import UnderlineWrapper from "#/components/Home/UnderlineWrapper";
import { type ProjectContent, Projects } from "#/components/Projects/contents";
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
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
} from "#/components/ui/dialog";
import { Separator } from "#/components/ui/separator";

export const Route = createFileRoute("/projects")({
	component: RouteComponent,
});

function RouteComponent() {
	const [openReadMore, setOpenReadMore] = useState<ProjectContent | null>(null);
	return (
		<div className="pb-50">
			<div className="pt-4 md:pt-6 lg:pt-8 flex flex-col items-start gap-1 md:gap-2 px-4">
				<GlobalGradientText text="My Projects" />
				<p className="text-muted-foreground text-base">
					Things I've worked on 🛠️
				</p>
            </div>

            <Separator className="my-8" />

			<div className="flex flex-col gap-20">
				{Projects.map((project) => {
					return (
						<motion.div
							className="snap-center flex items-center justify-center"
							key={project.name}
						>
							<motion.div
								initial={{ scale: 0.8, opacity: 0.6 }}
								whileInView={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.2, ease: "linear" }}
								viewport={{ amount: 0.99 }}
							>
								<Card>
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
															<div className="aspect-video overflow-hidden rounded-lg">
																<img
																	src={image}
																	alt={`Slide ${index + 1}`}
																	className="w-full h-full object-cover rounded-lg"
																	loading="lazy"
																/>
															</div>
														</CarouselItem>
													))}
												</CarouselContent>
												<CarouselPrevious className="-left-4 z-99" />
												<CarouselNext className="-right-4 z-99" />
											</Carousel>
										</div>
										<div>
											<span className="flex justify-end items-center mt-2">
												<Button
													type="button"
													variant="ghost"
													size="xs"
													onClick={() => setOpenReadMore(project)}
												>
													<UnderlineWrapper className="flex  items-center gap-1 font-bold ">
														Learn More <BookOpenTextIcon />
													</UnderlineWrapper>
												</Button>
											</span>
										</div>
									</CardContent>
									<CardFooter className="flex justify-between py-2">
										<div className="flex flex-wrap gap-2 md:gap-2">
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
												<a
													href={project.liveUrl}
													target="_blank"
													rel="noopener"
												>
													<Button
														type="button"
														variant="default"
														size="icon-lg"
													>
														<Globe />
													</Button>
												</a>
											)}

											{project.githubUrl && (
												<a
													href={project.githubUrl}
													target="_blank"
													rel="noopener"
												>
													<Button
														type="button"
														variant="default"
														size="icon-lg"
													>
														<SimpleIcon icon={siGithub} />
													</Button>
												</a>
											)}
										</div>
									</CardFooter>
								</Card>
							</motion.div>
						</motion.div>
					);
				})}
			</div>

			<Dialog
				open={openReadMore !== null}
				onOpenChange={(open) => {
					if (!open) setOpenReadMore(null);
				}}
			>
				<DialogContent className="max-w-2xl! max-h-[90dvh] flex flex-col overflow-hidden">
					<DialogHeader></DialogHeader>
					<div className="prose prose-sm prose-neutral dark:prose-invert pb-4 leading-relaxed overflow-y-auto min-h-0 pr-2 md:pr-0 max-w-none">
						<Markdown>{openReadMore?.description}</Markdown>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<Button variant="default">Close</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	);
}
