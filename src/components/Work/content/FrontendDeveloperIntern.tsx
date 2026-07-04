import { siReact, siTanstack, siTypescript } from "simple-icons";
import { SimpleIcon } from "#/components/Home/Skills";
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
			<div className="space-y-2 flex justify-between items-start">
					<h3 className="text-base md:text-base font-semibold">
						Frontend Developer Intern
                    </h3>
                    <div className="dark:bg-primary py-1 px-2 rounded">
                        <img src="/Icons/restobrain.webp" alt="" className="h-5" />
					</div>
				</div>
				<Separator className="my-4 md:my-6 " />
				<div className="flex flex-wrap items-center gap-4">
					<span className="flex gap-2 items-end ">
						<SimpleIcon icon={siTypescript} />
					</span>
					<span className="flex gap-2 items-end ">
						<SimpleIcon icon={siReact} />
					</span>
					<span className="flex gap-2 items-end  ">
						<span className="bg-white p-0.5 rounded">
							<SimpleIcon icon={siTanstack} />
						</span>
					</span>
				</div>
				<Separator className="my-4 md:my-6 " />

				<h3>What I learnt on Day 1</h3>

				<CopyCode code={codeExample} />
				<p className="text-muted-foreground text-xs py-2">
					This was one of the first real patterns I had to understand on the
					job. I had never used Tanstack Query before, so I had to learn it from
					scratch. Keying queries to specific ID and configuring stale times was
					how I learned to cache the API data and stop the frontend from
					hammering the API on every render.
				</p>
				<Accordion type="single" className="p-2 w-full border" collapsible>
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
								<li>Wired up form validation with React Hook Form and Zod,</li>
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
									breaking things.
								</li>
								<li>
									That server state and client state are genuinely different
									problems, and why a dedicated tool like TanStack Query exists.
								</li>
								<li>How API contracts affect frontend design</li>
								<li>
									What it actually means to write a test that will still pass
									after the next UI change.
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>

					{/*<AccordionItem
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
					</AccordionItem>*/}
				</Accordion>
			</div>
		</div>
	);
}
