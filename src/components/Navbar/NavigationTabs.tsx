"use client";
import { useLocation, useNavigate } from "@tanstack/react-router";
import {
	BriefcaseIcon,
	FolderKanbanIcon,
	HomeIcon,
	NotebookPenIcon,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GradientText } from "../animate-ui/primitives/texts/gradient";

const NAV_LINKS = [
	{ label: "Home", path: "/", icon: <HomeIcon className="size-4 shrink-0" /> },
	{
		label: "Work",
		path: "/work",
		icon: <BriefcaseIcon className="size-4 shrink-0" />,
	},
	{
		label: "Projects",
		path: "/projects",
		icon: <FolderKanbanIcon className="size-4 shrink-0" />,
	},
	{
		label: "Blogs",
		path: "/blogs",
		icon: <NotebookPenIcon className="size-4 shrink-0" />,
	},
];

const PATHS = NAV_LINKS.map((l) => l.path);

export default function NavigationTabs() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	return (
		<div className="flex fixed items-center justify-center bottom-[2dvh] lg:static myNav">
			<Tabs
				value={pathname}
				className="w-full bg-background border-2 border-primary/30 rounded-3xl"
			>
				<TabsList className="p-2 gap-6 rounded-3xl">
					{NAV_LINKS.map(({ label, path, icon }) => {
						const isActive = pathname === path;

						return (
							<TabsTrigger
								key={label}
								value={path}
								className="h-9 gap-1.5 rounded-3xl cursor-pointer border-2 border-secondary  "
								onClick={() => {
									const currentIndex = PATHS.indexOf(pathname);
									const nextIndex = PATHS.indexOf(path);
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
							>
								{icon}
								{isActive && (
									<GradientText
										// gradient="var(--gradient-primary)"
										text={label}
										className="text-sm font-medium whitespace-nowrap"
									/>
								)}
							</TabsTrigger>
						);
					})}
				</TabsList>
			</Tabs>
		</div>
	);
}
