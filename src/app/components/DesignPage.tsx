import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import DesignProjectCard from './DesignProjectCard';
import { designCategories, projectsIn } from '../lib/design';

// How many projects each section shows before "MORE →".
const PREVIEW_COUNT = 2;

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
      <div className="mx-auto max-w-[1520px] px-4 py-12 sm:px-6 md:px-8 lg:px-10 xl:px-12 md:py-20 md:pt-[73px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-8">
          {/* Main Content */}
          <div className="min-w-0 flex-1">
            {/* Header */}
            <div className="mb-12">
              <h1 className="mb-6 text-[28px] font-semibold leading-tight tracking-[0.0091px] text-[#171717] md:mb-8 md:text-[36px] md:leading-[40px]">
                Design Work
              </h1>
              <p className="max-w-[672px] text-[16px] leading-7 tracking-[-0.2px] text-[#525252] md:text-[18px] md:leading-[28px] md:tracking-[-0.4395px]">
                A collection of UX research, visual communication, motion design, and immersive experiences.
              </p>
            </div>

            {/* One section per category — content/design-categories.yml + content/_design/* */}
            {sections.map((category) => {
              const projects = projectsIn(category.id);
              return (
                <section key={category.id} id={category.id} className="mb-14 scroll-mt-28 md:scroll-mt-32">
                  <h2 className="mb-6 text-[28px] font-semibold leading-tight tracking-[0.0091px] text-[#171717] md:mb-8 md:text-[36px] md:leading-[40px]">
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
                      className="inline-block text-[14px] font-medium tracking-[-0.1504px] text-[#171717] hover:text-[#3b82f6] transition-colors"
                    >
                      MORE →
                    </Link>
                  </div>
                </section>
              );
            })}
          </div>

          {/* Sticky Sidebar */}
          <div className="w-full flex-shrink-0 lg:w-[136px]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="border-l-2 border-[#e5e5e5] pl-6">
                <h3 className="font-semibold text-[14px] tracking-[0.5496px] uppercase text-[#737373] mb-4">
                  On This Page
                </h3>

                <nav className="space-y-3">
                  {sections.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={`block w-full text-left font-medium text-[14px] tracking-[-0.1504px] transition-colors ${
                        activeSection === id ? 'text-[#171717]' : 'text-[#737373]'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="mt-8 border-l-2 border-[#e5e5e5] pl-6">
                <h3 className="font-semibold text-[14px] tracking-[0.5496px] uppercase text-[#737373] mb-3">
                  Contact
                </h3>
                <div className="space-y-2">
                  <a href="#" className="block text-[14px] tracking-[-0.1504px] text-[#525252] hover:text-[#171717] transition-colors">
                    Behance
                  </a>
                  <a href="#" className="block text-[14px] tracking-[-0.1504px] text-[#525252] hover:text-[#171717] transition-colors">
                    RedNote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
