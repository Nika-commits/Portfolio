import { useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
	Tabs,
	TabsList,
	TabsTrigger,
} from "@/components/animate-ui/components/animate/tabs";

const NavLinks: Record<string, string> = {
	Home: "/",
	Projects: "/projects",
	Resume: "/resume",
	Blogs: "/blogs",
	Work: "/work",
};

export default function NavigationTabs() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className="flex fixed bottom-[3dvh] lg:static">
			{
				<Tabs
					value={pathname}
					className="w-full bg-background border-2 border-primary/20 rounded"
				>
					<TabsList className="p-2 gap-2 md:gap-4 bg-secondary">
						{Object.entries(NavLinks).map(([label, path]) => (
							<TabsTrigger
								key={label}
								value={path}
								onClick={() => {
									const currentIndex =
										Object.values(NavLinks).indexOf(pathname);
									const nextIndex = Object.values(NavLinks).indexOf(path);

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
								{label}
							</TabsTrigger>
						))}
					</TabsList>
				</Tabs>
			}
		</div>
	);
}
