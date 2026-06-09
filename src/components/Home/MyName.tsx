import { useRef } from "react";
import { Click } from "../animate-ui/primitives/effects/click";
import { GradientText } from "../animate-ui/primitives/texts/gradient";
import {
	TypingText,
	TypingTextCursor,
} from "../animate-ui/primitives/texts/typing";

const texts = [
	"Full-Stack Software Engineer 👨🏽‍💻 ",
	"Specializing In Frontend 🌐 ",
	"Focused On Performance ⚡ ",
	"And Clean Architecture ⚙️ ",
];

interface MorphingTextDemoProps {
	loop: boolean;
	holdDelay: number;
}

export const MyName = ({ loop, holdDelay }: MorphingTextDemoProps) => {
	const scope = useRef<HTMLDivElement>(null);
	return (
		<div ref={scope} className="flex flex-col items-start ">
			<Click scope={scope} variant={"ring"} color="currentColor">
				<div className="flex flex-col items-start gap-1 px-4">
					<GradientText
						key={`${loop}-${holdDelay}`}
						className="text-3xl md:text-4xl lg:text-5xl text-left font-extrabold tracking-normal cursor-pointer select-none"
						text="Pranish Chaulagain"
						gradient="linear-gradient(135deg, #6ee7b7 0%, #34d399 20%, #10b981 50%, #059669 80%, #6ee7b7 100%)"
						neon
					/>
					<text className="flex justify-start">
						<TypingText
							className="text-base md:text-lg lg:text-xl font-medium tracking-wide text-muted-foreground cursor-pointer select-none"
							text={texts}
							loop={loop}
						>
							<TypingTextCursor />
						</TypingText>
					</text>
				</div>
			</Click>
		</div>
	);
};
