import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "#/components/ui/accordion.tsx";
import { Badge } from "#/components/ui/badge.tsx";
import { CopyCode } from "#/components/ui/copy-code.tsx";

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
					<h3 className="text-xl font-semibold">
						Frontend Developer — Resto Brain.ai
					</h3>
					<p className="text-muted-foreground text-sm">
						Joined as an intern and grew into a developer role, building the
						core UI layer of a data-driven dashboard used to streamline client
						business workflows. Worked closely with a backend team to shape API
						contracts and ensure clean frontend-backend integration.
					</p>
				</div>
				<ul className="text-muted-foreground ml-2 list-inside list-disc space-y-3 text-sm">
					<li>
						Built and maintained scalable, reusable React + TypeScript
						components
					</li>
					<li>
						Eliminated redundant API calls across the dashboard via TanStack
						Query caching
					</li>
					<li>
						Authored E2E and component tests using Cypress across key dashboard
						workflows
					</li>
				</ul>
				<div className="flex flex-wrap items-center gap-4">
					{/* React */}
					<div className="flex items-center gap-1.5 rounded-[6px] bg-sky-600/10 px-3 py-1 dark:bg-sky-400/10">
						<img
							src="https://cdn.shadcnstudio.com/ss-assets/brand-logo/react-logo.png"
							alt="React"
							className="h-4.5"
						/>
						<span className="text-xs font-medium">React</span>
					</div>
					{/* TypeScript */}
					<div className="flex items-center gap-1.5 rounded-[6px] bg-blue-600/10 px-3 py-1 dark:bg-blue-400/10">
						<img
							src="https://cdn.simpleicons.org/typescript"
							alt="TypeScript"
							className="h-4.5"
						/>
						<span className="text-xs font-medium">TypeScript</span>
					</div>
					{/* Cypress */}
					<div className="flex items-center gap-1.5 rounded-[6px] bg-emerald-600/10 px-3 py-1 dark:bg-emerald-400/10">
						<img
							src="https://cdn.simpleicons.org/cypress"
							alt="Cypress"
							className="h-4.5"
						/>
						<span className="text-xs font-medium">Cypress</span>
					</div>
				</div>
				<CopyCode code={codeExample} />
				<p className="text-muted-foreground text-sm">
					The snippet above is representative of the caching approach used
					across the dashboard. By keying queries to specific client IDs and
					setting appropriate stale times, redundant network requests were
					eliminated without any manual deduplication logic.
				</p>
				<Accordion
					type="multiple"
					className="-mt-4 mb-0 w-full border-none"
					defaultValue={["item-1"]}
				>
					<AccordionItem value="item-1" className="bg-transparent">
						<AccordionTrigger className="px-0 hover:no-underline [&>svg]:size-6!">
							<Badge variant={"default"} className="h-6 rounded-sm">
								What I Did
							</Badge>
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							<ul className="text-muted-foreground list-inside list-disc space-y-3 text-sm">
								<li>
									Developed reusable UI components and maintained scalable
									architecture for a production React + TypeScript dashboard.
								</li>
								<li>
									Reduced unnecessary API calls by implementing TanStack Query
									with intentional cache key strategies and stale time config.
								</li>
								<li>
									Built form validation pipelines using React Hook Form + Zod,
									enforcing schema-level correctness before any API call.
								</li>
								<li>
									Collaborated with the backend team to iterate on API
									contracts, ensuring the frontend consumed well-shaped,
									predictable data.
								</li>
								<li>
									Wrote Cypress component and E2E tests covering dashboard
									workflows and critical UI interactions.
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2" className="bg-transparent">
						<AccordionTrigger className="px-0 hover:no-underline [&>svg]:size-6!">
							<Badge className="h-6 rounded-sm" variant={"default"}>
								What I Learned
							</Badge>
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							<ul className="text-muted-foreground list-inside list-disc space-y-3 text-sm">
								<li>
									How to structure a production-grade component library with
									reusability and long-term maintainability in mind.
								</li>
								<li>
									The importance of API contract design — how ambiguous
									contracts create subtle bugs that surface only at runtime.
								</li>
								<li>
									Real-world tradeoffs in caching: what to cache, for how long,
									and when aggressive caching actually hurts consistency.
								</li>
								<li>
									How to write tests that give you confidence without becoming a
									maintenance burden as the UI evolves.
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3" className="bg-transparent">
						<AccordionTrigger className="px-0 hover:no-underline [&>svg]:size-6!">
							<Badge className="h-6 rounded-sm" variant={"default"}>
								Stack & Tools
							</Badge>
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							<ul className="text-muted-foreground list-inside list-disc space-y-3 text-sm">
								<li>
									React, TypeScript — component architecture and type-safe UI
								</li>
								<li>
									TanStack Query — server state management and request caching
								</li>
								<li>
									React Hook Form + Zod — form state and schema validation
								</li>
								<li>
									Cypress — component tests and end-to-end workflow coverage
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
