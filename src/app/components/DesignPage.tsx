import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import DesignProjectCard from './DesignProjectCard';
import { designCategories, projectsIn } from '../lib/design';
import { bodyText, wideContainer, sectionHeading, sidebarHeading, sidebarItem } from './typography';

// How many projects each section shows before "MORE →".
const PREVIEW_COUNT = 2;

// Contact links in the sidebar (Behance / RedNote) are hidden until the real URLs are added.
const SHOW_CONTACT = false;

// Categories with no projects are left out.
const sections = designCategories.filter((category) => projectsIn(category.id).length > 0);

export default function DesignPage() {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? '');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const { id: section } of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <div className={wideContainer}>
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Main Content */}
          <div className="min-w-0 flex-1">
            {/* Header */}
            <div className="mb-14">
              <h1 className={sectionHeading}>
                Design Work
              </h1>
              <p className={`max-w-[720px] ${bodyText}`}>
                A collection of UX research, visual communication, motion design, and immersive experiences.
              </p>
            </div>

            {/* One section per category — content/design-categories.yml + content/_design/* */}
            {sections.map((category) => {
              const projects = projectsIn(category.id);
              return (
                <section key={category.id} id={category.id} className="mb-14 scroll-mt-28 md:scroll-mt-32">
                  <h2 className={sectionHeading}>
                    {category.label}
                  </h2>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                    {projects.slice(0, PREVIEW_COUNT).map((project) => (
                      <DesignProjectCard key={project.slug} project={project} />
                    ))}
                  </div>

                  <div className="mt-4 text-center">
                    <Link
                      to={`/design/${category.id}`}
                      className="inline-block text-[13px] font-medium tracking-[-0.1px] text-[#171717] transition-colors hover:text-[#3b82f6]"
                    >
                      MORE →
                    </Link>
                  </div>
                </section>
              );
            })}
          </div>

          {/* Sticky Sidebar */}
          <div className="w-full flex-shrink-0 lg:w-[160px]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="border-l-2 border-[#e5e5e5] pl-6">
                <h3 className={sidebarHeading}>
                  On This Page
                </h3>

                <nav className="space-y-2.5">
                  {sections.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={`${sidebarItem} ${
                        activeSection === id ? 'text-[#171717]' : 'text-[#737373]'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </nav>
              </div>

              {SHOW_CONTACT && (
                <div className="mt-8 border-l-2 border-[#e5e5e5] pl-6">
                  <h3 className={sidebarHeading}>
                    Contact
                  </h3>
                  <div className="space-y-2">
                    <a href="#" className="block text-[13px] tracking-[-0.1px] text-[#525252] transition-colors hover:text-[#171717]">
                      Behance
                    </a>
                    <a href="#" className="block text-[13px] tracking-[-0.1px] text-[#525252] transition-colors hover:text-[#171717]">
                      RedNote
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
