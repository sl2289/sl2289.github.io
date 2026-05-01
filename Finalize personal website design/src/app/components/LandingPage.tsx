import { Link } from 'react-router';
import { Microscope, Palette } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-[384px] top-[80px] w-[600px] h-[600px] bg-[rgba(219,234,254,0.1)] rounded-full blur-[64px]" />
        <div className="absolute left-[652px] top-[305px] w-[500px] h-[500px] bg-[rgba(59,130,246,0.05)] rounded-full blur-[64px]" />
      </div>

      <div className="relative max-w-[1088px] mx-auto px-8 pt-[73px] pb-32">
        {/* Hero Section */}
        <div className="pt-[128px] pb-[64px]">
          <p className="font-medium text-[14px] text-[#707070] tracking-[2.6496px] uppercase mb-8">
            HCI RESEARCHER & DESIGNER
          </p>

          <h1 className="text-[55px] font-semibold leading-[79.2px] tracking-[-1.677px] text-[#171717] mb-6">
            Exploring how people <span className="text-[#737373]">interact</span>
            <br />
            with emerging technologies
          </h1>

          <p className="text-[20px] leading-[32.5px] tracking-[-0.4492px] text-[#737373] max-w-[672px]">
            Bridging design practice and research inquiry through interactive systems and human-centered investigation.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 gap-8 mb-16">
          <Link to="/research" className="bg-white border border-[rgba(231,229,228,0.5)] rounded-[24px] p-12 hover:border-[#3b82f6] transition-colors">
            <div className="bg-[rgba(112,112,112,0.1)] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
              <Microscope className="w-6 h-6 text-[#171717]" />
            </div>
            <h2 className="text-[30px] font-semibold leading-[39px] tracking-[0.0955px] text-[#171717] mb-4">
              Research
            </h2>
            <p className="text-[16px] leading-[26px] tracking-[-0.3125px] text-[#171717] mb-8">
              Interactive learning systems, VR/MR interaction, and AI-supported educational tools.
            </p>
            <p className="font-medium text-[14px] tracking-[-0.1504px] text-[#171717]">
              Explore →
            </p>
          </Link>

          <Link to="/design" className="bg-white border border-[rgba(231,229,228,0.5)] rounded-[24px] p-12 hover:border-[#3b82f6] transition-colors">
            <div className="bg-[rgba(112,112,112,0.1)] w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
              <Palette className="w-6 h-6 text-[#171717]" />
            </div>
            <h2 className="text-[30px] font-semibold leading-[39px] tracking-[0.0955px] text-[#171717] mb-4">
              Design
            </h2>
            <p className="text-[16px] leading-[26px] tracking-[-0.3125px] text-[#171717] mb-8">
              UX research, visual communication, motion design, and photography-informed thinking.
            </p>
            <p className="font-medium text-[14px] tracking-[-0.1504px] text-[#171717]">
              Explore →
            </p>
          </Link>
        </div>

        {/* Featured Work */}
        <div className="mb-16">
          <h2 className="text-[36px] font-semibold leading-[40px] tracking-[0.0091px] text-[#171717] mb-6">
            Featured Work
          </h2>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white border border-[rgba(231,229,228,0.5)] rounded-2xl p-8">
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

            <div className="bg-white border border-[rgba(231,229,228,0.5)] rounded-2xl p-8">
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

            <div className="bg-white border border-[rgba(231,229,228,0.5)] rounded-2xl p-8">
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
