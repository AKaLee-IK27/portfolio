import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
});

const blogEn = defineCollection({
  loader: glob({ base: './src/content/blog/en', pattern: '**/*.md' }),
  schema: baseSchema,
});

const blogVi = defineCollection({
  loader: glob({ base: './src/content/blog/vi', pattern: '**/*.md' }),
  schema: baseSchema,
});

export const collections = { blog: blogEn, 'blog-vi': blogVi };
