import { cn } from "#/lib/utils";

export default function UnderlineWrapper({
	children,
	href,
	className,
}: {
	children: React.ReactNode;
	href: string;
	className?: string;
}) {
	return (
		<a
			target="_blank"
			href={href}
			className={cn(
				"relative text-xs md:text-xs text-muted-foreground after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
				className,
			)}
		>
			{children}
		</a>
	);
}
