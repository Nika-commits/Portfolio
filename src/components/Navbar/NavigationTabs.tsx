import { useLocation, useNavigate } from "@tanstack/react-router";
import { Tabs, TabsList, TabsTab } from "../animate-ui/components/base/tabs";
import { GradientText } from "../animate-ui/primitives/texts/gradient";

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

	return (
		<div className="flex fixed bottom-[3dvh] lg:static ">
			{
				<Tabs
					defaultValue={"/"}
					value={pathname}
					className="w-full bg-background border-2 border-primary/30 rounded-3xl"
				>
					<TabsList className="p-2 gap-2 md:gap-6 bg-secondary rounded-3xl">
						{Object.entries(NavLinks).map(([label, path]) => (
							<TabsTab
								className="rounded-3xl"
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
								<GradientText
									gradient="linear-gradient(135deg, #6ee7b7 0%, #34d399 20%, #10b981 50%, #059669 80%, #6ee7b7 100%)"
									text={label}
								/>
							</TabsTab>
						))}
					</TabsList>
				</Tabs>
			}
		</div>
	);
}
