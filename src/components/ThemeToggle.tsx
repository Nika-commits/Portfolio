"use client";

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
Switch.displayName = SwitchPrimitive.Root.displayName;

type ThemeMode = "light" | "dark" | "auto";

function getInitialMode(): ThemeMode {
	if (typeof window === "undefined") {
		return "auto";
	}

	const stored = window.localStorage.getItem("theme");
	if (stored === "light" || stored === "dark" || stored === "auto") {
		return stored;
	}

	return "auto";
}

function applyThemeMode(mode: ThemeMode) {
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	const resolved = mode === "auto" ? (prefersDark ? "dark" : "light") : mode;

	document.documentElement.classList.remove("light", "dark");
	document.documentElement.classList.add(resolved);

	if (mode === "auto") {
		document.documentElement.removeAttribute("data-theme");
	} else {
		document.documentElement.setAttribute("data-theme", mode);
	}

	document.documentElement.style.colorScheme = resolved;
}

export function ThemeToggle() {
	const [mode, setMode] = React.useState<ThemeMode>("auto");

	React.useEffect(() => {
		const initialMode = getInitialMode();
		setMode(initialMode);
		applyThemeMode(initialMode);
	}, []);

	React.useEffect(() => {
		if (mode !== "auto") {
			return;
		}

		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => applyThemeMode("auto");

		media.addEventListener("change", onChange);
		return () => {
			media.removeEventListener("change", onChange);
		};
	}, [mode]);

	function toggleMode() {
		const nextMode: ThemeMode = mode === "light" ? "dark" : "light";
		setMode(nextMode);
		applyThemeMode(nextMode);
		window.localStorage.setItem("theme", nextMode);
	}

	return (
		<Switch
			checked={mode === "dark"}
			className="h-7 w-12"
			icon={
				mode === "dark" ? (
					<MoonIcon className="h-4 w-4" />
				) : (
					<SunMediumIcon className="h-4 w-4" />
				)
			}
			onCheckedChange={() => toggleMode()}
			thumbClassName=" duration-300 ease-in-out data-[state=checked]:translate-x-6"
		/>
	);
}
