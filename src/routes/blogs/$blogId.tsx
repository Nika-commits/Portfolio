import { createFileRoute, Link } from "@tanstack/react-router";
import { allPosts } from "content-collections";
import { MoveLeftIcon } from "lucide-react";
import { Markdown } from "#/components/Blogs/markdown";
import GlobalGradientText from "#/components/Global/GLobalGradientText";
import { Button } from "#/components/ui/button";
import { Separator } from "#/components/ui/separator";

export const Route = createFileRoute("/blogs/$blogId")({
	component: RouteComponent,
	loader: ({ params }) => {
		const blog = allPosts.find((post) => post.slug === params.blogId);
		return blog;
	},
});

function RouteComponent() {
	const blog = Route.useLoaderData();
	if (!blog) return <div>Blog not found</div>;
	return (
		<div>
			<div className="flex flex-col space-y-4">
				<div className="flex items-center gap-6">
					<Link to="/blogs">
						<Button
							type="button"
							variant={"default"}
							size={"icon-lg"}
							className="rounded-full"
						>
							<MoveLeftIcon />
						</Button>
					</Link>
					<GlobalGradientText text={blog.title} />
				</div>
				<div className="flex justify-between ">
					<span>{blog.author}</span>
					<span className="text-sm text-muted-foreground">
						{blog.date.toLocaleDateString("en-us", {
							year: "numeric",
							month: "short",
							day: "numeric",
						})}
					</span>
				</div>
			</div>
			<Separator className="my-4 md:my-6" />
			<div className="prose dark:prose-invert">
				<Markdown content={blog.content} />
			</div>
		</div>
	);
}
