import UnderlineWrapper from "./UnderlineWrapper";

export default function Introduction() {
	return (
		<div className="flex flex-col items-start justify-start gap-4">
			<h1 className="text-base md:text-base font-bold">Hi, 👋🏽</h1>

			<p className="text-sm text-justify md:text-base leading-relaxed text-muted-foreground">
				I am a frontend-focused full-stack engineer and final-year BSc Computing
				student at Islington College, graduating December 2026. I currently work
				as a Frontend Developer at{" "}
				<UnderlineWrapper
					href="https://restobrain.ai/"
					className="text-foreground font-medium text-sm md:text-base leading-relaxed "
				>
					restobrain.ai
				</UnderlineWrapper>
				, where I mainly work with Tanstack Start and TypeScript.
			</p>

			<p className="text-sm md:text-base leading-relaxed text-muted-foreground">
				My primary stack is TypeScript. On the backend I have worked and shipped
				with Node.js, FastAPI, ASP.NET and Supabase. Outside of work I am really
				digging into system design, Go, and backend architectures. Open to
				backend internships and or full-time roles.
			</p>
		</div>
	);
}
