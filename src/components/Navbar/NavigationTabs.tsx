import { useLocation, useNavigate } from "@tanstack/react-router";
import {
	Tabs,
	TabsList,
	TabsTrigger,
} from "@/components/animate-ui/components/animate/tabs";
import { TabsHighlightItem } from "../animate-ui/primitives/animate/tabs";

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
		<div className="flex fixed bottom-[3dvh] lg:static">
			<Tabs
				onValueChange={(value) => navigate({ to: value })}
				value={pathname}
				className="w-full bg-background border-2 border-primary/20 rounded"
			>
				<TabsList className="p-2 gap-2 md:gap-4 bg-secondary ">
					{Object.entries(NavLinks).map(([label, path]) => (
						<TabsHighlightItem key={path} value={path}>
							<TabsTrigger key={path} value={path}>
								{label}
							</TabsTrigger>
						</TabsHighlightItem>
					))}
				</TabsList>
			</Tabs>
		</div>
	);
}
