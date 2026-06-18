import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";
import { z } from "zod";


const blogSchema = z.object({
  title: z.string(),
  summary: z.string(),
  date: z.coerce.date(),
  author: z.string(),
  readingTime: z.number().optional(),
})

const blogs = defineCollection({
  name: 'posts',
  directory: 'content/posts',
  include: '*.md',
  schema: blogSchema,
  transform: async (document, context) => {
    const html = await compileMarkdown(context, document)
    return {
      ...document,
      slug: document._meta.fileName,
      author: document.author,
      html,
    }
  },
})

export default defineConfig({
  collections: [blogs],
});
