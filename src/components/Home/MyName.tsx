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
        <div className="flex flex-row h-full items-start md:items-center justify-start gap-6 md:gap-12">
            <div>
                {/*<img src="/Icons/me.webp" alt="" className="w-48 rounded h-48 object-contain" />*/}

                <Me />
            </div>
            <div className="flex flex-col items-start gap-2 md:gap-6">
                <GlobalGradientText text="Pranish Chaulagain" />
                <QuickLinks />
            </div>
        </div>
    );
};
