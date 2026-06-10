import NavigationTabs from "./NavigationTabs";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
	return (
		<nav className="grid grid-cols-3 py-4 h-fit md:h-30 sticky top-0 z-50">
			<div className="flex justfy-center items-center  ">{/* <Oggy /> */}</div>
			<div className="flex justify-center items-center sticky top-0 z-50">
				<NavigationTabs />
			</div>

			<div className="flex justify-end items-center sticky top-0 z-50">
				<ThemeToggle />
			</div>
		</nav>
	);
}
