import { cn } from "#/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Variants } from "motion";
import { motion } from "motion/react";
import {
    siBlazor,
    siC,
    siCloudflare,
    siDocker,
    siDotnet,
    siFastapi,
    siFirebase,
    siGo,
    siGooglecloud,
    siJetpackcompose,
    siKotlin,
    siMongodb,
    siNextdotjs,
    siNodedotjs,
    siPostgresql,
    siPython,
    siReact,
    siRust,
    siSqlite,
    siSquare,
    siTanstack,
    siTypescript,
    siVercel,
    siXml
} from "simple-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type SimpleIcon = { path: string; hex: string; title: string };

type SkillDomain = {
    domain: string;
    skills: Skill[];
};

type Skill = {
    label: string;
    icon: SimpleIcon;
    description?: string;
};

const SKILL_DOMAINS: SkillDomain[] = [
    {
        domain: "Languages",
        skills: [
            {
                label: "TypeScript",
                icon: siTypescript,
                description: "My most used language",
            },
            {
                label: "Kotlin",
                icon: siKotlin,
                description: "My second most used language mostly for Android development",
            },
            {
                label: "C#",
                icon: siC,
                description: "My favorite OOP based language. (better than Java lmao)",
            },
            {
                label: "Go",
                icon: siGo,
                description: "My favorite compiled language plus its simple. Still learning",
            },
            {
                label: "Rust",
                icon: siRust,
                description: "Hard af. Still learning primarily to build native Linux apps using gtk",
            },
            {
                label: "Python",
                icon: siPython,
                description: "Trash",
            },
        ],
    },
    {
        domain: "Frontend",
        skills: [
            {
                label: "React",
                icon: siReact,
                description: "My favorite frontend library plus its the default ig",
            },
            {
                label: "TanStack Start",
                icon: siTanstack,
                description: "My favorite frontend framework. It provides everything and doesn't lock me into a specified way of doing things (Nextjs).",
            },
            {
                label: "Next.js",
                icon: siNextdotjs,
                description: "Its fine ig",
            },
            {
                label: "Blazor",
                icon: siBlazor,
                description: "Its meh tbh. Learnt it for college",
            },
        ],
    },
    {
        domain: "Backend",
        skills: [
            {
                label: "Asp.Net",
                icon: siDotnet,
                description: "My favorite backend framework. Its fast and simple.",
            },
            {
                label: "Node.js",
                icon: siNodedotjs,
                description: "My second favorite backend framework. ",
            },
            {
                label: "FastAPI",
                icon: siFastapi,
                description: "Not a fan tbh but used it as a inference layer for my final year project's ML infra.",
            },
        ],
    },
    {
        domain: "Mobile",
        skills: [
            {
                label: "XML Views",
                icon: siXml,
                description: "Liked the separation of concerns between XML and code but after using compose I prefer the declarative nature of it.",
            },
            {
                label: "Jetpack Compose",
                icon: siJetpackcompose,
                description: "Way better than XML views. Love it declarative nature",
            },
            {
                label: "Retrofit",
                icon: siSquare,
                description: "My favorite mobile networking library.",
            },
        ],
    },
    {
        domain: "Database and Infrastructure",
        skills: [
            {
                label: "Firebase",
                icon: siFirebase,
                description: "My favorite mobile database and auth handler",
            },
            {
                label: "PostgreSQL",
                icon: siPostgresql,
                description: "Best database tbh",
            },
            {
                label: "SQLite",
                icon: siSqlite,
                description: "I use it for local storage",
            },
            {
                label: "MongoDB",
                icon: siMongodb,
                description: "Fine ig",
            },
            {
                label: "Docker",
                icon: siDocker,
                description: "Containerization is my thing",
            },
        ],
    },
    {
        domain: "Where I Host Generally",
        skills: [
            {
                label: "Cloudflare",
                icon: siCloudflare,
                description: "This website is hosted on Cloudflare btw.",
            },
            {
                label: "Vercel",
                icon: siVercel,
                description: "Love its ease of use",
            },
            {
                label: "Google Cloud ",
                icon: siGooglecloud,
                description: "Damn",
            },
        ],
    },
];

export function SimpleIcon({
    icon,
    overrideColor,
    className,
}: {
    icon: SimpleIcon;
    overrideColor?: string;
    className?: string;
}) {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            className={cn("size-4 md:size-5 shrink-0", className)}
            fill={overrideColor ?? `#${icon.hex}`}
            aria-label={icon.title}
        >
            <path d={icon.path} />
        </svg>
    );
}

export default function Skills() {

    const variants: Variants = {
        hidden: {
            opacity: 0.2,
            y: -20,
        },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
                delay: index * 0.02,
            }
        }),
    }

    return (
        <section className="w-full space-y-4">
            <h2 className="text-sm md:text-base font-bold">What I Work With </h2>
            <div
                className="flex flex-col gap-4"
            >
                {SKILL_DOMAINS.map(({ domain, skills }, index) => (
                    <motion.div
                        key={domain}
                        variants={variants}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xs md:text-sm">{domain}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-3 md:gap-4">
                                {skills.map(({ label, icon, description }) => {
                                    return (
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <span
                                                    key={label}
                                                    className={cn("flex items-center gap-2 px-2 py-1 md:px-2 md:py-1 text-xs bg-secondary rounded-lg select-none transform-gpu hover:scale-105 transition-all duration-200 cursor-pointer")}
                                                >
                                                    <SimpleIcon
                                                        icon={icon}
                                                    />
                                                    {label}
                                                </span>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                {description}
                                            </TooltipContent>
                                        </Tooltip>
                                    );
                                })}
                            </CardContent>
                        </Card>

                    </motion.div>
                ))}
            </div>
        </section>
    );
}
