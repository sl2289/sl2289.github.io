import { Link } from 'react-router';
import { isVideo, type DesignProject } from '../lib/design';

export function ProjectCover({ project, className = '' }: { project: DesignProject; className?: string }) {
  if (!project.cover) {
    return (
      <div className={`flex items-center justify-center bg-[#f5f5f5] ${className}`}>
        <span className="text-[13px] text-[#a3a3a3]">{project.type ?? project.title}</span>
      </div>
    );
  }
  if (isVideo(project.cover)) {
    return <video src={project.cover} className={`object-cover ${className}`} autoPlay muted loop playsInline />;
  }
  return <img src={project.cover} alt={project.title} className={`object-cover ${className}`} loading="lazy" />;
}

export default function DesignProjectCard({ project }: { project: DesignProject }) {
  return (
    <Link
      to={`/design/${project.category}/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-[rgba(231,229,228,0.5)] bg-white transition-colors hover:border-[#3b82f6]"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <ProjectCover project={project} className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]" />
        {project.draft && (
          <span className="absolute left-3 top-3 rounded bg-[#fef3c7] px-2 py-0.5 text-[11px] font-semibold text-[#92400e]">
            Draft
          </span>
        )}
      </div>
      <div className="px-4 py-3 md:px-5 md:py-3.5">
        {project.type && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.6px] text-[#707070]">{project.type}</p>
        )}
        <h3 className="text-[15px] font-semibold leading-[22px] tracking-[-0.2px] text-[#171717] md:text-[16px] md:leading-[23px]">{project.title}</h3>
        {project.summary && (
          <p className="line-clamp-1 text-[13px] leading-[20px] tracking-[-0.1504px] text-[#737373]">{project.summary}</p>
        )}
      </div>
    </Link>
  );
}
