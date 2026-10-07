import { useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { designCategories, designProjects } from '../lib/design';

export default function DesignProjectPage() {
  const { category: categoryId, slug } = useParams();
  const project = designProjects.find((p) => p.slug === slug && p.category === categoryId);
  const category = designCategories.find((c) => c.id === categoryId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to={category ? `/design/${category.id}` : '/design'} replace />;

  const meta = [
    { label: 'Year', value: project.year },
    { label: 'Role', value: project.role },
    { label: 'Tools', value: project.tools },
  ].filter((item) => item.value);

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <article className="mx-auto max-w-[1080px] px-4 py-12 sm:px-6 md:px-10 md:py-20 md:pt-[73px]">
        <Link
          to={`/design/${project.category}`}
          className="mb-6 inline-block text-[14px] font-medium tracking-[-0.1504px] text-[#737373] hover:text-[#171717] md:mb-8"
        >
          ← Back to {category?.title ?? 'Design'}
        </Link>

        <header className="mb-10 md:mb-14">
          {project.draft && (
            <span className="mb-3 inline-block rounded bg-[#fef3c7] px-2 py-0.5 text-[11px] font-semibold text-[#92400e]">
              Draft — only visible while running locally
            </span>
          )}
          {project.type && (
            <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.6px] text-[#707070]">{project.type}</p>
          )}
          <h1 className="text-[28px] font-semibold leading-tight tracking-[-0.4px] text-[#171717] md:text-[40px] md:leading-[48px]">
            {project.title}
          </h1>
          {project.summary && (
            <p className="mt-4 max-w-[720px] text-[16px] leading-7 text-[#525252] md:text-[18px] md:leading-[30px]">{project.summary}</p>
          )}
          {meta.length > 0 && (
            <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-3 border-t border-[#e5e5e5] pt-5">
              {meta.map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.6px] text-[#a3a3a3]">{label}</dt>
                  <dd className="mt-1 text-[14px] text-[#171717]">{value}</dd>
                </div>
              ))}
            </dl>
          )}
        </header>

        {/* Free-form layout from content/_design/<slug>/index.md — styles in src/styles/design.css */}
        <div className="design-prose" dangerouslySetInnerHTML={{ __html: project.bodyHtml }} />
      </article>
    </div>
  );
}
