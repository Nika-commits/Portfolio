import {
	siCypress,
	siReact,
	siReacthookform,
	siTanstack,
	siTypescript,
} from "simple-icons";
import { SimpleIcon } from "#/components/Home/Skills";
import UnderlineWrapper from "#/components/Home/UnderlineWrapper";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "#/components/ui/accordion.tsx";
import { Badge } from "#/components/ui/badge.tsx";
import { Separator } from "#/components/ui/separator";

export default function FrontendDeveloper() {
	return (
		<div>
			<div className="space-y-4">
				<div className="space-y-2">
					<h3 className="text-base md:text-lg font-semibold">
						Frontend Developer -{" "}
						<UnderlineWrapper
							href="https://restobrain.ai"
							className="text-base md:text-lg font-bold "
						>
							RestoBrain.ai
						</UnderlineWrapper>
					</h3>
					<p className="text-muted-foreground text-xs md:text-sm">
						After joining as an intern, I was offered a full time developer role
						at the same company, a direct result of the work I shipped during
						the internship. Continued working on the advanced frontend of the
						dashbaord.
					</p>
				</div>

				<div className="space-y-2">
					<p className="font-normal text-sm md:text-base">
						Responsibilities expanded to :
					</p>
					<ul className="text-muted-foreground ml-2 list-inside list-disc space-y-3 text-xs md:text-sm">
						<li>Owning the component architecture end-to-end</li>
						<li>
							Driving API contract decisions with the backend team directly
						</li>
						<li>Maintaining test coverage as the dashboard grew in scope</li>
					</ul>
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
					<span className="flex gap-2 items-end ">
						<SimpleIcon icon={siCypress} />
					</span>
					<span className="flex gap-2 items-end ">
						<SimpleIcon icon={siReacthookform} />
					</span>
				</div>
				<Separator className="my-4 md:my-6 " />
				<Accordion type="single" className="w-full border" collapsible>
					<AccordionItem value="screenshots" className="bg-transparent">
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
					</AccordionItem>

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

					<AccordionItem
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
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
