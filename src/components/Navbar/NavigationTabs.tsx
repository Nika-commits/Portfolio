"use client";
import { useLocation, useNavigate } from "@tanstack/react-router";
import {
	BriefcaseIcon,
	FolderKanbanIcon,
	HomeIcon,
	NotebookPenIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GradientText } from "../animate-ui/primitives/texts/gradient";

const NavLinks: Record<string, { path: string; icon: React.ReactNode }> = {
	Home: { path: "/", icon: <HomeIcon className="size-4 shrink-0" /> },
	Projects: {
		path: "/projects",
		icon: <FolderKanbanIcon className="size-4 shrink-0" />,
	},
	Blogs: {
		path: "/blogs",
		icon: <NotebookPenIcon className="size-4 shrink-0" />,
	},
	Work: { path: "/work", icon: <BriefcaseIcon className="size-4 shrink-0" /> },
};

export default function NavigationTabs() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const paths = Object.values(NavLinks).map((v) => v.path);

	return (
		<div className="flex fixed bottom-[3dvh] lg:static z-99">
			<Tabs
				value={pathname}
				className="w-full bg-background border-2 border-primary/30 rounded-3xl"
			>
				<TabsList className="p-2 gap-4 md:gap-6 bg-secondary rounded-3xl  pacity-100 data-[state=inactive]:opacity-100 ">
					{Object.entries(NavLinks).map(([label, { path, icon }]) => {
						const isActive = pathname === path;

						return (
							<motion.div
								key={label}
								className="flex h-9 w-full items-center justify-center gap-1.5 px-2 opacity-100"
								onClick={() => {
									const currentIndex = paths.indexOf(pathname);
									const nextIndex = paths.indexOf(path);
									navigate({
										to: path,
										viewTransition: {
											types:
												currentIndex > nextIndex
													? ["slide-right"]
													: ["slide-left"],
										},
									});
								}}
								initial={false}
								animate={{ width: isActive ? 110 : 36 }}
								transition={{ type: "spring", stiffness: 400, damping: 30 }}
							>
								<TabsTrigger value={path} asChild>
									<motion.div className="flex h-9 w-full items-center justify-center ">
										{icon}
										<AnimatePresence initial={false}>
											{isActive && (
												<motion.span
													className="overflow-hidden whitespace-nowrap"
													initial={{ opacity: 0, width: 0 }}
													animate={{ opacity: 1, width: "auto" }}
													exit={{ opacity: 0, width: 0 }}
													transition={{ duration: 0.25, ease: "easeOut" }}
												>
													<GradientText
														gradient="linear-gradient(135deg, #6ee7b7 0%, #34d399 20%, #10b981 50%, #059669 80%, #6ee7b7 100%)"
														text={label}
														className="text-sm font-medium"
													/>
												</motion.span>
											)}
										</AnimatePresence>
									</motion.div>
								</TabsTrigger>
							</motion.div>
						);
					})}
				</TabsList>
			</Tabs>
		</div>
	);
}
