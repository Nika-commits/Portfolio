import ReactMarkdown from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
	content: string;
	className?: string;
};

export function Markdown({ content, className }: MarkdownProps) {
	return (
		<div className={className}>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[
					rehypeRaw,
					rehypeSlug,
					[
						rehypeAutolinkHeadings,
						{ behavior: "wrap", properties: { className: ["anchor"] } },
					],
				]}
				components={{
					img: ({ ...props }) => (
						<img
							{...props}
							loading="lazy"
							className="rounded-lg shadow-md"
							alt=""
						/>
					),
				}}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
}
