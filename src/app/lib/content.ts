import { parse as parseYaml } from 'yaml';
import { marked } from 'marked';
import researchAboutRaw from '/content/research-about.md?raw';

// Content lives in /content using the academicpages front matter format,
// so entries can be copied to/from an academicpages site as-is.

export interface Publication {
  slug: string;
  title: string;
  date: string;
  venue?: string;
  status?: string;
  authors?: string;
  image?: string;
  excerpt?: string;
  citation?: string;
  category?: string;
  paperurl?: string;
  slidesurl?: string;
  bibtexurl?: string;
  bodyHtml: string;
}

export interface Teaching {
  slug: string;
  title: string;
  date: string;
  term?: string;
  role?: string;
  type?: string;
  venue?: string;
  location?: string;
  bodyHtml: string;
}

function parseFrontMatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {} as Record<string, unknown>, body: raw };
  return { data: (parseYaml(match[1]) ?? {}) as Record<string, unknown>, body: match[2] };
}

function toDateString(value: unknown) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return value == null ? '' : String(value);
}

function loadCollection<T>(files: Record<string, string>): T[] {
  return Object.entries(files)
    .map(([path, raw]) => {
      const { data, body } = parseFrontMatter(raw);
      return {
        ...data,
        slug: path.split('/').pop()!.replace(/\.md$/, ''),
        date: toDateString(data.date),
        bodyHtml: marked.parse(body.trim(), { async: false }),
      } as T & { date: string };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const publications = loadCollection<Publication>(
  import.meta.glob('/content/_publications/*.md', { query: '?raw', import: 'default', eager: true }),
);

export const teaching = loadCollection<Teaching>(
  import.meta.glob('/content/_teaching/*.md', { query: '?raw', import: 'default', eager: true }),
);

export const researchAboutHtml = marked.parse(researchAboutRaw, { async: false });
