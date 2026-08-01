// import {
// 	TypingText,
// 	TypingTextCursor,
// } from "../animate-ui/primitives/texts/typing";
import GlobalGradientText from "../Global/GLobalGradientText";
import Me from "./Me";
import QuickLinks from "./QuickLinks";

// const texts = [
//     "Specializing In Frontend 🌐 ",
//     "Focused On Performance ⚡ ",
//     "And Clean Architecture ⚙️ ",
// ];

export const MyName = () => {
    return (
        <div className="flex flex-row items-start md:items-start justify-start gap-6 md:gap-12">
            <Me />
            <div className="flex flex-col items-start gap-2 md:gap-6">
                <GlobalGradientText text="Pranish Chaulagain" />
                <QuickLinks />
            </div>
        </div>
    );
};
