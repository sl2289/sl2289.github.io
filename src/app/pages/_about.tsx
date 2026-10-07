export default function AboutPage() {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <div className="mx-auto max-w-[800px] px-4 py-12 sm:px-6 md:px-8 md:py-20 md:pt-[73px]">
        <div className="space-y-10 md:space-y-12">
          <div>
            <h1 className="mb-6 text-[28px] font-semibold leading-tight tracking-[0.0091px] text-[#171717] md:mb-8 md:text-[36px] md:leading-[40px]">
              About
            </h1>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-[20px] font-semibold leading-[25px] tracking-[-0.4492px] text-[#171717] mb-3">
                Shengyang Liu
              </h2>
              <p className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#737373]">
                PhD Student in Human-Computer Interaction
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-[16px] leading-7 tracking-[-0.2px] text-[#525252] md:text-[18px] md:leading-[28px] md:tracking-[-0.4395px]">
                I explore how people learn, interact, and create with emerging technologies. My research focuses on interactive learning systems, with emphasis on video-based tutorial learning, AI-assisted educational tools, and VR/MR interaction design.
              </p>

              <p className="text-[16px] leading-7 tracking-[-0.2px] text-[#525252] md:text-[18px] md:leading-[28px] md:tracking-[-0.4395px]">
                My background in photography and visual communication design informs my approach to HCI research, bringing a keen eye for observation and visual storytelling to the study of human-computer interaction.
              </p>
            </div>
          </div>

          <div className="pt-8 border-t-2 border-[#e5e5e5]">
            <h3 className="font-semibold text-[14px] tracking-[0.5496px] uppercase text-[#707070] mb-4">
              Research Interests
            </h3>
            <ul className="space-y-2">
              <li className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#525252]">
                Interactive Learning Systems
              </li>
              <li className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#525252]">
                VR/MR Interaction Design
              </li>
              <li className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#525252]">
                AI-Assisted Educational Tools
              </li>
              <li className="text-[16px] leading-[24px] tracking-[-0.3125px] text-[#525252]">
                Video-Based Learning
              </li>
            </ul>
          </div>

          <div className="pt-8 border-t-2 border-[#e5e5e5]">
            <h3 className="font-semibold text-[14px] tracking-[0.5496px] uppercase text-[#707070] mb-4">
              Contact
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:your.email@university.edu"
                className="block text-[16px] leading-[24px] tracking-[-0.3125px] text-[#525252] hover:text-[#171717] transition-colors"
              >
                Email
              </a>
              <a
                href="#"
                className="block text-[16px] leading-[24px] tracking-[-0.3125px] text-[#525252] hover:text-[#171717] transition-colors"
              >
                Google Scholar
              </a>
              <a
                href="#"
                className="block text-[16px] leading-[24px] tracking-[-0.3125px] text-[#525252] hover:text-[#171717] transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="block text-[16px] leading-[24px] tracking-[-0.3125px] text-[#525252] hover:text-[#171717] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
