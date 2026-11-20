import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
  }),
});

const books = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/books",
  }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(["novel", "essay"]),
    covers: z.array(z.string()),
    authors: z.array(z.string()),
    publish_at: z.coerce.date(),
    publisher: z.string(),
    isbn: z.string().optional(),
    link: z.string(),
  }),
});

export const collections = { pages, books };
