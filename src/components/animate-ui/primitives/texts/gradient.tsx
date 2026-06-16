"use client";

import { motion, type Transition } from "motion/react";
import type * as React from "react";

type GradientTextProps = Omit<React.ComponentProps<"span">, "children"> & {
	text: string;
	gradient?: string;
	neon?: boolean;
	transition?: Transition;
};

function GradientText({
	text,
	style,
	// gradient = "linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)",
	// gradient = "linear-gradient(90deg, #111111 0%, #c4c4c4 20%, #f2f2f2 50%, #b3b3b3 80%, #111111 100%)",
	gradient = "var(--hero-gradient)",
	neon = true,
	transition = { duration: 24, repeat: Infinity, ease: "linear" },
	...props
}: GradientTextProps) {
	const baseStyle: React.CSSProperties = {
		backgroundImage: gradient,
		margin: 0,
		color: "transparent",
		backgroundClip: "text",
		backgroundSize: "700% 100%",
		backgroundPosition: "0% 0%",
	};

	return (
		<span
			data-slot="gradient-text"
			style={{ position: "relative", display: "inline-block", ...style }}
			{...props}
		>
			<motion.span
				style={baseStyle}
				initial={{ backgroundPosition: "0% 0%" }}
				animate={{ backgroundPosition: "500% 100%" }}
				transition={transition}
			>
				{text}
			</motion.span>

			{neon && (
				<motion.span
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						mixBlendMode: "plus-lighter",
						filter: "blur(10px)",
						...baseStyle,
					}}
					initial={{ backgroundPosition: "0% 0%" }}
					animate={{ backgroundPosition: "500% 100%" }}
					transition={transition}
				>
					{text}
				</motion.span>
			)}
		</span>
	);
}

export { GradientText, type GradientTextProps };
