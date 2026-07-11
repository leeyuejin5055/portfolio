import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.string(),
    client: z.string().optional(),
    role: z.string(),
    tools: z.array(z.string()),
    summary: z.string(),
    cover: z.string(),
    coverAlt: z.string(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
