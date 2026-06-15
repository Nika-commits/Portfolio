import { useRef } from "react";
import { Click } from "../animate-ui/primitives/effects/click";
import {
	TypingText,
	TypingTextCursor,
} from "../animate-ui/primitives/texts/typing";
import GlobalGradientText from "../Global/GLobalGradientText";

const texts = [
	"Full-Stack Software Engineer 💻 ",
	"Specializing In Frontend 🌐 ",
	"Focused On Performance ⚡ ",
	"And Clean Architecture ⚙️ ",
];

interface MorphingTextDemoProps {
	loop: boolean;
	holdDelay: number;
}

export const MyName = ({ loop }: MorphingTextDemoProps) => {
	const scope = useRef<HTMLDivElement>(null);
	return (
		<div
			ref={scope}
			className="flex flex-col items-start cursor-pointer select-none"
		>
			<Click
				scope={scope}
				variant={"crosshair"}
				color="currentColor"
				size={160}
			>
				<div className="flex flex-col items-start gap-1 md:gap-2">
					<GlobalGradientText text="Pranish Chaulagain" />
					<span className="flex justify-start">
						<TypingText
							className="text-base md:text-lg lg:text-xl font-bold tracking-wide text-muted-foreground "
							text={texts}
							loop={loop}
						>
							<TypingTextCursor />
						</TypingText>
					</span>
				</div>
			</Click>
		</div>
	);
};
