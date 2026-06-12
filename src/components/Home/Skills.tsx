import {
	siCloudflare,
	siDocker,
	siDotnet,
	siFastapi,
	siGo,
	siGooglecloud,
	siMongodb,
	siMysql,
	siNextdotjs,
	siNodedotjs,
	siPostgresql,
	siReact,
	siTanstack,
	siTypescript,
	siVercel,
} from "simple-icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SimpleIcon = { path: string; hex: string; title: string };

const SKILL_DOMAINS = [
	{
		domain: "Frontend",
		skills: [
			{ label: "TypeScript", icon: siTypescript },
			{ label: "React", icon: siReact },
			{ label: "Next.js", icon: siNextdotjs },
			{ label: "TanStack Start", icon: siTanstack },
		],
	},
	{
		domain: "Backend",
		skills: [
			{ label: "C# / .NET", icon: siDotnet },
			{ label: "FastAPI", icon: siFastapi },
			{ label: "Node.js", icon: siNodedotjs },
			{ label: "Go", icon: siGo },
		],
	},
	{
		domain: "Database & Infra",
		skills: [
			{ label: "PostgreSQL", icon: siPostgresql },
			{ label: "MongoDB", icon: siMongodb },
			{ label: "MySQL", icon: siMysql },
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

export function SkillIcon({ icon }: { icon: SimpleIcon }) {
	return (
		<svg
			role="img"
			viewBox="0 0 24 24"
			className="size-3 md:size-5 shrink-0"
			fill={`#${icon.hex}`}
			aria-label={icon.title}
		>
			<path d={icon.path} />
		</svg>
	);
}

export default function Skills() {
	return (
		<section className="w-full space-y-4">
			<h2 className="text-base md:text-lg font-bold">What I Work With </h2>
			<div className="flex flex-col gap-4">
				{SKILL_DOMAINS.map(({ domain, skills }) => (
					<Card key={domain}>
						<CardHeader>
							<CardTitle className="text-sm md:text-base">{domain}</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-wrap gap-3 md:gap-4">
							{skills.map(({ label, icon }) => (
								<span
									key={label}
									className="flex items-center gap-2 px-2 py-1 md:px-4 md:py-2 text-xs bg-secondary rounded-3xl select-none"
								>
									<SkillIcon icon={icon} />
									{label}
								</span>
							))}
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
