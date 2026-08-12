import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const notes = defineCollection({
  loader: glob({
    base: "./src/content/notes",
    pattern: "**/*.md",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    section: z.enum(["ADP", "Python", "SQL"]),
    keywords: z.array(z.string()).max(8).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.md",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.string(),
    period: z.string(),
    role: z.string(),
    stack: z.array(z.string()).default([]),
    outcome: z.string(),
    keywords: z.array(z.string()).max(8).default([]),
    thumbnail: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    repository: z.url().optional(),
    demo: z.url().optional(),
  }),
});

const experiences = defineCollection({
  loader: glob({
    base: "./src/content/experiences",
    pattern: "**/*.md",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    organization: z.string(),
    kind: z.string(),
    startedAt: z.coerce.date(),
    endedAt: z.coerce.date().optional(),
    roles: z.array(z.string()).default([]),
    keywords: z.array(z.string()).max(8).default([]),
    thumbnail: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes, projects, experiences };
