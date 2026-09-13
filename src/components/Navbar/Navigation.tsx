import { FileUserIcon } from "lucide-react";
import { siGithub, siInstagram } from "simple-icons";
import { SimpleIcon } from "../Home/Skills";
import UnderlineWrapper from "../Home/UnderlineWrapper";
import NavigationTabs from "./NavigationTabs";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
    return (
        <nav className="sticky top-0 z-50 myNav px-4 py-4">
            <div className="grid grid-cols-2 lg:grid-cols-8 items-center">
                {/* Social links */}
                <div className="lg:col-span-2 flex justify-start items-center">
                    <div className="flex gap-3 md:gap-4 items-center bg-background px-4 border-2 border-primary/30 py-2 rounded-3xl">
                        <UnderlineWrapper
                            href="https://www.linkedin.com/in/pranish-chaulagain-0a4833300/"
                            className="flex items-center"
                        >
                            <span className="text-base md:text-2xl text-primary/60 font-extrabold">
                                in
                            </span>
                        </UnderlineWrapper>

                        <UnderlineWrapper
                            href="https://gqtuuqsgkyffgcpbfltk.supabase.co/storage/v1/object/public/Resume/Pranish%20Chaulagain%20CV.pdf"
                            className="flex items-center"
                        >
                            <FileUserIcon className="size-4 md:size-6" color="gray" />
                        </UnderlineWrapper>

                        <UnderlineWrapper
                            href="https://github.com/Nika-commits/"
                            className="flex items-center"
                        >
                            <SimpleIcon
                                icon={siGithub}
                                className="size-4"
                                overrideColor="gray"
                            />
                        </UnderlineWrapper>

                        <UnderlineWrapper
                            href="https://www.instagram.com/_pranisshh/"
                            className="flex items-center"
                        >
                            <SimpleIcon
                                icon={siInstagram}
                                className="size-4"
                                overrideColor="gray"
                            />
                        </UnderlineWrapper>
                    </div>
                </div>

                {/* Desktop navigation */}
                <div className="hidden lg:col-span-4 lg:flex justify-center items-center">
                    <NavigationTabs />
                </div>

                {/* Theme */}
                <div className="social-links lg:col-span-2 flex justify-end items-center">
                    <ThemeToggle />
                </div>
            </div>

            {/* Mobile navigation */}
            <div className="lg:hidden">
                <NavigationTabs />
            </div>
        </nav>
    );
}
