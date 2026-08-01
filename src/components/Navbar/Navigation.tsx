import { siGithub, siInstagram } from "simple-icons";
import { SimpleIcon } from "../Home/Skills";
import UnderlineWrapper from "../Home/UnderlineWrapper";
import NavigationTabs from "./NavigationTabs";
import { ThemeToggle } from "./ThemeToggle";

export default function Navigation() {
    return (
        <nav className="grid grid-cols-8 items-center py-4 sticky top-0 z-50 myNav">
            <div className="col-span-2 flex justify-start items-center">
                <div className="social-links grid grid-cols-3 gap-5 items-end ">
                    <UnderlineWrapper
                        href="https://www.linkedin.com/in/pranish-chaulagain-0a4833300/"
                        className="flex flex-col items-center"
                    >
                        <span className="text-xl md:text-xl font-extrabold align-bottom">
                            in
                        </span>
                        {/*<span>LinkedIn</span>*/}
                    </UnderlineWrapper>

                    <UnderlineWrapper
                        href="https://github.com/Nika-commits/"
                        className="flex flex-col self-center items-center"
                    >
                        <SimpleIcon
                            icon={siGithub}
                            className="size-5"
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
                            className="size-5 "
                            overrideColor="gray"
                        />
                        {/*<span>Instagram</span>*/}
                    </UnderlineWrapper>
                </div>
            </div>

            <div className="col-span-4 flex justify-center items-center">
                <NavigationTabs />
            </div>

            <div className="col-span-2 flex justify-end items-center social-links">
                <ThemeToggle />
            </div>
        </nav>
    );
}
