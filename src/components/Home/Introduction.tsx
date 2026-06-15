import UnderlineWrapper from "./UnderlineWrapper";

export default function Introduction() {
	return (
		<div className="flex flex-col items-start justify-start gap-4">
			<h1 className="text-base md:text-base font-bold">Hi, 👋🏽</h1>

			<p className="text-sm text-justify md:text-base leading-relaxed text-muted-foreground">
				I'm a frontend-focused full-stack engineer and final-year BSc Computing
				student at Islington College, graduating December 2026. I currently work
				as a Frontend Developer at{" "}
				<UnderlineWrapper
					href="https://restobrain.ai/"
					// target="_blank"
					className="text-foreground font-medium text-sm md:text-base leading-relaxed "
					// rel="noopener"
				>
					RestoBrain.ai
				</UnderlineWrapper>
				, where I mainly work on data-driven admin dashboards using Tanstack
				React and TypeScript. In my work, I care about following clean
				architecture and writing code that's easy to reason about, simple and
				performs well without any bloat.
			</p>

			<p className="text-sm md:text-base leading-relaxed text-muted-foreground">
				My primary tech stack is TypeScript, and Next.js. On the backend I've
				shipped with Node.js, FastAPI, ASP.NET and Supabase. Outside of work I'm
				digging into system design, Go, and backend architectures. Open to
				backend internships and or full-time roles.
			</p>
		</div>
	);
}
