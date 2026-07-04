import {
	siAndroid,
	siAndroidstudio,
	siJetpackcompose,
	siKotlin,
	siXml,
} from "simple-icons";
import { SimpleIcon } from "#/components/Home/Skills";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "#/components/ui/accordion.tsx";
import { Badge } from "#/components/ui/badge.tsx";
import { Separator } from "#/components/ui/separator";

export default function AndroidDeveloperIntern() {
	return (
		<div>
			<div className="space-y-4">
				<div className="space-y-2 flex justify-between items-start">
					<h3 className="text-base md:text-base font-semibold ">
						Android Developer Intern
					</h3>

					<div className="flex justify-end items-start rounded hover:scale-110 transform transition-all duration-150">
						<img src="/Icons/why-esewa.webp" alt="" className="h-8 rounded" />
					</div>
				</div>

				<p className="text-muted-foreground text-xs md:text-sm"></p>
				<Separator className="my-4 md:my-6 " />

				<div className="flex flex-wrap items-center gap-4">
					<span className="flex gap-2 items-end ">
						<SimpleIcon icon={siKotlin} />
					</span>
					<span className="flex gap-2 items-end ">
						<SimpleIcon icon={siAndroid} />
					</span>
					<span className="flex gap-2 items-end  ">
						<span className="bg-white p-0.5 rounded">
							<SimpleIcon icon={siJetpackcompose} />
						</span>
					</span>
					<span className="flex gap-2 items-end ">
						<SimpleIcon icon={siXml} />
					</span>
					<span className="flex gap-2 items-end ">
						<SimpleIcon icon={siAndroidstudio} />
					</span>
				</div>
				<Separator className="my-4 md:my-6 " />
				<Accordion type="single" className="w-full border" collapsible>
					{/*<AccordionItem value="screenshots" className="bg-transparent">
						<AccordionTrigger className="hover:no-underline [&>svg]:size-6!">
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
					</AccordionItem>*/}

					<AccordionItem
						value="what-i-did"
						className="bg-transparent border-b last:border-b-0"
					>
						<AccordionTrigger className=" hover:no-underline [&>svg]:size-6!">
							<Badge className="h-6 rounded-sm " variant={"default"}>
								What I Did
							</Badge>
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							<ul className="text-muted-foreground list-inside list-disc space-y-3 text-xs md:text-sm">
								<li>
									Built and maintained scalable, reusable React + TypeScript
									components for the production dashboard.
								</li>
								<li>
									Eliminated redundant API calls using TanStack Query cache key
									strategies and stale time configuration.
								</li>
								<li>
									Worked on new routes and pages - combined Tanstack Router with
									Tanstack Query
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

					<AccordionItem
						value="what-i-learned"
						className="bg-transparent border-b last:border-b-0"
					>
						<AccordionTrigger className=" hover:no-underline [&>svg]:size-6!">
							<Badge className="h-6 rounded-sm " variant={"default"}>
								What I Learned
							</Badge>
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							<ul className="text-muted-foreground list-inside list-disc space-y-3 text-xs md:text-sm">
								<li>
									How to structure a frontend that stays maintainable as the
									product grows.
								</li>
								<li>That API contract clarity is a frontend problem too.</li>
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

					{/*<AccordionItem
						value="stack"
						className="bg-transparent border-b last:border-b-0"
					>
						<AccordionTrigger className=" hover:no-underline [&>svg]:size-6!">
							<Badge className="h-6 rounded-sm " variant={"default"}>
								Stack & Tools
							</Badge>
						</AccordionTrigger>
						<AccordionContent className="text-muted-foreground">
							<ul className="text-muted-foreground list-inside list-disc space-y-3 text-xs md:text-sm">
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
					</AccordionItem>*/}
				</Accordion>
			</div>
		</div>
	);
}
