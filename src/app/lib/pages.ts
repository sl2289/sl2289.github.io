import type { ComponentType } from 'react';

// Optional top-level pages live in src/app/pages/ — same rule as design projects:
//   home.tsx  / about.tsx   → live
//   _home.tsx / _about.tsx  → draft: shown while running `npm run dev`, left out of the live site
// (import.meta.glob only accepts literal patterns and options.)
const live = import.meta.glob(['/src/app/pages/*.tsx', '!/src/app/pages/_*.tsx'], { import: 'default', eager: true }) as Record<
  string,
  ComponentType
>;
const drafts = (import.meta.env.DEV ? import.meta.glob('/src/app/pages/_*.tsx', { import: 'default', eager: true }) : {}) as Record<
  string,
  ComponentType
>;

export interface SitePage {
  Component: ComponentType;
  draft: boolean;
}

function findPage(name: string): SitePage | undefined {
  const published = live[`/src/app/pages/${name}.tsx`];
  if (published) return { Component: published, draft: false };
  const draft = drafts[`/src/app/pages/_${name}.tsx`];
  if (draft) return { Component: draft, draft: true };
  return undefined;
}

export const homePage = findPage('home');
export const aboutPage = findPage('about');
