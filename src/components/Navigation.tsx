import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./DarkModeSwitch";

export default function Navigation() {
	return (
		<nav className="flex items-center justify-between">
			<div className="flex items-center">
				{/* <img src="/logo.png" alt="logo" className="h-8 w-8" /> */}
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
