import { SimpleIcon } from "#/components/Home/Skills";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "#/components/ui/accordion.tsx";
import { Badge } from "#/components/ui/badge.tsx";
import { Separator } from "#/components/ui/separator";
import {
    siAndroid,
    siFirebase,
    siJetpackcompose,
    siKotlin,
    siXml
} from "simple-icons";

export default function AndroidDeveloperIntern() {
    return (
        <div>
            <div className="space-y-4">
                <div className="space-y-2 flex justify-between items-start">
                    <h3 className="text-sm md:text-base font-semibold ">
                        Android Developer Intern
                    </h3>

                    <div className="flex justify-end items-start rounded hover:cursor-pointer hover:scale-110 transform-gpu transition-transform duration-300">
                        <img src="/Icons/why-esewa.webp" alt="" className="h-8 rounded"
                            onClick={() => window.open("https://www.esewa.com.np", "_blank")}
                        />
                    </div>
                </div>

                <p className="text-muted-foreground text-xs md:text-sm">
                    Esewa is part of F1Soft Group - a group of IT companies based in Nepal.
                    It is the most used digital wallet in Nepal that serves over 10 million users.
                </p>
                <Separator className="my-4 md:my-6 " />
                <div className="flex flex-wrap items-center gap-4">
                    <span className="flex gap-2 items-end ">
                        <SimpleIcon icon={siKotlin} />
                    </span>
                    <span className="flex gap-2 items-end ">
                        <SimpleIcon icon={siAndroid} />
                    </span>
                    <span className="flex gap-2 items-end  ">
                        <span className=" p-0.5 rounded">
                            <SimpleIcon icon={siJetpackcompose} />
                        </span>
                    </span>
                    <span className="flex gap-2 items-end ">
                        <SimpleIcon icon={siXml} />
                    </span>
                    <span>
                        <SimpleIcon icon={siFirebase} />
                    </span>

                </div>
                <Separator className="my-4 md:my-6 " />
                <Accordion type="single" className="w-full border" collapsible>
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
                                    Followed a structured Android development roadmap covering
                                    Java, Kotlin, XML layouts, Jetpack Compose, and modern Android
                                    development practices.
                                </li>
                                <li>
                                    Built a demo MarketPlace ecommerce application using Jetpack Compose, XML and Firebase.
                                </li>
                                <li>
                                    Integrated eSewa and Khalti Android SDKs into the app in Test Environment for payment processing.
                                </li>
                                <li>Built a custom ASP.NET backend and consumed REST APIs in the application using retrofit, working with asynchronous programming with Coroutines.</li>
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
                                    How Android applications are structured using Activities,
                                    Fragments, layouts and thier lifecycles.
                                </li>
                                <li>
                                    How Kotlin and Kotlin Coroutines work together to simplify
                                    asynchronous programming.
                                </li>
                                <li>
                                    How to build responsive user interfaces with both XML and
                                    Jetpack Compose while translating real Figma designs into
                                    Android screens.
                                </li>
                                <li>
                                    How to integrate REST APIs using Retrofit and work with
                                    network requests, data models, and asynchronous programming.
                                </li>
                                <li>
                                    How to structure and organize Android projects using best
                                    practices and modern development patterns.
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
