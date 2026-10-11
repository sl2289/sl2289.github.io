import { Link, Navigate, useParams } from 'react-router';
import DesignProjectCard from './DesignProjectCard';
import { designCategories, projectsIn } from '../lib/design';
import { backLink, bodyText, wideContainer, sectionHeading } from './typography';

export default function DesignCategoryPage() {
  const { category: categoryId } = useParams();
  const category = designCategories.find((c) => c.id === categoryId);
  if (!category) return <Navigate to="/design" replace />;

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <div className={wideContainer}>
        <Link to="/design" className={backLink}>
          ← Back to Design
        </Link>

        <h1 className={sectionHeading}>
          {category.title ?? category.label}
        </h1>
        {category.description && (
          <p className={`mb-10 max-w-[720px] md:mb-12 ${bodyText}`}>
            {category.description}
          </p>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
          {projectsIn(category.id).map((project) => (
            <DesignProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
