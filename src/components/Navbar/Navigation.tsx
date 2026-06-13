import { GithubIcon, InstagramIcon, LucideLinkedin } from "lucide-react";
import NavigationTabs from "./NavigationTabs";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
	return (
		<nav className="grid grid-cols-3 py-4 h-fit md:h-30 sticky top-0 z-50">
			<div className="flex justfy-center items-center">
				<div className="social-links grid grid-cols-3 gap-6 bg-muted px-4 py-3 rounded-3xl border-2 border-primary/30">
					<a
						href="https://www.linkedin.com/in/pranish-chaulagain-0a4833300/"
						target="_blank"
						rel="noopener"
					>
						<LucideLinkedin
							size={20}
							className="text-foreground/60 transition-colors duration-200 hover:text-foreground"
						/>
					</a>

					<a
						href="https://github.com/Nika-commits"
						target="_blank"
						rel="noopener"
					>
						<GithubIcon
							size={20}
							className="text-foreground/60 transition-colors duration-200 hover:text-foreground"
						/>
					</a>

					<a
						href="https://www.instagram.com/_pranisshh/"
						target="_blank"
						rel="noopener"
					>
						<InstagramIcon
							size={20}
							className="text-foreground/60 transition-colors duration-200 hover:text-foreground"
						/>
					</a>
				</div>
			</div>
			<div className="flex justify-center items-center sticky top-0 z-50">
				<NavigationTabs />
			</div>

			<div className="flex justify-end items-center sticky top-0 z-50">
				<ThemeToggle />
			</div>
		</nav>
	);
}
