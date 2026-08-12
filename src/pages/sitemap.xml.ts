import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

const staticPaths = ["/", "/notes/", "/projects/", "/experiences/", "/about/"];

const escapeXml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
const toDate = (date: Date) => date.toISOString().slice(0, 10);

export const GET: APIRoute = async ({ site }) => {
  const [notes, projects, experiences] = await Promise.all([
    getCollection("notes", ({ data }) => !data.draft),
    getCollection("projects", ({ data }) => !data.draft),
    getCollection("experiences", ({ data }) => !data.draft),
  ]);
  const baseUrl = site ?? new URL("https://max-ji64.github.io");
  const pages = [
    ...staticPaths.map((path) => ({ path, lastmod: undefined as Date | undefined })),
    ...notes.map((entry) => ({ path: `/notes/${entry.id}/`, lastmod: entry.data.updatedAt ?? entry.data.publishedAt })),
    ...projects.map((entry) => ({ path: `/projects/${entry.id}/`, lastmod: entry.data.updatedAt ?? entry.data.publishedAt })),
    ...experiences.map((entry) => ({ path: `/experiences/${entry.id}/`, lastmod: entry.data.endedAt ?? entry.data.startedAt })),
  ];
  const urls = pages.map(({ path, lastmod }) => `<url><loc>${escapeXml(new URL(path, baseUrl).href)}</loc>${lastmod ? `<lastmod>${toDate(lastmod)}</lastmod>` : ""}</url>`).join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
