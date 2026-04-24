import { Link } from "@tanstack/react-router";
import Logo from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
	return (
		<nav className="flex items-center justify-between">
			<div className="flex items-center">
				{/* <img src="/icon.svg" alt="logo" className="h-24 w-auto" />
				 */}
				<Logo className="h-24 w-auto text-primary" />
				<h1 className="text-2xl font-bold">Pranish Chaulagain</h1>
			</div>
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
			<ThemeToggle />
		</nav>
	);
}
