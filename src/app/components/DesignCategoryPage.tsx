import { Link, Navigate, useParams } from 'react-router';
import DesignProjectCard from './DesignProjectCard';
import { designCategories, projectsIn } from '../lib/design';

export default function DesignCategoryPage() {
  const { category: categoryId } = useParams();
  const category = designCategories.find((c) => c.id === categoryId);
  if (!category) return <Navigate to="/design" replace />;

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <div className="mx-auto max-w-[1360px] px-4 py-12 sm:px-6 md:px-10 lg:px-12 md:py-20 md:pt-[73px]">
        <Link to="/design" className="mb-6 inline-block text-[14px] font-medium tracking-[-0.1504px] text-[#737373] hover:text-[#171717] md:mb-8">
          ← Back to Design
        </Link>

        <h1 className="mb-6 text-[28px] font-semibold leading-tight tracking-[0.0091px] text-[#171717] md:mb-8 md:text-[36px] md:leading-[40px]">
          {category.title ?? category.label}
        </h1>
        {category.description && (
          <p className="mb-10 max-w-[672px] text-[16px] leading-7 tracking-[-0.2px] text-[#525252] md:mb-12 md:text-[18px] md:leading-[28px] md:tracking-[-0.4395px]">
            {category.description}
          </p>
        )}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-10">
          {projectsIn(category.id).map((project) => (
            <DesignProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
