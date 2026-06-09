import { useRef } from "react";
import { MorphingText } from "@/components/animate-ui/primitives/texts/morphing";
import { Click } from "../animate-ui/primitives/effects/click";

const texts = [
	"Pranish Chaulagain",
	"Full-Stack Software Engineer",
	"Specializing in Frontend",
	"Focused on Performance ",
	"And Clean Architecture",
];

interface MorphingTextDemoProps {
	loop: boolean;
	holdDelay: number;
}

export const MorphingTextDemo = ({
	loop,
	holdDelay,
}: MorphingTextDemoProps) => {
	const scope = useRef<HTMLDivElement>(null);
	return (
		<div ref={scope} className="flex justify-center items-center py-14">
			<Click scope={scope} variant={"ripple"} color="currentColor">
				<MorphingText
					key={`${loop}-${holdDelay}`}
					className="text-5xl text-shadow-md text-primary font-extrabold  tracking-wide text-center cursor-pointer select-none py-2 px-4"
					text={texts}
					loop={loop}
					holdDelay={holdDelay}
				/>
			</Click>
		</div>
	);
};
