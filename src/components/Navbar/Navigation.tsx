import { FileUserIcon } from "lucide-react";
import { siGithub, siInstagram } from "simple-icons";
import { SimpleIcon } from "../Home/Skills";
import UnderlineWrapper from "../Home/UnderlineWrapper";
import NavigationTabs from "./NavigationTabs";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
    return (
        <nav className="grid grid-cols-8 items-center py-4 sticky top-0 z-50 myNav">
            <div className="col-span-6 lg:col-span-2 flex justify-start items-center">
                <div className="social-links grid grid-cols-4 gap-3 items-end ">
                    <UnderlineWrapper
                        href="https://www.linkedin.com/in/pranish-chaulagain-0a4833300/"
                        className="flex flex-col items-center"
                    >
                        <span className="text-xl text-primary/60 md:text-xl font-extrabold align-bottom">
                            in
                        </span>
                        {/*<span>LinkedIn</span>*/}
                    </UnderlineWrapper>

                    <UnderlineWrapper
                        href="https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Resume/Pranish%20Chaulagain%20CV.pdf"
                        className="flex flex-col self-center items-center"
                    >
                        {/*<span className="text-xl text-primary/60 font-extrabold align-bottom">
                            CV
                        </span>*/}
                        <FileUserIcon
                            className="size-5 md:size-6"
                            color="gray" />
                    </UnderlineWrapper>

                    <UnderlineWrapper
                        href="https://github.com/Nika-commits/"
                        className="flex flex-col self-center items-center"
                    >
                        <SimpleIcon
                            icon={siGithub}
                            className="size-4"
                            overrideColor="gray"
                        />
                        {/*<span>Github</span>*/}
                    </UnderlineWrapper>

                    <UnderlineWrapper
                        href="https://www.instagram.com/_pranisshh/"
                        className="flex flex-col self-center items-center"
                    >
                        <SimpleIcon
                            icon={siInstagram}
                            className="size-4"
                            overrideColor="gray"
                        />
                        {/*<span>Instagram</span>*/}
                    </UnderlineWrapper>
                </div>
            </div>

            <div className="col-span-0 lg:col-span-4 flex justify-center items-center">
                <NavigationTabs />
            </div>

            <div className="col-span-1 lg:col-span-2 flex justify-end items-center social-links">
                <ThemeToggle />
            </div>
        </nav>
    );
}
