export default function Introduction() {
	return (
		<div className="flex flex-col items-start justify-start gap-4">
			<h1 className="text-base md:text-lg font-bold">Hi,</h1>

			<p className="text-sm text-justify md:text-base leading-relaxed text-muted-foreground">
				I'm a frontend-focused full-stack developer and final-year BSc Computing
				student at Islington College, graduating December 2026. I currently work
				as a Frontend Developer at{" "}
				<a
					href="https://restobrain.ai/"
					target="_blank"
					className="underline text-foreground font-medium"
					rel="noopener"
				>
					Resto Brain
				</a>
				, where I mainly work on data-driven admin dashboards using Tanstack
				React and TypeScript. I care about clean architecture and writing code
				that's easy to reason about and performs well and not just code that
				works.
			</p>

			<p className="text-sm md:text-base leading-relaxed text-muted-foreground">
				My primary stack is React, TypeScript, and Next.js. On the backend I've
				shipped with Node.js, FastAPI, and Supabase. Outside of work I'm digging
				into system design, Go, and distributed systems. Open to internships and
				full-time roles.
			</p>
		</div>
	);
}
