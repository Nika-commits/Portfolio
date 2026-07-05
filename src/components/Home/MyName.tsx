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
		<div className="flex flex-row items-center gap-2 justify-between cursor-pointer select-none">
			<div>
				<div className="flex flex-col items-start gap-1 md:gap-2">
					<GlobalGradientText text="Pranish Chaulagain" />
					<span className="flex justify-start">
						<TypingText
							className="text-base md:text-lg font-bold tracking-normal text-muted-foreground "
							text={texts}
							loop
						>
							<TypingTextCursor />
						</TypingText>
					</span>
				</div>
			</div>
			{/*<div className="flex h-full">
				<img src="/Icons/me.webp" alt="" className="w-28 rounded-full h-28 object-contain" />
			</div>*/}
		</div>
	);
};
