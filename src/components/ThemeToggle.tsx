import { cn } from "@/lib/utils";
import { MoonIcon, SunMediumIcon } from "lucide-react";
import { Switch as SwitchPrimitive } from "radix-ui";
import * as React from "react";

const Switch = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & {
		icon?: React.ReactNode;
		thumbClassName?: string;
	}
>(({ className, icon, thumbClassName, ...props }, ref) => (
	<SwitchPrimitive.Root
		className={cn(
			"peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
			className,
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitive.Thumb
			className={cn(
				"pointer-events-none flex h-4 w-4 items-center justify-center rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
				thumbClassName,
			)}
		>
			{icon ? icon : null}
		</SwitchPrimitive.Thumb>
	</SwitchPrimitive.Root>
));

function applyTheme(isDark: boolean) {
	const root = document.documentElement;

	root.classList.remove("light", "dark");
	root.classList.add(isDark ? "dark" : "light");

	root.style.colorScheme = isDark ? "dark" : "light";
}

export function ThemeToggle() {
	const [isDark, setIsDark] = React.useState(true); // default DARK

	// set correct theme after mount (no flicker)
	React.useEffect(() => {
		const prefersLight = window.matchMedia(
			"(prefers-color-scheme: light)",
		).matches;

		const initialIsDark = !prefersLight;

		setIsDark(initialIsDark);
		applyTheme(initialIsDark);
	}, []);

	function toggle() {
		setIsDark((prev) => {
			const next = !prev;
			applyTheme(next);
			return next;
		});
	}

	return (
		<Switch
			checked={isDark}
			className="h-7 w-12"
			icon={
				isDark ? (
					<MoonIcon className="h-4 w-4" />
				) : (
					<SunMediumIcon className="h-4 w-4" />
				)
			}
			onCheckedChange={toggle}
			thumbClassName=" duration-300 ease-in-out data-[state=checked]:translate-x-6"
		/>
	);
}
