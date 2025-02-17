import { z, defineCollection } from 'astro:content';
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
    category: z.array(z.string()),
  })
})
export const collections = {
  'projects': collection,
};
