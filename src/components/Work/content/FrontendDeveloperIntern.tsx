import { siReact, siTanstack, siTypescript } from "simple-icons";
import { SkillIcon } from "#/components/Home/Skills";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "#/components/ui/accordion.tsx";
import { Badge } from "#/components/ui/badge.tsx";
import { CopyCode } from "#/components/ui/copy-code.tsx";
import { Separator } from "#/components/ui/separator";

export default function FrontendDeveloperIntern() {
	const codeExample = `// TanStack Query cache deduplication pattern
const { data: dashboardData } = useQuery({
  queryKey: ["dashboard", clientId],
  queryFn: () => fetchDashboardMetrics(clientId),
  staleTime: 1000 * 60 * 5, // 5 minutes
});`;

	return (
		<div>
			<div className="space-y-4">
				<div className="space-y-3">
					<h3 className="text-base md:text-lg font-semibold">
						Frontend Developer Intern — Resto Brain.ai
					</h3>
					<p className="text-muted-foreground text-xs md:text-sm">
						My first industry role. Joined as a frontend intern and was embedded
						directly in the product team, shipping real features to a
						data-driven dashboard used by actual clients from day one.
					</p>
				</div>
				<ul className="text-muted-foreground ml-2 list-inside list-disc space-y-3 text-xs md:text-sm">
					<li>
						Built reusable React + TypeScript components under senior review
					</li>
					<li>
						Learned how TanStack Query caching works by eliminating redundant
						API calls in a live dashboard
					</li>
					<li>
						Wrote my first production Cypress tests covering real user workflows
					</li>
				</ul>
				<Separator className="my-4 md:my-6 " />
				<div className="flex flex-wrap items-center gap-4">
					<span className="flex gap-2 items-end ">
						<SkillIcon icon={siTypescript} />
					</span>
					<span className="flex gap-2 items-end ">
						<SkillIcon icon={siReact} />
					</span>
					<span className="flex gap-2 items-end  ">
						<span className="bg-white p-0.5 rounded">
							<SkillIcon icon={siTanstack} />
						</span>
					</span>
				</div>
				<Separator className="my-4 md:my-6 " />

				<CopyCode code={codeExample} />
				<p className="text-muted-foreground text-xs py-2">
					This was one of the first real patterns I had to understand on the
					job. Keying queries to specific client IDs and configuring stale times
					was how we stopped the dashboard from hammering the API on every
					render.
				</p>
				<Accordion
					type="single"
					className="p-2 w-full border"
					defaultValue="what-i-did"
					collapsible
				>
					<AccordionItem
						value="what-i-did"
						className="bg-transparent border-b last:border-b-0"
					>
						<AccordionTrigger className="hover:no-underline [&>svg]:size-6!">
							<Badge variant={"default"} className="h-6 rounded-sm">
								What I Did
							</Badge>
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							<ul className="text-muted-foreground list-inside list-disc space-y-3 text-xs md:text-sm">
								<li>
									Built reusable UI components for a production dashboard,
									working within an existing codebase for the first time.
								</li>
								<li>
									Implemented TanStack Query caching to reduce redundant API
									calls — my first exposure to server state management in a real
									product.
								</li>
								<li>
									Wired up form validation with React Hook Form + Zod, learning
									how schema-level validation prevents bad data from ever
									reaching the API.
								</li>
								<li>
									Joined backend syncs to understand API contracts and give
									frontend feedback on response shapes.
								</li>
								<li>
									Wrote Cypress tests for dashboard workflows — my introduction
									to E2E testing in a production environment.
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						value="what-i-learned"
						className="bg-transparent border-b last:border-b-0"
					>
						<AccordionTrigger className="hover:no-underline [&>svg]:size-6!">
							<Badge className="h-6 rounded-sm" variant={"default"}>
								What I Learned
							</Badge>
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							<ul className="text-muted-foreground list-inside list-disc space-y-3 text-xs md:text-sm">
								<li>
									How to read and contribute to an existing codebase without
									breaking things — the skill no tutorial teaches you.
								</li>
								<li>
									That server state and client state are genuinely different
									problems, and why a dedicated tool like TanStack Query exists.
								</li>
								<li>
									How API contracts affect frontend code — and why frontend
									engineers need a seat at that table.
								</li>
								<li>
									What it actually means to write a test that will still pass
									after the next UI change.
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem
						value="stack"
						className="bg-transparent border-b last:border-b-0"
					>
						<AccordionTrigger className="hover:no-underline [&>svg]:size-6!">
							<Badge className="h-6 rounded-sm" variant={"default"}>
								Stack & Tools
							</Badge>
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							<ul className="text-muted-foreground list-inside list-disc space-y-3 text-xs md:text-sm">
								<li>
									React, TypeScript — my first time using both together in
									production
								</li>
								<li>
									TanStack Query — learned server state management on the job
								</li>
								<li>
									React Hook Form + Zod — form validation with real schema
									enforcement
								</li>
								<li>Cypress — first exposure to E2E and component testing</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
