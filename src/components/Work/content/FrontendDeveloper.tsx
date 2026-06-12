import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "#/components/ui/accordion.tsx";
import { Badge } from "#/components/ui/badge.tsx";

export default function FrontendDeveloper() {
	return (
		<div>
			<div className="space-y-4">
				<div className="space-y-3">
					<h3 className="text-xl font-semibold">
						Frontend Developer — Resto Brain.ai
					</h3>
					<p className="text-muted-foreground text-sm">
						After joining as an intern, I was offered a full developer role at
						the same company — a direct result of the work I shipped during the
						internship. Continued owning the frontend of a data-driven dashboard
						used to improve client business workflows.
					</p>
				</div>
				<div className="space-y-3">
					<p className="font-medium">Responsibilities expanded to :</p>
					<ul className="text-muted-foreground ml-2 list-inside list-disc space-y-3 text-sm">
						<li>
							Owning the component architecture end-to-end, not just
							implementing tickets
						</li>
						<li>
							Driving API contract decisions with the backend team directly
						</li>
						<li>Maintaining test coverage as the dashboard grew in scope</li>
					</ul>
				</div>
				<Accordion
					type="multiple"
					className="-mt-4 mb-0 w-full border-none"
					defaultValue={["item-1"]}
				>
					<AccordionItem value="item-0" className="bg-transparent">
						<AccordionTrigger className="px-0 hover:no-underline [&>svg]:size-6!">
							<Badge className="h-6 rounded-sm" variant={"default"}>
								Screenshots
							</Badge>
						</AccordionTrigger>
						<AccordionContent className="h-auto">
							<div className="bg-muted space-y-2 rounded-[10px] p-2">
								<img
									src="./Work/TodoDashboard.png"
									alt="Todo Dashboard"
									className="w-full rounded-[7px] object-cover"
								/>
								<img
									src="./Work/StoreSettings.png"
									alt="Store Settings"
									className="w-full rounded-[7px] object-cover"
								/>
							</div>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-1" className="bg-transparent">
						<AccordionTrigger className="px-0 hover:no-underline [&>svg]:size-6!">
							<Badge className="h-6 rounded-sm " variant={"default"}>
								What I Did
							</Badge>
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							<ul className="text-muted-foreground list-inside list-disc space-y-3 text-sm">
								<li>
									Built and maintained scalable, reusable React + TypeScript
									components for a production dashboard.
								</li>
								<li>
									Eliminated redundant API calls using TanStack Query cache key
									strategies and stale time configuration.
								</li>
								<li>
									Enforced schema-level form validation with React Hook Form +
									Zod before any data reached the API.
								</li>
								<li>
									Collaborated with the backend team to refine API contracts,
									reducing integration friction on both sides.
								</li>
								<li>
									Wrote Cypress component and E2E tests covering dashboard
									workflows and critical UI paths.
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2" className="bg-transparent">
						<AccordionTrigger className="px-0 hover:no-underline [&>svg]:size-6!">
							<Badge className="h-6 rounded-sm " variant={"default"}>
								What I Learned
							</Badge>
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							<ul className="text-muted-foreground list-inside list-disc space-y-3 text-sm">
								<li>
									How to structure a component library that stays maintainable
									as the product grows, not just one that works today.
								</li>
								<li>
									That API contract clarity is a frontend problem too — vague
									contracts produce bugs that look like frontend issues.
								</li>
								<li>
									Real caching tradeoffs: stale time, cache invalidation, and
									when optimistic updates hurt more than they help.
								</li>
								<li>
									How to write tests that survive UI refactors without rewriting
									the entire test suite.
								</li>
							</ul>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3" className="bg-transparent">
						<AccordionTrigger className="px-0 hover:no-underline [&>svg]:size-6!">
							<Badge className="h-6 rounded-sm " variant={"default"}>
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
							<div className="mt-4 flex flex-wrap items-center gap-4">
								<div className="bg-primary/10 text-destructive rounded-sm px-3 py-1 text-xs leading-4.5 font-medium">
									React + TypeScript
								</div>
								<div className="bg-primary/10 text-destructive rounded-sm px-3 py-1 text-xs leading-4.5 font-medium">
									TanStack Query
								</div>
								<div className="bg-primary/10 text-destructive rounded-sm px-3 py-1 text-xs leading-4.5 font-medium">
									Cypress
								</div>
							</div>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
