import { z, defineCollection } from 'astro:content';
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
const newsPosts = defineCollection({ schema: newsSchema });
const exhibitions = defineCollection({ schema: exhibitionSchema });
export type ExhibitionSchema = z.infer<typeof exhibitionSchema>;
export type NewsSchema = z.infer<typeof newsSchema>;
const collection = defineCollection({
	schema: z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		date: z.any().optional(),
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
	news: newsPosts,
	exhibitions
};
