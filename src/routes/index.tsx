import Introduction from "#/components/Home/Introduction";
import { MyName } from "#/components/Home/MyName";
import Quotes from "#/components/Home/Quotes.tsx";
import Skills from "#/components/Home/Skills";
import { Separator } from "#/components/ui/separator";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
    return (
        <main className="flex flex-col ">
            <Link to="/work" preload="viewport" />
            <Link to="/projects" preload="viewport" />
            <Link to="/blogs" preload="viewport" />

            <MyName />

            <Separator className="my-4 md:my-6" />

            <Introduction />

            <Separator className="my-4 md:my-6 " />

            <Skills />

            <Separator className="my-12 md:my-12 " />

            <Quotes />

            <Separator className="my-12 md:my-12" />

        </main>
    );
}
