import { Link } from 'react-router';

export default function DesignMRPage() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <div className="mx-auto max-w-[1360px] px-4 py-12 sm:px-6 md:px-10 lg:px-12 md:py-20 md:pt-[73px]">
        <Link to="/design" className="mb-6 inline-block text-[14px] font-medium tracking-[-0.1504px] text-[#737373] hover:text-[#171717] md:mb-8">
          ← Back to Design
        </Link>

        <h1 className="mb-6 text-[28px] font-semibold leading-tight tracking-[0.0091px] text-[#171717] md:mb-8 md:text-[36px] md:leading-[40px]">
          Mixed Reality
        </h1>
        <p className="mb-10 max-w-[672px] text-[16px] leading-7 tracking-[-0.2px] text-[#525252] md:mb-12 md:text-[18px] md:leading-[28px] md:tracking-[-0.4395px]">
          Immersive experiences and spatial computing projects.
        </p>

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
      </div>
    </div>
  );
}
