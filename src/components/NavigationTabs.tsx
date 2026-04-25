import {
	Tabs,
	TabsList,
	TabsTrigger,
} from "@/components/animate-ui/components/animate/tabs";
export default function NavigationTabs() {
	return (
		<div className="fixed bottom-[3dvh] left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
			{" "}
			<Tabs>
				<TabsList>
					<TabsTrigger value="account" id="account">
						Home
					</TabsTrigger>
					<TabsTrigger value="password" id="password">
						Projects
					</TabsTrigger>
					<TabsTrigger value="resume" id="resume">
						Resume
					</TabsTrigger>
					<TabsTrigger value="blogs" id="blogs">
						Blogs
					</TabsTrigger>
					<TabsTrigger value="work" id="work">
						Work
					</TabsTrigger>
				</TabsList>
			</Tabs>
		</div>
	);
}
