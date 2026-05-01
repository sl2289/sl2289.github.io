import svgPaths from "./svg-dxariiqsmg";

function Icon() {
  return (
    <div className="absolute left-[736px] size-[800px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 800 800">
        <g clipPath="url(#clip0_1_136)" id="Icon" opacity="0.03">
          <g id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_136">
            <rect fill="white" height="800" width="800" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[rgba(219,234,254,0.1)] blur-[64px] left-[384px] rounded-[16777200px] size-[600px] top-[80px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[rgba(59,130,246,0.05)] blur-[64px] left-[652px] rounded-[16777200px] size-[500px] top-[305px]" data-name="Container" />;
}

function BackgroundTexture() {
  return (
    <div className="absolute h-[885px] left-0 overflow-clip top-0 w-[1536px]" data-name="BackgroundTexture">
      <Icon />
      <Container />
      <Container1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[800px] opacity-3 overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Vector" />
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[736px] size-[800px] top-0" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Container3() {
  return <div className="absolute blur-[64px] left-[384px] rounded-[16777200px] size-[600px] top-[80px]" style={{ backgroundImage: "linear-gradient(135deg, rgba(219, 234, 254, 0.4) 0%, rgba(0, 0, 0, 0) 100%)" }} data-name="Container" />;
}

function Container4() {
  return <div className="absolute blur-[64px] left-[652px] rounded-[16777200px] size-[500px] top-[305px]" style={{ backgroundImage: "linear-gradient(135deg, rgba(43, 127, 255, 0.05) 0%, rgba(0, 0, 0, 0) 100%)" }} data-name="Container" />;
}

function HomeFigma() {
  return (
    <div className="absolute h-[885px] left-0 overflow-clip top-0 w-[1536px]" data-name="HomeFigma">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[158.391px] left-0 top-[172px] w-[1024px]" data-name="Heading 1">
      <div className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 not-italic text-[#171717] text-[0px] top-px tracking-[-1.677px] whitespace-nowrap">
        <p className="mb-0 text-[55px]">
          <span className="leading-[79.2px]">{`Exploring how people `}</span>
          <span className="leading-[79.2px] text-[#737373]">interact</span>
        </p>
        <p className="leading-[79.2px] text-[55px]">with emerging technologies</p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[483.391px] left-[32px] top-[73px] w-[1088px]" data-name="Section">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#707070] text-[14px] top-[128.5px] tracking-[2.6496px] uppercase whitespace-nowrap">{`HCI RESEARCHER & DESIGNER`}</p>
      <Heading />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-0 not-italic text-[#737373] text-[20px] top-[353.89px] tracking-[-0.4492px] w-[672px]">Bridging design practice and research inquiry through interactive systems and human-centered investigation.</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p142aa200} id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.453 15H17.547" id="Vector_2" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.5 2H15.5" id="Vector_3" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HomeFigma2() {
  return (
    <div className="absolute bg-[rgba(112,112,112,0.1)] content-stretch flex items-center justify-center left-[48px] px-[12px] rounded-[16px] size-[48px] top-[48px]" data-name="HomeFigma">
      <Icon2 />
    </div>
  );
}

function HomeFigma3() {
  return (
    <div className="absolute h-[39px] left-[48px] top-[120px] w-[430px]" data-name="HomeFigma">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[39px] left-0 not-italic text-[#171717] text-[30px] top-[0.5px] tracking-[0.0955px] whitespace-nowrap">Research</p>
    </div>
  );
}

function HomeFigma4() {
  return (
    <div className="absolute h-[52px] left-[48px] top-[175px] w-[430px]" data-name="HomeFigma">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#171717] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[430px]">Interactive learning systems, VR/MR interaction, and AI-supported educational tools.</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[57.41px] size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function HomeFigma5() {
  return (
    <div className="absolute h-[20px] left-[48px] top-[259px] w-[430px]" data-name="HomeFigma">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#171717] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Explore</p>
      <Icon3 />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-white border border-[rgba(231,229,228,0.5)] border-solid h-[329px] left-0 rounded-[24px] top-0 w-[528px]" data-name="Link">
      <HomeFigma2 />
      <HomeFigma3 />
      <HomeFigma4 />
      <HomeFigma5 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2476dfc0} fill="var(--fill-0, #171717)" id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pf6f2500} fill="var(--fill-0, #171717)" id="Vector_2" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f047a30} fill="var(--fill-0, #171717)" id="Vector_3" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p7aea480} fill="var(--fill-0, #171717)" id="Vector_4" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3eb1d9c0} id="Vector_5" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HomeFigma6() {
  return (
    <div className="absolute bg-[rgba(112,112,112,0.1)] content-stretch flex items-center justify-center left-[48px] px-[12px] rounded-[16px] size-[48px] top-[48px]" data-name="HomeFigma">
      <Icon4 />
    </div>
  );
}

function HomeFigma7() {
  return (
    <div className="absolute h-[39px] left-[48px] top-[120px] w-[430px]" data-name="HomeFigma">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[39px] left-0 not-italic text-[#171717] text-[30px] top-[0.5px] tracking-[0.0955px] whitespace-nowrap">Design</p>
    </div>
  );
}

function HomeFigma8() {
  return (
    <div className="absolute h-[52px] left-[48px] top-[175px] w-[430px]" data-name="HomeFigma">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#171717] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[430px]">UX research, visual communication, motion design, and photography-informed thinking.</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[57.41px] size-[16px] top-[2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #171717)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function HomeFigma9() {
  return (
    <div className="absolute h-[20px] left-[48px] top-[259px] w-[430px]" data-name="HomeFigma">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#171717] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Explore</p>
      <Icon5 />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-white border border-[rgba(231,229,228,0.5)] border-solid h-[329px] left-[560px] rounded-[24px] top-0 w-[528px]" data-name="Link">
      <HomeFigma6 />
      <HomeFigma7 />
      <HomeFigma8 />
      <HomeFigma9 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[#f7f7f7] h-[329px] left-[24px] top-[540px] w-[1088px]" data-name="Section">
      <Link />
      <Link1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] left-0 not-italic text-[#171717] text-[36px] top-[0.5px] tracking-[0.0091px] whitespace-nowrap">Featured Work</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[104px] w-[280.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#737373] text-[14px] top-px tracking-[-0.1504px] w-[281px]">AI-assisted visual cue augmentation for software tutorial videos.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white border border-[rgba(231,229,228,0.5)] border-solid h-[211.5px] left-0 rounded-[16px] top-0 w-[346.664px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[32px] not-italic text-[#707070] text-[12px] top-[33px] tracking-[0.6px] uppercase whitespace-nowrap">LLM Application</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[32px] not-italic text-[#171717] text-[20px] top-[64px] tracking-[-0.4492px] whitespace-nowrap">AutoCue</p>
      <Paragraph />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[56px] left-[32px] top-[64px] w-[280.664px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#171717] text-[20px] top-0 tracking-[-0.4492px] w-[281px]">Video-Based Software Learning</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[132px] w-[280.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#737373] text-[14px] top-px tracking-[-0.1504px] w-[281px]">Empirical study of learner breakdowns and device ecologies.</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white border border-[rgba(231,229,228,0.5)] border-solid h-[211.5px] left-[370.66px] rounded-[16px] top-0 w-[346.664px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[32px] not-italic text-[#707070] text-[12px] top-[33px] tracking-[0.6px] uppercase whitespace-nowrap">UX Research</p>
      <Heading2 />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[104px] w-[280.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#737373] text-[14px] top-px tracking-[-0.1504px] w-[281px]">Immersive training and interaction design for complex tasks.</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-white border border-[rgba(231,229,228,0.5)] border-solid h-[211.5px] left-[741.33px] rounded-[16px] top-0 w-[346.664px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[32px] not-italic text-[#707070] text-[12px] top-[33px] tracking-[0.6px] uppercase whitespace-nowrap">Spatial Computing</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-[32px] not-italic text-[#171717] text-[20px] top-[64px] tracking-[-0.4492px] whitespace-nowrap">VR/MR Learning Systems</p>
      <Paragraph2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[211.5px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23px] h-[299.5px] items-start left-[24px] top-[894px] w-[1088px]" data-name="Section">
      <Heading1 />
      <Container6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[1236px] relative shrink-0 w-full" data-name="Container">
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}

function HomeFigma1() {
  return (
    <div className="absolute bg-[#f7f7f7] content-stretch flex flex-col h-[1236px] items-start left-0 px-[192px] top-[73px] w-[1536px]" data-name="HomeFigma">
      <Container5 />
    </div>
  );
}

function Root() {
  return (
    <div className="bg-[#f7f7f7] h-[1309px] relative shrink-0 w-full" data-name="Root">
      <HomeFigma1 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col h-[885px] items-start left-0 top-[-146px] w-[1536px]" data-name="Body">
      <Root />
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[98.391px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#171717] text-[16px] top-[-0.5px] tracking-[-0.7125px] whitespace-nowrap">Shengyang. L</p>
      </div>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#3b82f6] h-[2px] left-0 top-[42px] w-[38.992px]" data-name="Text" />;
}

function Link3() {
  return (
    <div className="absolute h-[20px] left-[78.99px] top-0 w-[61.414px]" data-name="Link">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#737373] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Research</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[20px] left-[180.41px] top-0 w-[45.75px]" data-name="Link">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#737373] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Design</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[20px] left-[266.16px] top-0 w-[39.828px]" data-name="Link">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#737373] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">About</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[305.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#171717] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Home</p>
        <Text />
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link2 />
      <Container12 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[32px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-[rgba(250,250,250,0.6)] content-stretch flex flex-col h-[73px] items-start left-0 pb-px px-[192px] top-0 w-[1536px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[rgba(231,229,228,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Container10 />
    </div>
  );
}

export default function PersonalPortfolioWebsiteLandingPage() {
  return (
    <div className="bg-[#f7f7f7] relative size-full" data-name="Personal Portfolio Website_LandingPage">
      <BackgroundTexture />
      <HomeFigma />
      <Body />
      <Navigation />
    </div>
  );
}