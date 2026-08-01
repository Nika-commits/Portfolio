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
        <div className="flex flex-col items-start md:items-center justify-center gap-4 md:gap-6">
            <GlobalGradientText text="Pranish Chaulagain" />
            <QuickLinks />
        </div>
    );
};
