import { Fragment } from 'react';
import { FileText, Presentation, Quote, Video } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Publication } from '../lib/content';

function Authors({ authors, highlight }: { authors: string; highlight?: string }) {
  const names = authors.split(',').map((name) => name.trim());
  return (
    <>
      {names.map((entry, i) => {
        // "A, B, and C": keep the "and " in the text but match/bold only the name.
        const name = entry.replace(/^and\s+/, '');
        const lead = entry.slice(0, entry.length - name.length);
        return (
          <Fragment key={`${name}-${i}`}>
            {i > 0 && ', '}
            {lead}
            {highlight && name.replace(/[*†‡]/g, '') === highlight ? (
              <strong className="font-semibold text-[#171717]">{name}</strong>
            ) : (
              name
            )}
          </Fragment>
        );
      })}
    </>
  );
}

function PublicationItem({ pub, highlight }: { pub: Publication; highlight?: string }) {
  const titleHref = pub.url ?? pub.paperurl;
  const links = [
    { label: 'PDF', href: pub.paperurl, Icon: FileText },
    { label: 'Slides', href: pub.slidesurl, Icon: Presentation },
    { label: 'Video', href: pub.videourl, Icon: Video },
    { label: 'BibTeX', href: pub.bibtexurl, Icon: Quote },
  ].filter((link) => link.href);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
      {pub.image && (
        <div className="h-[84px] w-[128px] flex-shrink-0 overflow-hidden rounded-md border border-[#e5e5e5] bg-white">
          <ImageWithFallback src={pub.image} alt={pub.title} className="h-full w-full object-cover" />
        </div>
      )}

      <div className="min-w-0 flex-1 text-[14px] leading-[22px] tracking-[-0.15px] text-[#525252]">
        <p>
          {pub.authors && (
            <>
              <Authors authors={pub.authors} highlight={highlight} />.{' '}
            </>
          )}
          {titleHref ? (
            <a
              href={titleHref}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[#2563eb] transition-colors hover:text-[#1d4ed8] hover:underline"
            >
              {pub.title}.
            </a>
          ) : (
            <span className="font-medium text-[#2563eb]">{pub.title}.</span>
          )}{' '}
          <span className="italic">
            {pub.venue && pub.status ? `${pub.venue}, ${pub.date.slice(0, 4)} (${pub.status})` : (pub.status ?? pub.venue)}
          </span>
        </p>

        <div className="mt-1.5 flex items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            {links.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                title={label}
                className="flex items-center gap-1 text-[12px] font-medium text-[#737373] transition-colors hover:text-[#2563eb]"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </a>
            ))}
          </div>
          {pub.venue_short && (
            <span className="flex-shrink-0 rounded bg-[#e8eefc] px-2 py-0.5 text-[11px] font-semibold tracking-[0.2px] text-[#1e40af]">
              {pub.venue_short}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// academicpages categories: "manuscripts" = journal articles, "conferences" = conference papers.
function typePrefix(category?: string) {
  const c = (category ?? '').toLowerCase();
  if (c === 'manuscripts' || c.startsWith('journal')) return 'J';
  if (c.startsWith('conference')) return 'C';
  return '';
}

export default function PublicationList({ publications, highlight }: { publications: Publication[]; highlight?: string }) {
  return (
    <div className="space-y-5">
      {publications.map((pub) => (
        <div key={pub.slug} className="flex gap-3 sm:gap-4">
          <span className="w-[24px] flex-shrink-0 pt-px text-[13px] leading-[22px] text-[#737373]">
            {typePrefix(pub.category) && `[${typePrefix(pub.category)}]`}
          </span>
          <div className="min-w-0 flex-1">
            <PublicationItem pub={pub} highlight={highlight} />
          </div>
        </div>
      ))}
    </div>
  );
}
