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
                "text-base md:text-xl lg:text-2xl text-left font-extrabold tracking-normal",
                className,
            )}
            neon
            text={text}
        />
    );
}
