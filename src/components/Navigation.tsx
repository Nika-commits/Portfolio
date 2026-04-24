import { Link } from "@tanstack/react-router";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
	return (
		<nav className="flex items-center justify-between">
			<Logo className="h-14  lg:h-24 w-auto py-3 text-primary transition-colors duration-300" />
			<div className="flex items-center gap-4">
				<Link to="/" className="text-sm font-medium text-muted-foreground">
					Home
				</Link>
				<Link to="/about" className="text-sm font-medium text-muted-foreground">
					About
				</Link>
				<Link
					to="/projects"
					className="text-sm font-medium text-muted-foreground"
				>
					Projects
				</Link>
			</div>
			{/* <img className="h-14 lg:h-24 w-auto" alt="cat" src="/icons8-cat.gif" /> */}
			<ThemeToggle />
		</nav>
	);
}
