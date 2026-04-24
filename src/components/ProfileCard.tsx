import {
	IconBrandDocker,
	IconBrandNextjs,
	IconBrandPython,
	IconBrandReact,
	IconBrandSupabase,
	IconBrandTypescript,
} from "@tabler/icons-react";
import {
	Briefcase,
	ExternalLink,
	GithubIcon,
	GraduationCap,
	LinkedinIcon,
	MapPin,
	TowerControl, // TanStack placeholder — no official icon exists
} from "lucide-react";
import Oggy from "./Oggy";
import { Badge } from "./ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

type Skill = {
	title: string;
	icon: React.ElementType;
};

const skills: Skill[] = [
	{ title: "Next.js", icon: IconBrandNextjs },
	{ title: "React", icon: IconBrandReact },
	{ title: "TypeScript", icon: IconBrandTypescript },
	{ title: "TanStack", icon: TowerControl },
	{ title: "Supabase", icon: IconBrandSupabase },
	{ title: "FastAPI", icon: IconBrandPython },
	{ title: "Python", icon: IconBrandPython },
	{ title: "Docker", icon: IconBrandDocker },
];

const socials = [
	{
		label: "GitHub",
		href: "https://github.com/Nika-commits",
		icon: GithubIcon,
	},
	{
		label: "LinkedIn",
		href: "https://linkedin.com/in/pranishch",
		icon: LinkedinIcon,
	},
];

export default function ProfileCard() {
	return (
		<div className="relative">
			<div className="absolute top-2 right-1">
				<Oggy />
			</div>

			<Card>
				<CardHeader className="pb-3 pr-16 sm:pr-20">
					<CardTitle className="text-2xl font-heading">
						Pranish Chaulagain
					</CardTitle>
					<CardDescription className="flex flex-col gap-1.5 pt-1">
						<span className="flex items-center gap-1.5">
							<GraduationCap className="size-3.5 shrink-0" />
							BSc Computing · London Metropolitan University
						</span>
						<span className="flex items-center gap-1.5">
							<Briefcase className="size-3.5 shrink-0" />
							Frontend & Fullstack Engineer
						</span>
						<span className="flex items-center gap-1.5">
							<MapPin className="size-3.5 shrink-0" />
							Kathmandu, Nepal
						</span>
					</CardDescription>
				</CardHeader>

				<Separator />

				<CardContent className="pt-4 space-y-4">
					<p className="text-sm text-muted-foreground leading-relaxed">
						Final-year CS student building production-grade full-stack apps.
						Focused on clean architecture, scalable systems, and great UX.
					</p>

					<div className="space-y-2">
						<p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
							Stack
						</p>
						<div className="flex flex-wrap gap-1.5">
							{skills.map(({ title, icon: Icon }) => (
								<Badge
									key={title}
									variant="secondary"
									className="text-xs font-normal flex items-center gap-1"
								>
									<Icon className="size-3.5" />
									{title}
								</Badge>
							))}
						</div>
					</div>

					<div className="flex gap-4 pt-1">
						{socials.map(({ label, href, icon: Icon }) => (
							<a
								key={label}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
							>
								<Icon className="size-3.5" />
								{label}
								<ExternalLink className="size-3" />
							</a>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
