import { parse as parseYaml } from 'yaml';
import { marked } from 'marked';
import categoriesRaw from '/content/design-categories.yml?raw';

// Each design project is a folder: content/_design/<slug>/index.md plus its images/GIFs/videos.
// Files in the folder are referenced by relative name (e.g. "cover.gif", "demo.mp4").

export interface DesignCategory {
  id: string;
  label: string;
  title?: string;
  description?: string;
}

export interface DesignProject {
  slug: string;
  title: string;
  category: string;
  type?: string;
  summary?: string;
  cover?: string;
  year?: string;
  role?: string;
  tools?: string;
  order?: number;
  draft: boolean;
  bodyHtml: string;
}

export const designCategories = (parseYaml(categoriesRaw) ?? []) as DesignCategory[];

// Folders starting with "_" are drafts: shown while running `npm run dev` (with a "Draft" badge),
// and left out of the production build entirely — text, images and videos.
// (import.meta.glob only accepts literal patterns and options, so they are written out each time.)

const sources: Record<string, string> = {
  ...import.meta.glob(['/content/_design/*/index.md', '!/content/_design/_*/index.md'], { query: '?raw', import: 'default', eager: true }),
  ...(import.meta.env.DEV ? import.meta.glob('/content/_design/_*/index.md', { query: '?raw', import: 'default', eager: true }) : {}),
};
const assets: Record<string, string> = {
  ...import.meta.glob(['/content/_design/*/**/*.{png,jpg,jpeg,gif,webp,svg,avif,mp4,webm,mov}', '!/content/_design/_*/**'], { query: '?url', import: 'default', eager: true }),
  ...(import.meta.env.DEV ? import.meta.glob('/content/_design/_*/**/*.{png,jpg,jpeg,gif,webp,svg,avif,mp4,webm,mov}', { query: '?url', import: 'default', eager: true }) : {}),
};

const isLocal = (path: string) => !/^(https?:|\/|#|mailto:|data:)/.test(path);

function resolveAsset(folder: string, path?: string) {
  if (!path || !isLocal(path)) return path;
  return assets[`/content/_design/${folder}/${path.replace(/^\.\//, '')}`] ?? path;
}

function parseFrontMatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {} as Record<string, unknown>, body: raw };
  return { data: (parseYaml(match[1]) ?? {}) as Record<string, unknown>, body: match[2] };
}

function renderBody(folder: string, body: string) {
  return marked
    .parse(body.trim(), { async: false })
    .replace(/\b(src|poster)="([^"]+)"/g, (_, attr, path) => `${attr}="${resolveAsset(folder, path)}"`)
    .replace(/<a href="(https?:)/g, '<a target="_blank" rel="noreferrer" href="$1');
}

export const isVideo = (path?: string) => !!path && /\.(mp4|webm|mov)(\?|$)/i.test(path);

export const designProjects: DesignProject[] = Object.entries(sources)
  .map(([path, raw]) => {
    const folder = path.split('/').at(-2)!;
    const { data, body } = parseFrontMatter(raw);
    return {
      ...data,
      slug: folder.replace(/^_/, ''),
      year: data.year == null ? undefined : String(data.year),
      cover: resolveAsset(folder, data.cover as string | undefined),
      draft: folder.startsWith('_'),
      bodyHtml: renderBody(folder, body),
    } as DesignProject;
  })
  .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity) || a.title.localeCompare(b.title));

export const projectsIn = (categoryId: string) => designProjects.filter((p) => p.category === categoryId);
