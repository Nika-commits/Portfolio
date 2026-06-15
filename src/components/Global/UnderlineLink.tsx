import { Link } from "@tanstack/react-router";
import { cn } from "#/lib/utils";

export const UnderlineLink = ({
	children,
	to,
	className,
}: {
	children: React.ReactNode;
	to: string;
	className?: string;
}) => {
	return (
		<Link
			to={to}
			className={cn(
				"relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
				className,
			)}
		>
			{children}
		</Link>
	);
};
