import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
      <div className="max-w-[1100px] mx-auto px-8 pt-[73px] py-20">
        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1 max-w-[800px]">
            {/* About Me Section */}
            <section id="about" className="mb-20">
              <h2 className="text-[36px] font-semibold leading-[40px] tracking-[0.0091px] text-[#171717] mb-8">
                About Me
              </h2>

              <div className="space-y-5">
                <p className="text-[18px] leading-[28px] tracking-[-0.4395px] text-[#525252]">
                  I am a PhD student in Human-Computer Interaction, exploring how people learn, interact, and create with emerging technologies. My research focuses on interactive learning systems, with particular emphasis on video-based tutorial learning, AI-assisted educational tools, and VR/MR interaction design.
                </p>

                <p className="text-[18px] leading-[28px] tracking-[-0.4395px] text-[#525252]">
                  My path to HCI research began with photography and visual communication design. Working as a photographer taught me to observe carefully, to see how people interact with their environments, and to communicate through visual means. This foundation led me to pursue visual communication and motion design, where I became interested in how design decisions affect user experience and comprehension.
                </p>
              </div>
            </section>

            {/* Publications Section */}
            <section id="publications" className="mb-20">
              <h2 className="text-[36px] font-semibold leading-[40px] tracking-[0.0091px] text-[#171717] mb-8">
                Publications
              </h2>

              <div className="space-y-10">
                {/* Publication 1 */}
                <div className="flex gap-6 border-l-4 border-[#171717] pl-9 pt-2">
                  <div className="w-[180px] h-[120px] flex-shrink-0 bg-[#e5e5e5] rounded overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1763568258696-32147bb44379?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                      alt="AutoCue research"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-[20px] font-semibold leading-[25px] tracking-[-0.4492px] text-[#171717]">
                        AutoCue: Intelligent Visual Cue Generation for Software Tutorial Videos
                      </h3>
                      <span className="bg-[#f5f5f5] border border-[#e5e5e5] px-3 py-1 rounded-full text-[14px] text-[#525252] whitespace-nowrap ml-4">
                        2027
                      </span>
                    </div>
                    <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#737373] mb-2">
                      Shengyang Liu, [Co-authors]
                    </p>
                    <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#525252] italic">
                      In Preparation for CHI 2027
                    </p>
                  </div>
                </div>

                {/* Publication 2 */}
                <div className="flex gap-6 border-l-4 border-[#171717] pl-9 pt-2">
                  <div className="w-[180px] h-[120px] flex-shrink-0 bg-[#e5e5e5] rounded overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1516934406976-ac3b5ceca2a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                      alt="Video learning research"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-[20px] font-semibold leading-[25px] tracking-[-0.4492px] text-[#171717]">
                        Understanding Learner Breakdowns in Video-Based Software Tutorials
                      </h3>
                      <span className="bg-[#f5f5f5] border border-[#e5e5e5] px-3 py-1 rounded-full text-[14px] text-[#525252] whitespace-nowrap ml-4">
                        2026
                      </span>
                    </div>
                    <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#737373] mb-2">
                      Shengyang Liu, [Co-authors]
                    </p>
                    <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#525252] italic">
                      Under Review at CSCW 2026
                    </p>
                  </div>
                </div>

                {/* Publication 3 */}
                <div className="flex gap-6 border-l-4 border-[#171717] pl-9 pt-2">
                  <div className="w-[180px] h-[120px] flex-shrink-0 bg-[#e5e5e5] rounded overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1771765764892-91f2ed4ddbf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                      alt="VR learning research"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-[20px] font-semibold leading-[25px] tracking-[-0.4492px] text-[#171717]">
                        Immersive Learning Environments for Technical Skill Acquisition
                      </h3>
                      <span className="bg-[#f5f5f5] border border-[#e5e5e5] px-3 py-1 rounded-full text-[14px] text-[#525252] whitespace-nowrap ml-4">
                        2025
                      </span>
                    </div>
                    <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#737373] mb-2">
                      Shengyang Liu, [Co-authors]
                    </p>
                    <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#525252] italic">
                      VR Learning Workshop Proceedings
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Teaching Section */}
            <section id="teaching" className="mb-20">
              <h2 className="text-[36px] font-semibold leading-[40px] tracking-[0.0091px] text-[#171717] mb-8">
                Teaching
              </h2>

              <div className="space-y-10">
                {/* Teaching 1 */}
                <div className="border-l-4 border-[#171717] pl-9 pt-2">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[20px] font-semibold leading-[25px] tracking-[-0.4492px] text-[#171717]">
                      HCI Methods
                    </h3>
                    <span className="bg-[#f5f5f5] border border-[#e5e5e5] px-3 py-1 rounded-full text-[14px] text-[#525252] whitespace-nowrap">
                      Fall 2025
                    </span>
                  </div>
                  <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#737373] mb-2">
                    Teaching Assistant
                  </p>
                  <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#525252]">
                    Assisted with lectures, graded assignments, and held weekly office hours for graduate-level HCI research methods course.
                  </p>
                </div>

                {/* Teaching 2 */}
                <div className="border-l-4 border-[#171717] pl-9 pt-2">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[20px] font-semibold leading-[25px] tracking-[-0.4492px] text-[#171717]">
                      Interactive Systems Design
                    </h3>
                    <span className="bg-[#f5f5f5] border border-[#e5e5e5] px-3 py-1 rounded-full text-[14px] text-[#525252] whitespace-nowrap">
                      Spring 2026
                    </span>
                  </div>
                  <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#737373] mb-2">
                    Teaching Assistant
                  </p>
                  <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#525252]">
                    Supported undergraduate students in designing and prototyping interactive systems, provided feedback on design critiques.
                  </p>
                </div>

                {/* Teaching 3 */}
                <div className="border-l-4 border-[#171717] pl-9 pt-2">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[20px] font-semibold leading-[25px] tracking-[-0.4492px] text-[#171717]">
                      Introduction to UX Design
                    </h3>
                    <span className="bg-[#f5f5f5] border border-[#e5e5e5] px-3 py-1 rounded-full text-[14px] text-[#525252] whitespace-nowrap">
                      Fall 2024
                    </span>
                  </div>
                  <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#737373] mb-2">
                    Teaching Assistant
                  </p>
                  <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#525252]">
                    Guided students through user research methods, wireframing, and usability testing fundamentals.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="w-[200px] flex-shrink-0">
            <div className="sticky top-24">
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
