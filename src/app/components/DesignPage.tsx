import { useEffect, useState } from 'react';
import { Link } from 'react-router';

export default function DesignPage() {
  const [activeSection, setActiveSection] = useState('mr');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['mr', 'ux', '3d-motion'];
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
      <div className="mx-auto max-w-[1360px] px-4 py-12 sm:px-6 md:px-8 lg:px-10 md:py-20 md:pt-[73px]">
        <div className="flex flex-col gap-10 xl:flex-row xl:gap-10">
          {/* Main Content */}
          <div className="min-w-0 flex-1 xl:max-w-[1120px]">
            {/* Header */}
            <div className="mb-16">
              <h1 className="mb-6 text-[28px] font-semibold leading-tight tracking-[0.0091px] text-[#171717] md:mb-8 md:text-[36px] md:leading-[40px]">
                Design Work
              </h1>
              <p className="max-w-[672px] text-[16px] leading-7 tracking-[-0.2px] text-[#525252] md:text-[18px] md:leading-[28px] md:tracking-[-0.4395px]">
                A collection of UX research, visual communication, motion design, and immersive experiences.
              </p>
            </div>

            {/* MR Section */}
            <section id="mr" className="mb-20">
              <h2 className="mb-6 text-[28px] font-semibold leading-tight tracking-[0.0091px] text-[#171717] md:mb-8 md:text-[36px] md:leading-[40px]">
                MR
              </h2>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-10">
                <div className="bg-white border border-[rgba(231,229,228,0.5)] rounded-2xl overflow-hidden">
                  <div className="bg-[#f5f5f5] aspect-[16/9] flex items-center justify-center">
                    <span className="text-[14px] text-[#a3a3a3]">Mixed Reality</span>
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="font-semibold text-[11px] tracking-[0.6px] uppercase text-[#707070] mb-1">
                      Mixed Reality
                    </p>
                    <h3 className="text-[18px] font-semibold leading-[24px] tracking-[-0.4492px] text-[#171717] mb-1">
                      Immersive Learning Environment
                    </h3>
                    <p className="text-[13px] leading-[20px] tracking-[-0.1504px] text-[#737373]">
                      VR/MR interaction design for technical skill acquisition
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-[rgba(231,229,228,0.5)] rounded-2xl overflow-hidden">
                  <div className="bg-[#f5f5f5] aspect-[16/9] flex items-center justify-center">
                    <span className="text-[14px] text-[#a3a3a3]">Mixed Reality</span>
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="font-semibold text-[11px] tracking-[0.6px] uppercase text-[#707070] mb-1">
                      Mixed Reality
                    </p>
                    <h3 className="text-[18px] font-semibold leading-[24px] tracking-[-0.4492px] text-[#171717] mb-1">
                      Spatial Tutorial System
                    </h3>
                    <p className="text-[13px] leading-[20px] tracking-[-0.1504px] text-[#737373]">
                      Hands-free learning interface for complex workflows
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  to="/design/mr"
                  className="inline-block text-[14px] font-medium tracking-[-0.1504px] text-[#171717] hover:text-[#3b82f6] transition-colors"
                >
                  MORE →
                </Link>
              </div>
            </section>

            {/* UX Section */}
            <section id="ux" className="mb-20">
              <h2 className="mb-6 text-[28px] font-semibold leading-tight tracking-[0.0091px] text-[#171717] md:mb-8 md:text-[36px] md:leading-[40px]">
                UX
              </h2>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-10">
                <div className="bg-white border border-[rgba(231,229,228,0.5)] rounded-2xl overflow-hidden">
                  <div className="flex aspect-[16/9] items-center justify-center bg-[#f5f5f5]">
                    <span className="text-[14px] text-[#a3a3a3]">UX Research</span>
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="font-semibold text-[11px] tracking-[0.6px] uppercase text-[#707070] mb-1">
                      UX Research
                    </p>
                    <h3 className="text-[18px] font-semibold leading-[24px] tracking-[-0.4492px] text-[#171717] mb-1">
                      AutoCue Interface
                    </h3>
                    <p className="text-[13px] leading-[20px] tracking-[-0.1504px] text-[#737373]">
                      AI-assisted visual cue generation for tutorial videos
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-[rgba(231,229,228,0.5)] rounded-2xl overflow-hidden">
                  <div className="flex aspect-[16/9] items-center justify-center bg-[#f5f5f5]">
                    <span className="text-[14px] text-[#a3a3a3]">UX Research</span>
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="font-semibold text-[11px] tracking-[0.6px] uppercase text-[#707070] mb-1">
                      UX Research
                    </p>
                    <h3 className="text-[18px] font-semibold leading-[24px] tracking-[-0.4492px] text-[#171717] mb-1">
                      Video Learning Platform
                    </h3>
                    <p className="text-[13px] leading-[20px] tracking-[-0.1504px] text-[#737373]">
                      Understanding learner breakdowns in software tutorials
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  to="/design/ux"
                  className="inline-block text-[14px] font-medium tracking-[-0.1504px] text-[#171717] hover:text-[#3b82f6] transition-colors"
                >
                  MORE →
                </Link>
              </div>
            </section>

            {/* 3D/Motion Section */}
            <section id="3d-motion" className="mb-20">
              <h2 className="mb-6 text-[28px] font-semibold leading-tight tracking-[0.0091px] text-[#171717] md:mb-8 md:text-[36px] md:leading-[40px]">
                3D/Motion
              </h2>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-10">
                <div className="bg-white border border-[rgba(231,229,228,0.5)] rounded-2xl overflow-hidden">
                  <div className="flex aspect-[16/9] items-center justify-center bg-[#f5f5f5]">
                    <span className="text-[14px] text-[#a3a3a3]">3D Design</span>
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="font-semibold text-[11px] tracking-[0.6px] uppercase text-[#707070] mb-1">
                      3D Design
                    </p>
                    <h3 className="text-[18px] font-semibold leading-[24px] tracking-[-0.4492px] text-[#171717] mb-1">
                      Product Visualization
                    </h3>
                    <p className="text-[13px] leading-[20px] tracking-[-0.1504px] text-[#737373]">
                      High-fidelity renders for technical documentation
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-[rgba(231,229,228,0.5)] rounded-2xl overflow-hidden">
                  <div className="flex aspect-[16/9] items-center justify-center bg-[#f5f5f5]">
                    <span className="text-[14px] text-[#a3a3a3]">Motion Graphics</span>
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="font-semibold text-[11px] tracking-[0.6px] uppercase text-[#707070] mb-1">
                      Motion Graphics
                    </p>
                    <h3 className="text-[18px] font-semibold leading-[24px] tracking-[-0.4492px] text-[#171717] mb-1">
                      Explainer Animation
                    </h3>
                    <p className="text-[13px] leading-[20px] tracking-[-0.1504px] text-[#737373]">
                      Complex concepts visualized through motion
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  to="/design/3d-motion"
                  className="inline-block text-[14px] font-medium tracking-[-0.1504px] text-[#171717] hover:text-[#3b82f6] transition-colors"
                >
                  MORE →
                </Link>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="w-full flex-shrink-0 xl:w-[160px]">
            <div className="xl:sticky xl:top-24">
              <div className="border-l-2 border-[#e5e5e5] pl-6">
                <h3 className="font-semibold text-[14px] tracking-[0.5496px] uppercase text-[#737373] mb-4">
                  On This Page
                </h3>

                <nav className="space-y-3">
                  <button
                    onClick={() => scrollToSection('mr')}
                    className={`block w-full text-left font-medium text-[14px] tracking-[-0.1504px] transition-colors ${
                      activeSection === 'mr' ? 'text-[#171717]' : 'text-[#737373]'
                    }`}
                  >
                    MR
                  </button>
                  <button
                    onClick={() => scrollToSection('ux')}
                    className={`block w-full text-left font-medium text-[14px] tracking-[-0.1504px] transition-colors ${
                      activeSection === 'ux' ? 'text-[#171717]' : 'text-[#737373]'
                    }`}
                  >
                    UX
                  </button>
                  <button
                    onClick={() => scrollToSection('3d-motion')}
                    className={`block w-full text-left font-medium text-[14px] tracking-[-0.1504px] transition-colors ${
                      activeSection === '3d-motion' ? 'text-[#171717]' : 'text-[#737373]'
                    }`}
                  >
                    3D/Motion
                  </button>
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
