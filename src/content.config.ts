import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
const newsSchema = z.object({
	title: z.string(),
	subtitle: z.string().optional(),
	address: z.array(z.string()).optional(),
	date: z.string(),
	link: z.array(z.string()).optional(),
	archive: z.boolean().optional()
});
const exhibitionSchema = z.object({
	showing: z.enum(['PAST', 'NOW', 'SOON']).optional(),
	title: z.string(),
	description: z.string().optional(),
	venue: z.string(),
	location: z.string(),
	date: z.string(),
	from: z.string(),
	to: z.string(),
	tickets: z.string().optional(),
	url: z.string()
});
export type ExhibitionSchema = z.infer<typeof exhibitionSchema>;
export type NewsSchema = z.infer<typeof newsSchema>;
const news = defineCollection({
	loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
	schema: () => newsSchema
});
// const exhibitions = defineCollection({
// 	loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
// 	schema: () => exhibitionSchema
// });
const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string().optional(),
			date: z.string().optional(),
			meta1: z.string().nullable().optional(),
			meta2: z.string().nullable().optional(),
			description: z.string().optional(),
			gallery: z.string().optional(),
			exhibition: z.string().optional(),
			thumbnail: z.string(),
			related: z.array(z.string()).optional(),
			category: z.array(z.string())
		})
});

export const collections = {
	projects
	// news
	// exhibitions
};
