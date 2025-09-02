import { z, defineCollection } from 'astro:content';
const newsSchema = z.object({
	title: z.string(),
	subtitle: z.string().optional(),
	address: z.array(z.string()).optional(),
	date: z.string(),
	link: z.array(z.string()),
	archive: z.boolean().optional()
});
const newsPosts = defineCollection({ schema: newsSchema });
export type NewsSchema = z.infer<typeof newsSchema>;
const collection = defineCollection({
	schema: z.object({
		title: z.string(),
		subtitle: z.string(),
		date: z.any(),
		meta1: z.string().nullable().optional(),
		meta2: z.string().nullable().optional(),
		gallery: z.string().optional(),
		exhibition: z.string().optional(),
		thumbnail: z.string(),
		related: z.array(z.string()),
		category: z.array(z.string())
	})
});
export const collections = {
	projects: collection,
	news: newsPosts
};
