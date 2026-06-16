import { GithubIcon, InstagramIcon, LucideLinkedin } from "lucide-react";
import UnderlineWrapper from "../Home/UnderlineWrapper";
import NavigationTabs from "./NavigationTabs";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
	return (
		<nav className="grid grid-cols-8 items-center py-4 sticky top-0 z-50">
			<div className="col-span-2 flex justify-start items-center">
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

			<div className="col-span-4 flex justify-center items-center">
				<NavigationTabs />
			</div>

			<div className="col-span-2 flex justify-end items-center social-links">
				<ThemeToggle />
			</div>
		</nav>
	);
}
