import { createFileRoute, Link } from "@tanstack/react-router";
import { allPosts } from "content-collections";
import GlobalGradientText from "#/components/Global/GLobalGradientText";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Separator } from "#/components/ui/separator";

export const Route = createFileRoute("/blogs/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<div className="flex flex-col items-start gap-1 md:gap-2">
				<GlobalGradientText text="My Blogs" />

				<p className="text-base md:text-lg font-bold tracking-wide text-muted-foreground">
					A Glimpse inside my mind. 💭
				</p>
			</div>

			<Separator className="my-4 md:my-6" />

			<div className="flex flex-col space-y-8">
				{allPosts.map((post) => (
					<Link
						key={post._meta.fileName}
						to="/blogs/$blogId"
						params={{
							blogId: post._meta.fileName,
						}}
					>
						<Card key={post._meta.fileName}>
							<CardHeader>
								<CardTitle className="flex items-center gap-14">
									<span className="flex-1">{post.title}</span>
									<div className="text-sm shrink-0 text-muted-foreground flex justify-end">
										<span className="">
											{post.date.toLocaleDateString("en-us", {
												year: "numeric",
												month: "short",
												day: "numeric",
											})}
										</span>
									</div>
								</CardTitle>
								<CardDescription>{post.summary}</CardDescription>
							</CardHeader>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
