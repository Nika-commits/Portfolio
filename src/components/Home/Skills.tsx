import { cn } from "#/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Variants } from "motion";
import { motion } from "motion/react";
import {
    siAndroid,
    siBlazor,
    siCloudflare,
    siDocker,
    siDotnet,
    siFastapi,
    siGo,
    siGooglecloud,
    siJetpackcompose,
    siKotlin,
    siMongodb,
    siMysql,
    siNextdotjs,
    siNodedotjs,
    siPostgresql,
    siReact,
    siSqlite,
    siSquare,
    siTanstack,
    siTypescript,
    siVercel,
    siXml,
} from "simple-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";


type SimpleIcon = { path: string; hex: string; title: string };

const SKILL_DOMAINS = [
    {
        domain: "Frontend",
        skills: [
            { label: "TypeScript", icon: siTypescript },
            { label: "React", icon: siReact },
            { label: "Next.js", icon: siNextdotjs },
            { label: "TanStack Start", icon: siTanstack },
            { label: "Blazor", icon: siBlazor },
        ],
    },
    {
        domain: "Backend",
        skills: [
            { label: "C# / .NET", icon: siDotnet },
            { label: "Node.js", icon: siNodedotjs },
            { label: "FastAPI", icon: siFastapi },
            { label: "Go", icon: siGo },
        ],
    },
    {
        domain: "Mobile",
        skills: [
            { label: "Android", icon: siAndroid },
            { label: "Kotlin", icon: siKotlin },
            { label: "Jetpack Compose", icon: siJetpackcompose },
            { label: "XML", icon: siXml },
            { label: "Retrofit", icon: siSquare },
        ],
    },
    {
        domain: "Database and Infrastructure",
        skills: [
            { label: "PostgreSQL", icon: siPostgresql },
            { label: "MongoDB", icon: siMongodb },
            { label: "MySQL", icon: siMysql },
            { label: "SQLite", icon: siSqlite },
            { label: "Docker", icon: siDocker },
        ],
    },
    {
        domain: "Where I Host Generally",
        skills: [
            { label: "Vercel", icon: siVercel },
            { label: "Cloudflare", icon: siCloudflare },
            { label: "Google Cloud ", icon: siGooglecloud },
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
            className={cn("size-3 md:size-5 shrink-0", className)}
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
                    // viewport={{
                    //     once: true,
                    //     amount: 0.2,
                    //     // margin: "-40% 0px -40% 0px",
                    // }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xs md:text-sm">{domain}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-3 md:gap-4">
                                {skills.map(({ label, icon }) => {
                                    const isCloudflare = label === "Cloudflare";
                                    const isTanstack = label === "TanStack Start";

                                    if (isCloudflare) {
                                        return (
                                            <Tooltip key={label}>
                                                <TooltipTrigger>
                                                    <span
                                                        className="flex items-center gap-2 px-2 py-1 md:px-2 md:py-1 text-xs bg-primary text-secondary text-pretty rounded-xl select-none"
                                                    >
                                                        <SimpleIcon icon={icon} />
                                                        {label}
                                                    </span>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    This is hosted in Cloudflare btw. 😜
                                                </TooltipContent>
                                            </Tooltip>
                                        );
                                    }
                                    if (isTanstack) {
                                        return (
                                            <Tooltip key={label}>
                                                <TooltipTrigger>
                                                    <span
                                                        className="flex items-center gap-2 px-2 py-1 md:px-2 md:py-1 text-xs bg-primary text-secondary text-pretty rounded-xl select-none"
                                                    >
                                                        <SimpleIcon icon={icon} overrideColor={"green"} />
                                                        {label}
                                                    </span>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    This was built using Tanstack btw. 😜
                                                </TooltipContent>
                                            </Tooltip>
                                        );
                                    }

                                    return (
                                        <span
                                            key={label}
                                            className="flex items-center gap-2 px-2 py-1 md:px-2 md:py-1 text-xs bg-secondary rounded-xl select-none transform-gpu hover:scale-105 transition-all duration-200 cursor-pointer"
                                        >
                                            <SimpleIcon icon={icon} />
                                            {label}
                                        </span>
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
