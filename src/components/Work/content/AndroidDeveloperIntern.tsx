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
    siAndroidstudio,
    siGradle,
    siJetpackcompose,
    siKotlin,
    siXml,
} from "simple-icons";

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
                        <span className=" p-0.5 rounded">
                            <SimpleIcon icon={siJetpackcompose} />
                        </span>
                    </span>
                    <span className="flex gap-2 items-end ">
                        <SimpleIcon icon={siXml} />
                    </span>
                    <span className="flex gap-2 items-end ">
                        <SimpleIcon icon={siAndroidstudio} />
                    </span>
                    <span className="flex gap-2 items-end ">
                        <SimpleIcon icon={siGradle} />
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
                                    Followed a structured Android development roadmap covering
                                    Java, Kotlin, XML layouts, Jetpack Compose, and modern Android
                                    development practices.
                                </li>
                                <li>
                                    Implemented UI screens from Figma designs, recreating them
                                    using both traditional XML layouts and Jetpack Compose.
                                </li>
                                <li>
                                    Built small Android features and practice applications to
                                    reinforce core concepts such as activities, layouts, state
                                    management, and navigation.
                                </li>
                                <li>
                                    Learned to consume REST APIs using Retrofit and worked with
                                    JSON data, asynchronous network requests, and response
                                    handling.
                                </li>
                                <li>
                                    Received regular code reviews and guidance from senior Android
                                    developers to improve code quality, architecture, and Android
                                    best practices.
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
                                    How Android applications are structured using Activities,
                                    Fragments, layouts, and modern development patterns.
                                </li>
                                <li>
                                    The progression from Java to Kotlin, including Kotlin language
                                    features that simplify Android development and improve code
                                    readability.
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
                                    The importance of writing clean, maintainable Android code and
                                    approaching development with an iterative learning mindset
                                    through mentor feedback and practical exercises.
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
