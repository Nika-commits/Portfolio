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

export const MyName = () => {
	return (
		<div className="flex flex-col items-start cursor-pointer select-none">
			<div className="flex flex-col items-start gap-1 md:gap-2">
				<GlobalGradientText text="Pranish Chaulagain" />
				<span className="flex justify-start">
					<TypingText
						className="text-base md:text-lg font-bold tracking-wide text-muted-foreground "
						text={texts}
						loop
					>
						<TypingTextCursor />
					</TypingText>
				</span>
			</div>
		</div>
	);
};
