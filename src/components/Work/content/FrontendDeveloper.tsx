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
    siCypress,
    siReact,
    siReacthookform,
    siTanstack,
    siTypescript,
} from "simple-icons";

export default function FrontendDeveloper() {
    return (
        <div>
            <div className="space-y-4">
                <div className="space-y-2 flex justify-between items-start">
                    <h3 className="text-sm md:text-base font-semibold">
                        Junior Frontend Developer
                    </h3>
                    <div className="dark:bg-primary py-1 px-2 rounded hover:cursor-pointer hover:scale-110 transform-gpu transition-transform duration-300">
                        <img
                            src="/Icons/restobrain.webp"
                            alt="Resto Brain"
                            className="h-5"
                            onClick={() => window.open("https://restobrain.ai", "_blank")}
                        />
                    </div>
                </div>
                <p className="text-muted-foreground text-xs md:text-sm">
                    After joining as an intern, I was offered a full time job in Resto Brain
                    where I continued working on the advanced frontend of the
                    dashbaords.
                </p>

                <Separator className="my-4 md:my-6 " />

                <div className="flex flex-wrap items-center gap-4">
                    <span className="flex gap-2 items-end ">
                        <SimpleIcon icon={siTypescript} />
                    </span>
                    <span className="flex gap-2 items-end ">
                        <SimpleIcon icon={siReact} />
                    </span>
                    <span className="flex gap-2 items-end  ">
                        <SimpleIcon icon={siTanstack} />
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
                                    src="https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/calendar%20(1).webp"
                                    alt="Calendar"
                                    className="w-full rounded-[7px] object-cover"
                                />
                                <img
                                    src="https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/dashboard-2.webp"
                                    alt="Todo Dashboard"
                                    className="w-full rounded-[7px] object-cover"
                                />
                                <img
                                    src="https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Portfolio/dashboard-1.webp"
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
                                    Developed and maintained reusable react components
                                    for production admin and client dashboards.
                                </li>
                                <li>
                                    Optimized server-state management with TanStack Query,
                                    implementing query caching, stale-time configuration, and
                                    cache invalidation to reduce redundant API requests.
                                </li>
                                <li>
                                    Built dashboard routes and data-driven pages using
                                    TanStack Router and TanStack Query.
                                </li>
                                <li>
                                    Implemented complex forms with React Hook Form and Zod,
                                    including schema-based validation and type-safe form handling.
                                </li>
                                <li>
                                    Collaborated with backend developers to integrate APIs,
                                    resolve integration issues, and maintain consistent data contracts.
                                </li>
                                <li>
                                    Developed Cypress component and end-to-end tests to verify
                                    critical dashboard workflows and UI behavior.
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
                                    Designing reusable component architectures and organizing
                                    frontend codebases for long-term maintainability.
                                </li>
                                <li>
                                    Managing server state, query caching, cache invalidation,
                                    and synchronization between client and server data.
                                </li>
                                <li>
                                    Building complex, type-safe forms with schema-driven validation
                                    and predictable form state management.
                                </li>
                                <li>
                                    Structuring applications with file-based routing, nested routes,
                                    and integrated data-fetching workflows.
                                </li>
                                <li>
                                    Writing maintainable component and end-to-end tests that
                                    validate real application workflows.
                                </li>
                                <li>
                                    Understanding the importance of API contracts and
                                    collaboration between frontend and backend teams.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
