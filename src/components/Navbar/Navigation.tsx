import NavigationTabs from "./NavigationTabs";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
	return (
		<nav className="grid grid-cols-3 py-4 h-fit md:h-30">
			<div className="flex justfy-start items-end ">
				{/* <Logo className="h-14 lg:h-14 w-auto text-primary transition-colors duration-300 hover:text-foreground" /> */}
			</div>
			<div className="flex justify-center items-center">
				<NavigationTabs />
			</div>

			<div className="flex justify-end items-center">
				<ThemeToggle />
			</div>
		</nav>
	);
}
