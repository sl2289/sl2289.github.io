import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { publications, teaching, researchAboutHtml } from '../lib/content';

const proseClass =
  '[&_a]:underline [&_a:hover]:text-[#171717] [&_p]:text-[16px] [&_p]:leading-7 [&_p]:tracking-[-0.2px] [&_p]:text-[#525252] md:[&_p]:text-[18px] md:[&_p]:leading-[28px] md:[&_p]:tracking-[-0.4395px]';

export default function ResearchPage() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'publications', 'teaching'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
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
      <div className="mx-auto max-w-[1100px] px-4 py-12 sm:px-6 md:px-8 md:py-20 md:pt-[73px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Main Content */}
          <div className="flex-1 max-w-[800px]">
            {/* About Me Section — content/research-about.md */}
            <section id="about" className="mb-20">
              <h2 className="mb-6 text-[28px] font-semibold leading-tight tracking-[0.0091px] text-[#171717] md:mb-8 md:text-[36px] md:leading-[40px]">
                About Me
              </h2>

              <div className={`space-y-5 ${proseClass}`} dangerouslySetInnerHTML={{ __html: researchAboutHtml }} />
            </section>

            {/* Publications Section — content/_publications/*.md */}
            <section id="publications" className="mb-20">
              <h2 className="mb-6 text-[28px] font-semibold leading-tight tracking-[0.0091px] text-[#171717] md:mb-8 md:text-[36px] md:leading-[40px]">
                Publications
              </h2>

              <div className="space-y-10">
                {publications.map((pub) => {
                  const links = [
                    { label: 'PDF', href: pub.paperurl },
                    { label: 'Slides', href: pub.slidesurl },
                    { label: 'BibTeX', href: pub.bibtexurl },
                  ].filter((link) => link.href);

                  return (
                    <div key={pub.slug} className="flex flex-col gap-4 border-l-4 border-[#171717] pl-4 pt-2 sm:gap-6 sm:pl-9 md:flex-row">
                      {pub.image && (
                        <div className="h-[180px] w-full flex-shrink-0 rounded bg-[#e5e5e5] overflow-hidden md:h-[120px] md:w-[180px]">
                          <ImageWithFallback src={pub.image} alt={pub.title} className="w-full h-full object-cover" />
                        </div>
                      )}

                      <div className="flex-1">
                        <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <h3 className="text-[18px] font-semibold leading-6 tracking-[-0.3px] text-[#171717] md:text-[20px] md:leading-[25px] md:tracking-[-0.4492px]">
                            {pub.title}
                          </h3>
                          <span className="ml-0 w-fit whitespace-nowrap rounded-full bg-[#f5f5f5] border border-[#e5e5e5] px-3 py-1 text-[14px] text-[#525252] sm:ml-4">
                            {pub.date.slice(0, 4)}
                          </span>
                        </div>
                        {pub.authors && (
                          <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#737373] mb-2">
                            {pub.authors}
                          </p>
                        )}
                        <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#525252] italic">
                          {pub.status ?? pub.venue}
                        </p>
                        {pub.excerpt && (
                          <p className="mt-2 text-[14px] leading-[22px] tracking-[-0.1504px] text-[#737373]">
                            {pub.excerpt}
                          </p>
                        )}
                        {links.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                            {links.map((link) => (
                              <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[14px] font-medium tracking-[-0.1504px] text-[#525252] hover:text-[#3b82f6] transition-colors"
                              >
                                {link.label} ↗
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Teaching Section — content/_teaching/*.md */}
            <section id="teaching" className="mb-20">
              <h2 className="mb-6 text-[28px] font-semibold leading-tight tracking-[0.0091px] text-[#171717] md:mb-8 md:text-[36px] md:leading-[40px]">
                Teaching
              </h2>

              <div className="space-y-10">
                {teaching.map((item) => (
                  <div key={item.slug} className="border-l-4 border-[#171717] pl-9 pt-2">
                    <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="text-[18px] font-semibold leading-6 tracking-[-0.3px] text-[#171717] md:text-[20px] md:leading-[25px] md:tracking-[-0.4492px]">
                        {item.title}
                      </h3>
                      <span className="w-fit whitespace-nowrap rounded-full bg-[#f5f5f5] border border-[#e5e5e5] px-3 py-1 text-[14px] text-[#525252]">
                        {item.term ?? item.date.slice(0, 4)}
                      </span>
                    </div>
                    {(item.role ?? item.type) && (
                      <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#737373] mb-2">
                        {item.role ?? item.type}
                      </p>
                    )}
                    <div
                      className="[&_a]:underline [&_p]:text-[16px] [&_p]:leading-[24px] [&_p]:tracking-[-0.3125px] [&_p]:text-[#525252]"
                      dangerouslySetInnerHTML={{ __html: item.bodyHtml }}
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="w-full flex-shrink-0 lg:w-[200px]">
            <div className="lg:sticky lg:top-24">
              <div className="border-l-2 border-[#e5e5e5] pl-6">
                <h3 className="font-semibold text-[14px] tracking-[0.5496px] uppercase text-[#737373] mb-4">
                  On This Page
                </h3>

                <nav className="space-y-3">
                  <button
                    onClick={() => scrollToSection('about')}
                    className={`block w-full text-left font-medium text-[14px] tracking-[-0.1504px] transition-colors ${
                      activeSection === 'about' ? 'text-[#171717]' : 'text-[#737373]'
                    }`}
                  >
                    About Me
                  </button>
                  <button
                    onClick={() => scrollToSection('publications')}
                    className={`block w-full text-left font-medium text-[14px] tracking-[-0.1504px] transition-colors ${
                      activeSection === 'publications' ? 'text-[#171717]' : 'text-[#737373]'
                    }`}
                  >
                    Publications
                  </button>
                  <button
                    onClick={() => scrollToSection('teaching')}
                    className={`block w-full text-left font-medium text-[14px] tracking-[-0.1504px] transition-colors ${
                      activeSection === 'teaching' ? 'text-[#171717]' : 'text-[#737373]'
                    }`}
                  >
                    Teaching
                  </button>
                </nav>
              </div>

              {/* Contact Section */}
              <div className="mt-8 border-l-2 border-[#e5e5e5] pl-6">
                <h3 className="font-semibold text-[14px] tracking-[0.5496px] uppercase text-[#737373] mb-3">
                  Contact
                </h3>
                <div className="space-y-2">
                  <a href="mailto:your.email@university.edu" className="block text-[14px] tracking-[-0.1504px] text-[#525252] hover:text-[#171717] transition-colors">
                    Email
                  </a>
                  <a href="#" className="block text-[14px] tracking-[-0.1504px] text-[#525252] hover:text-[#171717] transition-colors">
                    Google Scholar
                  </a>
                  <a href="#" className="block text-[14px] tracking-[-0.1504px] text-[#525252] hover:text-[#171717] transition-colors">
                    GitHub
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
