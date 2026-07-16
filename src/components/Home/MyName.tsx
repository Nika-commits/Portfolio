// import {
// 	TypingText,
// 	TypingTextCursor,
// } from "../animate-ui/primitives/texts/typing";
import GlobalGradientText from "../Global/GLobalGradientText";
import QuickLinks from "./QuickLinks";

const texts = [
    "Specializing In Frontend 🌐 ",
    "Focused On Performance ⚡ ",
    "And Clean Architecture ⚙️ ",
];

export const MyName = () => {
    return (
        // <div className="flex flex-row items-center gap-2 justify-start cursor-pointer select-none">
        <div className="flex flex-col items-start md:items-center justify-center gap-4 md:gap-6">
            <GlobalGradientText text="Pranish Chaulagain" />
            {/*<span className="flex justify-start">*/}
            {/*<TypingText
                            className="text-base md:text-lg font-bold tracking-normal text-muted-foreground "
                            text={texts}
                            loop
                        >
                            <TypingTextCursor />
                        </TypingText>*/}

            {/*</span>*/}
            <QuickLinks />
        </div>
    );
};

{/*<div className="flex h-full">
                <img src="/Icons/me.webp" alt="" className="w-36 rounded h-36 object-cover" />
            </div>*/}
