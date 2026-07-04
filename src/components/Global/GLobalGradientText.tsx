import { cn } from "#/lib/utils";
import { GradientText } from "../animate-ui/primitives/texts/gradient";

interface GlobalGradientTextProps {
	className?: string;
	text: string;
}
export default function GlobalGradientText({
	className,
	text,
}: GlobalGradientTextProps) {
	return (
		<GradientText
			className={cn(
				"text-xl md:text-2xl lg:text-3xl text-left font-extrabold tracking-normal",
				className,
			)}
			// gradient="var(--gradient-primary)"
			neon
			text={text}
		/>
		// </motion.div>
	);
}

// gradient="linear-gradient(135deg, #6ee7b7 0%, #34d399 20%, #10b981 50%, #059669 80%, #6ee7b7 100%)"
