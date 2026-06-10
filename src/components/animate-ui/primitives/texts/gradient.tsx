// "use client";

// import { motion, type Transition } from "motion/react";
// import type * as React from "react";

// type GradientTextProps = Omit<React.ComponentProps<"span">, "children"> & {
// 	text: string;
// 	gradient?: string;
// 	neon?: boolean;
// 	transition?: Transition;
// };

// function GradientText({
// 	text,
// 	style,
// 	gradient = "linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)",
// 	neon = false,
// 	transition = { duration: 50, repeat: Infinity, ease: "linear" },
// 	...props
// }: GradientTextProps) {
// 	const baseStyle: React.CSSProperties = {
// 		backgroundImage: gradient,
// 		margin: 0,
// 		color: "transparent",
// 		backgroundClip: "text",
// 		backgroundSize: "700% 100%",
// 		backgroundPosition: "0% 0%",
// 	};

// 	return (
// 		<span
// 			data-slot="gradient-text"
// 			style={{ position: "relative", display: "inline-block", ...style }}
// 			{...props}
// 		>
// 			<motion.span
// 				style={baseStyle}
// 				initial={{ backgroundPosition: "0% 0%" }}
// 				animate={{ backgroundPosition: "500% 100%" }}
// 				transition={transition}
// 			>
// 				{text}
// 			</motion.span>

// 			{neon && (
// 				<motion.span
// 					style={{
// 						position: "absolute",
// 						top: 0,
// 						left: 0,
// 						mixBlendMode: "plus-lighter",
// 						filter: "blur(8px)",
// 						...baseStyle,
// 					}}
// 					initial={{ backgroundPosition: "0% 0%" }}
// 					animate={{ backgroundPosition: "500% 100%" }}
// 					transition={transition}
// 				>
// 					{text}
// 				</motion.span>
// 			)}
// 		</span>
// 	);
// }

// export { GradientText, type GradientTextProps };

"use client";

import * as React from "react";

type GradientTextProps = Omit<React.ComponentProps<"span">, "children"> & {
	text: string;
	gradient?: string;
	neon?: boolean;
	duration?: number; // seconds
};

const styleId = "gradient-text-keyframes";

function injectKeyframes() {
	if (typeof document === "undefined") return;
	if (document.getElementById(styleId)) return;
	const style = document.createElement("style");
	style.id = styleId;
	style.textContent = `
    @keyframes gradient-shift {
      0%   { background-position: 0% 0%; }
      100% { background-position: 500% 100%; }
    }
  `;
	document.head.appendChild(style);
}

function GradientText({
	text,
	style,
	gradient = "linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50%, #a855f7 80%, #3b82f6 100%)",
	neon = false,
	duration = 50,
	...props
}: GradientTextProps) {
	React.useEffect(() => {
		injectKeyframes();
	}, []);

	const baseStyle: React.CSSProperties = {
		backgroundImage: gradient,
		backgroundSize: "700% 100%",
		backgroundClip: "text",
		color: "transparent",
		animation: `gradient-shift ${duration}s linear infinite`,
		margin: 0,
	};

	return (
		<span
			data-slot="gradient-text"
			style={{ position: "relative", display: "inline-block", ...style }}
			{...props}
		>
			<span style={baseStyle}>{text}</span>

			{neon && (
				<span
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						mixBlendMode: "plus-lighter",
						filter: "blur(8px)",
						...baseStyle,
					}}
				>
					{text}
				</span>
			)}
		</span>
	);
}

export { GradientText, type GradientTextProps };
