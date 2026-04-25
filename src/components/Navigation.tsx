import Logo from "./Logo";
import NavigationTabs from "./NavigationTabs";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
	return (
		<nav className="grid grid-cols-3 items-center ">
			<Logo className="h-14 lg:h-20 w-auto py-3 text-primary transition-colors duration-300 hover:text-foreground" />
			<div className="flex items-center justify-center">
				<NavigationTabs />
			</div>
			<div className="flex justify-end">
				<ThemeToggle />
			</div>
		</nav>
	);
}
