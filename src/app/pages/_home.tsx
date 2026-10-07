import { Link } from 'react-router';
import { Microscope, Palette } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f7f7]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-120px] top-[80px] h-[240px] w-[240px] rounded-full bg-[rgba(219,234,254,0.08)] blur-[56px] sm:h-[360px] sm:w-[360px] md:left-[384px] md:right-auto md:h-[600px] md:w-[600px] md:blur-[64px]" />
        <div className="absolute right-[-80px] top-[260px] h-[200px] w-[200px] rounded-full bg-[rgba(59,130,246,0.04)] blur-[56px] sm:h-[280px] sm:w-[280px] md:left-[652px] md:right-auto md:h-[500px] md:w-[500px] md:blur-[64px]" />
      </div>

      <div className="relative mx-auto max-w-[1088px] px-4 pb-20 pt-6 sm:px-6 md:px-8 md:pb-32 md:pt-[73px]">
        {/* Hero Section */}
        <div className="pb-12 pt-12 sm:pt-16 md:pb-[64px] md:pt-[128px]">
          <p className="mb-6 text-xs font-medium uppercase tracking-[2px] text-[#707070] sm:text-[14px] md:mb-8 md:tracking-[2.6496px]">
            HCI RESEARCHER & DESIGNER
          </p>

          <h1 className="mb-6 text-[36px] font-semibold leading-[1.15] tracking-[-1px] text-[#171717] sm:text-[44px] md:text-[55px] md:leading-[79.2px] md:tracking-[-1.677px]">
            Exploring how people <span className="text-[#737373]">interact</span>
            <br />
            with emerging technologies
          </h1>

          <p className="max-w-[672px] text-[16px] leading-7 tracking-[-0.2px] text-[#737373] sm:text-[18px] md:text-[20px] md:leading-[32.5px] md:tracking-[-0.4492px]">
            Bridging design practice and research inquiry through interactive systems and human-centered investigation.
          </p>
        </div>

        {/* Category Cards */}
        <div className="mb-14 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:mb-16 md:gap-8">
          <Link to="/research" className="rounded-[24px] border border-[rgba(231,229,228,0.5)] bg-white p-6 transition-colors hover:border-[#3b82f6] sm:p-8 md:p-12">
            <div className="bg-[rgba(112,112,112,0.1)] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
              <Microscope className="w-6 h-6 text-[#171717]" />
            </div>
            <h2 className="mb-4 text-[24px] font-semibold leading-tight tracking-[0.02px] text-[#171717] sm:text-[28px] md:text-[30px] md:leading-[39px] md:tracking-[0.0955px]">
              Research
            </h2>
            <p className="mb-8 text-[15px] leading-6 tracking-[-0.2px] text-[#171717] md:text-[16px] md:leading-[26px] md:tracking-[-0.3125px]">
              Interactive learning systems, VR/MR interaction, and AI-supported educational tools.
            </p>
            <p className="font-medium text-[14px] tracking-[-0.1504px] text-[#171717]">
              Explore →
            </p>
          </Link>

          <Link to="/design" className="rounded-[24px] border border-[rgba(231,229,228,0.5)] bg-white p-6 transition-colors hover:border-[#3b82f6] sm:p-8 md:p-12">
            <div className="bg-[rgba(112,112,112,0.1)] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
              <Palette className="w-6 h-6 text-[#171717]" />
            </div>
            <h2 className="mb-4 text-[24px] font-semibold leading-tight tracking-[0.02px] text-[#171717] sm:text-[28px] md:text-[30px] md:leading-[39px] md:tracking-[0.0955px]">
              Design
            </h2>
            <p className="mb-8 text-[15px] leading-6 tracking-[-0.2px] text-[#171717] md:text-[16px] md:leading-[26px] md:tracking-[-0.3125px]">
              UX research, visual communication, motion design, and photography-informed thinking.
            </p>
            <p className="font-medium text-[14px] tracking-[-0.1504px] text-[#171717]">
              Explore →
            </p>
          </Link>
        </div>

        {/* Featured Work */}
        <div className="mb-16">
          <h2 className="mb-6 text-[28px] font-semibold leading-tight tracking-[0.0091px] text-[#171717] md:text-[36px] md:leading-[40px]">
            Featured Work
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            <div className="rounded-2xl border border-[rgba(231,229,228,0.5)] bg-white p-6 md:p-8">
              <p className="font-semibold text-[12px] tracking-[0.6px] uppercase text-[#707070] mb-3">
                LLM Application
              </p>
              <h3 className="text-[20px] font-semibold leading-[28px] tracking-[-0.4492px] text-[#171717] mb-3">
                AutoCue
              </h3>
              <p className="text-[14px] leading-[22.75px] tracking-[-0.1504px] text-[#737373]">
                AI-assisted visual cue augmentation for software tutorial videos.
              </p>
            </div>

            <div className="rounded-2xl border border-[rgba(231,229,228,0.5)] bg-white p-6 md:p-8">
              <p className="font-semibold text-[12px] tracking-[0.6px] uppercase text-[#707070] mb-3">
                UX Research
              </p>
              <h3 className="text-[20px] font-semibold leading-[28px] tracking-[-0.4492px] text-[#171717] mb-3">
                Video-Based Software Learning
              </h3>
              <p className="text-[14px] leading-[22.75px] tracking-[-0.1504px] text-[#737373]">
                Empirical study of learner breakdowns and device ecologies.
              </p>
            </div>

            <div className="rounded-2xl border border-[rgba(231,229,228,0.5)] bg-white p-6 md:p-8">
              <p className="font-semibold text-[12px] tracking-[0.6px] uppercase text-[#707070] mb-3">
                Spatial Computing
              </p>
              <h3 className="text-[20px] font-semibold leading-[28px] tracking-[-0.4492px] text-[#171717] mb-3">
                VR/MR Learning Systems
              </h3>
              <p className="text-[14px] leading-[22.75px] tracking-[-0.1504px] text-[#737373]">
                Immersive training and interaction design for complex tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
