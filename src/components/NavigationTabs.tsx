import { useLocation, useNavigate } from "@tanstack/react-router";
import {
	Tabs,
	TabsList,
	TabsTrigger,
} from "@/components/animate-ui/components/animate/tabs";
import { TabsHighlightItem } from "./animate-ui/primitives/animate/tabs";

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
		<div className="fixed bottom-[3dvh] left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
			<Tabs onValueChange={(value) => navigate({ to: value })} value={pathname}>
				<TabsList>
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
