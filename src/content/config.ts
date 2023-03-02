import { z, defineCollection } from 'astro:content';
const collection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.string(),
    meta1: z.string(),
    meta2: z.string(),
    gallery: z.string(),
    exhibition: z.string(),
    image: z.string(),
    thumbnail: z.string(),
    related: z.array(z.string())
  })
})
export const collections = {
  'projects': collection,
};
