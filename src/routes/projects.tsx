import {
    TypingText,
    TypingTextCursor,
} from "#/components/animate-ui/primitives/texts/typing";
import GlobalGradientText from "#/components/Global/GLobalGradientText";
import { UnderlineLink } from "#/components/Global/UnderlineLink";
import { SimpleIcon } from "#/components/Home/Skills";
import UnderlineWrapper from "#/components/Home/UnderlineWrapper";
import { type ProjectContent, Projects } from "#/components/Projects/contents";
import { ProjectCarousel } from "#/components/Projects/ProjectCarousel.tsx";
import { Button } from "#/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "#/components/ui/card";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
} from "#/components/ui/dialog";
import { Separator } from "#/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";
import { BookOpenTextIcon, Globe } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useState } from "react";
import Markdown from "react-markdown";
import { siGithub } from "simple-icons";

export const Route = createFileRoute("/projects")({
    component: RouteComponent,
});

function RouteComponent() {
    const [openReadMore, setOpenReadMore] = useState<ProjectContent | null>(null);
    const variants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: ["easeInOut"] }
        }
    }


    return (
        <div className="pb-50">
            <div className="flex flex-col items-start gap-1 md:gap-2">
                <GlobalGradientText text="My Projects" />
                <TypingText
                    className="text-sm md:text-base font-bold tracking-normal text-muted-foreground "
                    text="Things I have worked on. 🛠️"
                >
                    <TypingTextCursor />
                </TypingText>
            </div>
            <Separator className="my-4 md:my-6" />

            <div className="flex flex-col gap-20">
                {Projects.map((project) => {
                    return (
                        <motion.div
                            key={project.name}
                            variants={variants}
                            initial="hidden"
                            whileInView={"visible"}
                            viewport={{
                                once: true,
                                amount: 0.15,
                                margin: "15%",
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -10 }}
                                initial="hidden"
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >

                                <Card className="max-w-xl justify-self-center">
                                    <CardHeader>
                                        <CardTitle className="flex justify-between items-center">
                                            <UnderlineLink to="/">
                                                <span className="flex gap-4 items-center px-3 font-bold tracking-wider">
                                                    {project.name}
                                                </span>
                                            </UnderlineLink>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex flex-col space-y-4 px-6">
                                        <div className="w-full">
                                            <ProjectCarousel images={project.images} />
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
                                                <a href={project.liveUrl} target="_blank" rel="noopener">
                                                    <Button type="button" variant="default" size="icon-lg">
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
                                                    <Button type="button" variant="default" size="icon-lg">
                                                        <SimpleIcon icon={siGithub} overrideColor="green" />
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
                <DialogContent className="md:max-w-2xl! max-h-[90dvh] flex flex-col p-8 overflow-hidden">
                    <DialogHeader></DialogHeader>
                    <div className="prose prose-sm prose-neutral dark:prose-invert pb-4 leading-relaxed overflow-y-auto min-h-0 pr-2 md:pr-0 max-w-none text-xs md:text-sm">
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
