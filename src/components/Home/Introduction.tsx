import UnderlineWrapper from "./UnderlineWrapper";

export default function Introduction() {
	return (
		<div className="flex flex-col items-start justify-start gap-4">
			<h1 className="text-base md:text-base font-bold">Hi, 👋🏽</h1>

			<p className="text-sm text-justify md:text-base leading-relaxed text-muted-foreground font-medium">
				I am a frontend-focused full-stack engineer and a final-year BSc (Hons) Computing
				student at Islington College, graduating December 2026. I currently work
				as a Frontend Developer at{" "}
				<UnderlineWrapper
					href="https://restobrain.ai/"
					className="text-foreground font-medium text-sm md:text-base leading-relaxed"
				>
					Restobrain AI
				</UnderlineWrapper>
				, where I primarily work on web applications using TanStack Start
				and TypeScript. I am also an Android Developer Intern at{" "}
				<UnderlineWrapper
					href="https://esewa.com.np/"
					className="text-foreground font-medium text-sm md:text-base leading-relaxed"
				>
					eSewa
				</UnderlineWrapper>
                , learning to develop native Android applications with
                <span className="text-foreground"> Kotlin</span>
                , <span className="text-foreground">Java</span>, <span className="text-foreground">Jetpack Compose</span>, and <span className="text-foreground">XML Views</span>.
			</p>

            <p className="text-sm text-justify md:text-base leading-relaxed text-muted-foreground font-medium"> 
                My primary stack is
                <span className="text-foreground"> TypeScript</span>  and recently <span className="text-foreground">Kotlin</span>.
                On the backend I have worked with
                <span className="text-foreground"> Node.js</span>, <span className="text-foreground">FastAPI</span>,
                <span className="text-foreground"> ASP.NET</span> and 
                <span className="text-foreground"> Supabase</span>. Through my Android internship, I have also been
				gaining hands-on experience with native Android architecture and modern
				mobile development. Outside of work, I am diving deeper into system
                design,
                <span className="text-foreground"> Go</span>, and backend architectures. I am always open to
				challenging software engineering opportunities where I can continue
				learning and building good softwares.
			</p>
		</div>
	);
}
