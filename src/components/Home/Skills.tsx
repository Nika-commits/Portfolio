import {
	siDocker,
	siDotnet,
	siFastapi,
	siGo,
	siMongodb,
	siMysql,
	siNextdotjs,
	siNodedotjs,
	siPostgresql,
	siPython,
	siReact,
	siTailwindcss,
	siTanstack,
	siTypescript,
} from "simple-icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type SimpleIcon = { path: string; hex: string; title: string };

const SKILL_DOMAINS = [
	{
		domain: "Frontend",
		skills: [
			{ label: "React", icon: siReact },
			{ label: "TypeScript", icon: siTypescript },
			{ label: "Next.js", icon: siNextdotjs },
			{ label: "Tailwind CSS", icon: siTailwindcss },
			{ label: "TanStack", icon: siTanstack },
		],
	},
	{
		domain: "Backend",
		skills: [
			{ label: "C# / .NET", icon: siDotnet },
			{ label: "Python", icon: siPython },
			{ label: "FastAPI", icon: siFastapi },
			{ label: "Go", icon: siGo },
			{ label: "Node.js", icon: siNodedotjs },
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
];

function SkillIcon({ icon }: { icon: SimpleIcon }) {
	return (
		<svg
			role="img"
			viewBox="0 0 24 24"
			className="size-5 shrink-0"
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
			<h2 className="text-2xl font-semibold">Skills</h2>
			<div className="flex flex-col gap-4">
				{SKILL_DOMAINS.map(({ domain, skills }) => (
					<Card key={domain}>
						<CardHeader>
							<CardTitle className="text-base">{domain}</CardTitle>
						</CardHeader>
						<CardContent className="flex flex-wrap gap-4">
							{skills.map(({ label, icon }) => (
								<span
									key={label}
									className="flex items-center gap-2 px-4 py-2 text-xs bg-secondary rounded-3xl select-none"
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
