import svgPaths from "./svg-ryahfidsq1";

function Icon() {
  return (
    <div className="absolute left-[736px] size-[800px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 800 800">
        <g clipPath="url(#clip0_5_285)" id="Icon" opacity="0.03">
          <g id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_5_285">
            <rect fill="white" height="800" width="800" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[rgba(212,229,201,0.1)] blur-[64px] left-[384px] rounded-[16777200px] size-[600px] top-[80px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[rgba(45,80,22,0.05)] blur-[64px] left-[652px] rounded-[16777200px] size-[500px] top-[305px]" data-name="Container" />;
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

function Heading() {
  return (
    <div className="absolute h-[316.781px] left-0 top-[172px] w-[1024px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[0] left-0 text-[#171717] text-[72px] top-px tracking-[-1.677px] w-[1024px]">
        <span className="leading-[79.2px]">Exploring how people</span>
        <span className="leading-[79.2px] text-[#737373]">{` interact`}</span>
        <span className="leading-[79.2px]">{` with emerging technologies`}</span>
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.5px] left-0 text-[#737373] text-[20px] top-[179px] tracking-[-0.4492px] w-[672px]">Bridging design practice and research inquiry through interactive systems and human-centered investigation.</p>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[689.781px] left-[32px] not-italic top-0 w-[1024px]" data-name="Section">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#2d5016] text-[14px] top-[128.5px] tracking-[0.1996px] whitespace-nowrap">{`HCI RESEARCHER & DESIGNER`}</p>
      <Heading />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p142aa200} id="Vector" stroke="var(--stroke-0, #2D5016)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6.453 15H17.547" id="Vector_2" stroke="var(--stroke-0, #2D5016)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8.5 2H15.5" id="Vector_3" stroke="var(--stroke-0, #2D5016)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(45,80,22,0.1)] content-stretch flex items-center justify-center left-0 px-[12px] rounded-[16px] size-[48px] top-0" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-0 top-[72px] w-[430px]" data-name="Heading 2">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] min-w-px not-italic relative text-[#171717] text-[30px] tracking-[0.0955px]">Research</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[52px] left-0 top-[124px] w-[430px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#737373] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[430px]">Interactive learning systems, VR/MR interaction, and AI-supported educational tools.</p>
    </div>
  );
}

function Icon2() {
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

function Container3() {
  return (
    <div className="absolute h-[20px] left-0 top-[208px] w-[430px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#171717] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Explore</p>
      <Icon2 />
    </div>
  );
}

function Home1() {
  return (
    <div className="h-[228px] relative shrink-0 w-full" data-name="Home">
      <Container2 />
      <Heading1 />
      <Paragraph />
      <Container3 />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-white h-[326px] left-0 rounded-[24px] top-0 w-[528px]" data-name="Link">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px pt-[49px] px-[49px] relative rounded-[inherit] size-full">
        <Home1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(231,229,228,0.5)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p2476dfc0} fill="var(--fill-0, #2D5016)" id="Vector" stroke="var(--stroke-0, #2D5016)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pf6f2500} fill="var(--fill-0, #2D5016)" id="Vector_2" stroke="var(--stroke-0, #2D5016)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f047a30} fill="var(--fill-0, #2D5016)" id="Vector_3" stroke="var(--stroke-0, #2D5016)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p7aea480} fill="var(--fill-0, #2D5016)" id="Vector_4" stroke="var(--stroke-0, #2D5016)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3eb1d9c0} id="Vector_5" stroke="var(--stroke-0, #2D5016)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(212,229,201,0.3)] content-stretch flex items-center justify-center left-0 px-[12px] rounded-[16px] size-[48px] top-0" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-start left-0 top-[72px] w-[430px]" data-name="Heading 2">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] min-w-px not-italic relative text-[#171717] text-[30px] tracking-[0.0955px]">Design</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[52px] left-0 top-[124px] w-[430px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#737373] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[430px]">UX research, visual communication, motion design, and photography-informed thinking.</p>
    </div>
  );
}

function Icon4() {
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

function Container5() {
  return (
    <div className="absolute h-[20px] left-0 top-[208px] w-[430px]" data-name="Container">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#171717] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Explore</p>
      <Icon4 />
    </div>
  );
}

function Home2() {
  return (
    <div className="h-[228px] relative shrink-0 w-full" data-name="Home">
      <Container4 />
      <Heading2 />
      <Paragraph1 />
      <Container5 />
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute bg-white h-[326px] left-[560px] rounded-[24px] top-0 w-[528px]" data-name="Link">
      <div className="content-stretch flex flex-col items-start overflow-clip pb-px pt-[49px] px-[49px] relative rounded-[inherit] size-full">
        <Home2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(231,229,228,0.5)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute h-[326px] left-[32px] top-[460px] w-[1088px]" data-name="Section">
      <Link />
      <Link1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] left-0 not-italic text-[#171717] text-[36px] top-[0.5px] tracking-[0.0091px] whitespace-nowrap">Featured Work</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[101px] w-[280.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#737373] text-[14px] top-px tracking-[-0.1504px] w-[281px]">AI-assisted visual cue augmentation for software tutorial videos.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white border border-[rgba(231,229,228,0.5)] border-solid h-[205.5px] left-0 rounded-[16px] top-0 w-[346.664px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[32px] not-italic text-[#2d5016] text-[12px] top-[33px] tracking-[0.6px] uppercase whitespace-nowrap">LLM Application</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-[32px] not-italic text-[#171717] text-[20px] top-[63.5px] tracking-[-0.4492px] whitespace-nowrap">AutoCue</p>
      <Paragraph2 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[50px] left-[32px] top-[64px] w-[280.664px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#171717] text-[20px] top-[-0.5px] tracking-[-0.4492px] w-[281px]">Video-Based Software Learning</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[126px] w-[280.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#737373] text-[14px] top-px tracking-[-0.1504px] w-[281px]">Empirical study of learner breakdowns and device ecologies.</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white border border-[rgba(231,229,228,0.5)] border-solid h-[205.5px] left-[370.66px] rounded-[16px] top-0 w-[346.664px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[32px] not-italic text-[#2d5016] text-[12px] top-[33px] tracking-[0.6px] uppercase whitespace-nowrap">UX Research</p>
      <Heading4 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[101px] w-[280.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#737373] text-[14px] top-px tracking-[-0.1504px] w-[281px]">Immersive training and interaction design for complex tasks.</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-white border border-[rgba(231,229,228,0.5)] border-solid h-[205.5px] left-[741.33px] rounded-[16px] top-0 w-[346.664px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] left-[32px] not-italic text-[#2d5016] text-[12px] top-[33px] tracking-[0.6px] uppercase whitespace-nowrap">Spatial Computing</p>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-[32px] not-italic text-[#171717] text-[20px] top-[63.5px] tracking-[-0.4492px] whitespace-nowrap">VR/MR Learning Systems</p>
      <Paragraph4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[205.5px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[293.5px] items-start left-[32px] top-[814px] w-[1088px]" data-name="Section">
      <Heading3 />
      <Container6 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#171717] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">Current Focus</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute bg-white border border-[rgba(231,229,228,0.5)] border-solid h-[42px] left-0 rounded-[4px] top-0 w-[236.336px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[20px] not-italic text-[#171717] text-[14px] top-[10.5px] tracking-[-0.1504px] whitespace-nowrap">Human-Computer Interaction</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute bg-white border border-[rgba(231,229,228,0.5)] border-solid h-[42px] left-[248.34px] rounded-[4px] top-0 w-[126.969px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[20px] not-italic text-[#171717] text-[14px] top-[10.5px] tracking-[-0.1504px] whitespace-nowrap">UX Research</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute bg-white border border-[rgba(231,229,228,0.5)] border-solid h-[42px] left-[387.3px] rounded-[4px] top-0 w-[161.406px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[20px] not-italic text-[#171717] text-[14px] top-[10.5px] tracking-[-0.1504px] whitespace-nowrap">VR/MR Interaction</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute bg-white border border-[rgba(231,229,228,0.5)] border-solid h-[42px] left-[560.71px] rounded-[4px] top-0 w-[192.773px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[20px] not-italic text-[#171717] text-[14px] top-[10.5px] tracking-[-0.1504px] whitespace-nowrap">AI-Supported Learning</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute bg-white border border-[rgba(231,229,228,0.5)] border-solid h-[42px] left-[765.48px] rounded-[4px] top-0 w-[214.977px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[20px] not-italic text-[#171717] text-[14px] top-[10.5px] tracking-[-0.1504px] whitespace-nowrap">Software Tutorial Systems</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute bg-white border border-[rgba(231,229,228,0.5)] border-solid h-[42px] left-0 rounded-[4px] top-[54px] w-[188.367px]" data-name="Text">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[20px] not-italic text-[#171717] text-[14px] top-[10.5px] tracking-[-0.1504px] whitespace-nowrap">Video-Based Learning</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
      <Text4 />
      <Text5 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[288px] items-start left-[32px] top-[1122px] w-[1088px]" data-name="Section">
      <Heading5 />
      <Container10 />
    </div>
  );
}

function Home() {
  return (
    <div className="absolute h-[1410px] left-[192px] top-[73px] w-[1152px]" data-name="Home">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

function Root() {
  return (
    <div className="bg-[#fafaf9] h-[1483px] relative shrink-0 w-full" data-name="Root">
      <Home />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col h-[885px] items-start left-0 top-0 w-[1536px]" data-name="Body">
      <Root />
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[61.289px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#171717] text-[16px] top-[-0.5px] tracking-[-0.7125px] whitespace-nowrap">Shengyang. L</p>
      </div>
    </div>
  );
}

function Text6() {
  return <div className="absolute bg-[#2d5016] h-[2px] left-0 top-[42px] w-[38.992px]" data-name="Text" />;
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

function Container13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[305.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#171717] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Home</p>
        <Text6 />
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link2 />
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[32px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute bg-[rgba(250,250,249,0.6)] content-stretch flex flex-col h-[73px] items-start left-0 pb-px px-[192px] top-0 w-[1536px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[rgba(231,229,228,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Container11 />
    </div>
  );
}

export default function PersonalPortfolioWebsite() {
  return (
    <div className="bg-[#fafaf9] relative size-full" data-name="Personal Portfolio Website">
      <BackgroundTexture />
      <Body />
      <Navigation />
    </div>
  );
}