import { GithubIcon, InstagramIcon, LucideLinkedin } from "lucide-react";
import UnderlineWrapper from "../Home/UnderlineWrapper";
import NavigationTabs from "./NavigationTabs";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
	return (
		<nav className="flex justify-between items-center py-4 h-fit md:h-30 sticky top-0 z-50">
			<div className="flex justfy-center items-center">
				<div className="social-links flex justify-center items-end gap-4 hover:underline">
					<UnderlineWrapper href="https://www.linkedin.com/in/pranish-chaulagain-0a4833300/">
						<LucideLinkedin
							size={20}
							className="text-foreground/60 transition-colors duration-200 hover:text-foreground"
						/>
					</UnderlineWrapper>
					<UnderlineWrapper href="https://github.com/Nika-commits">
						<GithubIcon
							size={20}
							className="text-foreground/60 transition-colors duration-200 hover:text-foreground"
						/>
					</UnderlineWrapper>
					<UnderlineWrapper href="https://www.instagram.com/_pranisshh/">
						<InstagramIcon
							size={20}
							className="text-foreground/60 transition-colors duration-200 hover:text-foreground"
						/>
					</UnderlineWrapper>
				</div>
			</div>
			<div className="flex justify-center items-center sticky top-0 z-50">
				<NavigationTabs />
			</div>

			<div className="flex justify-end items-center sticky top-0 z-50 social-links">
				<ThemeToggle />
			</div>
		</nav>
	);
}
