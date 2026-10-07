import { useEffect, useState } from 'react';
import ProfileSidebar from './ProfileSidebar';
import PublicationList from './PublicationList';
import { publications, teaching, honors, education, researchAboutHtml, profile } from '../lib/content';

const SECTIONS = [
  { id: 'about', label: 'About Me' },
  { id: 'publications', label: 'Publications' },
  { id: 'teaching', label: 'Teaching' },
  { id: 'education', label: 'Education' },
  { id: 'honors', label: 'Honors & Awards' },
];

const proseClass =
  '[&_a]:text-[#2563eb] [&_a:hover]:text-[#1d4ed8] [&_a:hover]:underline [&_p]:text-[14px] [&_p]:leading-[24px] [&_p]:tracking-[-0.15px] [&_p]:text-[#525252] md:[&_p]:text-[15px] md:[&_p]:leading-[26px]';

export default function ResearchPage() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const { id: section } of SECTIONS) {
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
      <div className="mx-auto max-w-[1320px] px-4 py-12 sm:px-6 md:px-8 md:py-20 md:pt-[73px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Profile Sidebar — content/profile.yml */}
          <ProfileSidebar profile={profile} />

          {/* Main Content */}
          <div className="min-w-0 flex-1 max-w-[800px]">
            {/* About Me Section — content/research-about.md */}
            <section id="about" className="mb-14">
              <h2 className="mb-5 text-[22px] font-semibold leading-tight tracking-[-0.2px] text-[#171717] md:mb-6 md:text-[26px] md:leading-[32px]">
                About Me
              </h2>

              <div className={`space-y-4 ${proseClass}`} dangerouslySetInnerHTML={{ __html: researchAboutHtml }} />
            </section>

            {/* Publications Section — content/_publications/*.md */}
            <section id="publications" className="mb-14">
              <h2 className="mb-5 text-[22px] font-semibold leading-tight tracking-[-0.2px] text-[#171717] md:mb-6 md:text-[26px] md:leading-[32px]">
                Publications
              </h2>

              <PublicationList publications={publications} highlight={profile.author_name} />
            </section>

            {/* Teaching Section — content/_teaching/*.md */}
            <section id="teaching" className="mb-14">
              <h2 className="mb-5 text-[22px] font-semibold leading-tight tracking-[-0.2px] text-[#171717] md:mb-6 md:text-[26px] md:leading-[32px]">
                Teaching
              </h2>

              <ul className="list-disc space-y-3 pl-5 marker:text-[#a3a3a3]">
                {teaching.map((item) => (
                  <li key={item.slug}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                      <span className="w-[160px] flex-shrink-0 text-[14px] leading-[22px] tracking-[-0.15px] italic text-[#737373]">
                        {item.term ?? item.date.slice(0, 4)}
                      </span>
                      <div className="text-[14px] leading-[22px] tracking-[-0.15px] text-[#171717]">
                        {item.url ? (
                          <a href={item.url} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#3b82f6]">
                            {item.title}
                          </a>
                        ) : (
                          item.title
                        )}
                        {(item.role ?? item.type) && `, ${item.role ?? item.type}`}
                        {item.bodyHtml && (
                          <div
                            className="mt-0.5 [&_a]:underline [&_p]:text-[13px] [&_p]:leading-[20px] [&_p]:tracking-[-0.1px] [&_p]:text-[#737373]"
                            dangerouslySetInnerHTML={{ __html: item.bodyHtml }}
                          />
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Education Section — content/education.yml */}
            <section id="education" className="mb-14">
              <h2 className="mb-5 text-[22px] font-semibold leading-tight tracking-[-0.2px] text-[#171717] md:mb-6 md:text-[26px] md:leading-[32px]">
                Education
              </h2>

              <ul className="list-disc space-y-3 pl-5 marker:text-[#a3a3a3]">
                {education.map((item) => (
                  <li key={item.period}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                      <span className="w-[160px] flex-shrink-0 text-[14px] leading-[22px] tracking-[-0.15px] italic text-[#737373]">
                        {item.period}
                      </span>
                      <span className="text-[14px] leading-[22px] tracking-[-0.15px] text-[#171717]">
                        {[item.degree, item.school, item.location].filter(Boolean).join(', ')}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Honors & Awards Section — content/honors.yml */}
            <section id="honors" className="mb-14">
              <h2 className="mb-5 text-[22px] font-semibold leading-tight tracking-[-0.2px] text-[#171717] md:mb-6 md:text-[26px] md:leading-[32px]">
                Honors &amp; Awards
              </h2>

              <ul className="list-disc space-y-3 pl-5 marker:text-[#a3a3a3]">
                {honors.map((honor) => (
                  <li key={`${honor.date}-${honor.title}`}>
                    <div className="flex flex-col gap-1 sm:flex-row sm:gap-6">
                      <span className="w-[72px] flex-shrink-0 text-[14px] leading-[22px] tracking-[-0.15px] italic text-[#737373]">
                        {honor.date}
                      </span>
                      <span className="text-[14px] leading-[22px] tracking-[-0.15px] text-[#171717]">{honor.title}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="hidden w-[180px] flex-shrink-0 xl:block">
            <div className="lg:sticky lg:top-24">
              <div className="border-l-2 border-[#e5e5e5] pl-6">
                <h3 className="font-semibold text-[12px] tracking-[0.5px] uppercase text-[#737373] mb-3">
                  On This Page
                </h3>

                <nav className="space-y-2.5">
                  {SECTIONS.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={`block w-full text-left font-medium text-[13px] tracking-[-0.1px] transition-colors ${
                        activeSection === id ? 'text-[#171717]' : 'text-[#737373]'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
