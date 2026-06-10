export default function Introduction() {
	return (
		<div className="flex flex-col items-start justify-start gap-4 px-4 md:px-8 max-w-2xl py-10">
			<p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
				Kathmandu, Nepal 🇳🇵
			</p>

			<h1 className="text-3xl font-medium tracking-tight text-foreground">
				Hi, I'm Pranish Chaulagain.
			</h1>

			<p className="text-base leading-relaxed text-muted-foreground">
				I'm a frontend-focused full-stack developer and final-year BSc Computing
				student at Islington College, graduating August 2026. I currently work
				as a Frontend Developer at{" "}
				<span className="text-foreground font-medium">Resto Brain.ai</span>,
				where I build data-driven dashboards using React and TypeScript. I care
				about clean architecture and writing code that's easy to reason about —
				not just code that works.
			</p>

			<p className="text-base leading-relaxed text-muted-foreground">
				My primary stack is React, TypeScript, and Next.js. On the backend I've
				shipped with Node.js, FastAPI, and Supabase. Outside of work I'm digging
				into system design, Go, and distributed systems. Open to internships and
				full-time roles.
			</p>
		</div>
	);
}
