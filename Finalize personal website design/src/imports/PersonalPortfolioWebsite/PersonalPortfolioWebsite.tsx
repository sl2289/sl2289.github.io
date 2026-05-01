function Icon() {
  return (
    <div className="absolute left-[544px] size-[800px] top-0" data-name="Icon">
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
  return <div className="absolute bg-[rgba(219,234,254,0.1)] blur-[64px] left-[336px] rounded-[16777200px] size-[600px] top-[80px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[rgba(59,130,246,0.05)] blur-[64px] left-[508px] rounded-[16777200px] size-[500px] top-[305px]" data-name="Container" />;
}

function BackgroundTexture() {
  return (
    <div className="absolute h-[885px] left-0 overflow-clip top-0 w-[1344px]" data-name="BackgroundTexture">
      <Icon />
      <Container />
      <Container1 />
    </div>
  );
}

function PlaceholderForNavigation() {
  return <div className="h-[73px] shrink-0 w-full" data-name="Placeholder for Navigation" />;
}

function Heading() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] left-0 not-italic text-[#171717] text-[36px] top-[7px] tracking-[0.0091px] whitespace-nowrap">About Me</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[20px] h-[272px] items-start leading-[28px] not-italic relative shrink-0 text-[#525252] text-[18px] tracking-[-0.4395px] w-full" data-name="Container">
      <p className="relative shrink-0 w-full">I am a PhD student in Human-Computer Interaction, exploring how people learn, interact, and create with emerging technologies. My research focuses on interactive learning systems, with particular emphasis on video-based tutorial learning, AI-assisted educational tools, and VR/MR interaction design.</p>
      <p className="relative shrink-0 w-full">My path to HCI research began with photography and visual communication design. Working as a photographer taught me to observe carefully, to see how people interact with their environments, and to communicate through visual means. This foundation led me to pursue visual communication and motion design, where I became interested in how design decisions affect user experience and comprehension.</p>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[344px] items-start left-0 top-0 w-[800px]" data-name="Section">
      <Heading />
      <Container3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[40px] left-0 top-[383px] w-[800px]" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] left-0 not-italic text-[#171717] text-[36px] top-[0.5px] tracking-[0.0091px] whitespace-nowrap">Publications</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[25px] relative shrink-0 w-[688.914px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#171717] text-[20px] top-[-0.5px] tracking-[-0.4492px] whitespace-nowrap">AutoCue: Intelligent Visual Cue Generation for Software Tutorial Videos</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-[#f5f5f5] h-[30px] relative rounded-[16777200px] shrink-0 w-[59.086px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[13px] not-italic text-[#525252] text-[14px] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">2027</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[30px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#737373] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Shengyang Liu, [Co-authors]</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[24px] left-0 text-[#525252] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">In Preparation for CHI 2027</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[110px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#171717] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[36px] pt-[8px] relative size-full">
        <Container6 />
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[25px] relative shrink-0 w-[687.969px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#171717] text-[20px] top-[-0.5px] tracking-[-0.4492px] whitespace-nowrap">Understanding Learner Breakdowns in Video-Based Software Tutorials</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#f5f5f5] h-[30px] relative rounded-[16777200px] shrink-0 w-[60.031px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[13px] not-italic text-[#525252] text-[14px] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">2026</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[30px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Text1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#737373] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Shengyang Liu, [Co-authors]</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[24px] left-0 text-[#525252] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Under Review at CSCW 2026</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[110px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#171717] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[36px] pt-[8px] relative size-full">
        <Container8 />
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[25px] relative shrink-0 w-[688.227px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#171717] text-[20px] top-[-0.5px] tracking-[-0.4492px] whitespace-nowrap">Immersive Learning Environments for Technical Skill Acquisition</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#f5f5f5] h-[30px] relative rounded-[16777200px] shrink-0 w-[59.773px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[13px] not-italic text-[#525252] text-[14px] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">2025</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[30px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Text2 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#737373] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Shengyang Liu, [Co-authors]</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[24px] left-0 text-[#525252] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">VR Learning Workshop Proceedings</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[110px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#171717] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[36px] pt-[8px] relative size-full">
        <Container10 />
        <Paragraph4 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] h-[410px] items-start left-0 top-[455px] w-[800px]" data-name="Container">
      <Container5 />
      <Container7 />
      <Container9 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[40px] left-0 not-italic text-[#171717] text-[36px] top-[0.5px] tracking-[0.0091px] whitespace-nowrap">Teaching</p>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[25px] relative shrink-0 w-[662.703px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#171717] text-[20px] top-[-0.5px] tracking-[-0.4492px] whitespace-nowrap">HCI Methods</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#f5f5f5] h-[30px] relative rounded-[16777200px] shrink-0 w-[85.297px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[13px] not-italic text-[#525252] text-[14px] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">Fall 2025</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[30px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Text3 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#737373] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Teaching Assistant</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#525252] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[764px]">Assisted with lectures, graded assignments, and held weekly office hours for graduate-level HCI research methods course.</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[134px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#171717] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[36px] pt-[8px] relative size-full">
        <Container13 />
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[25px] relative shrink-0 w-[642.125px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#171717] text-[20px] top-[-0.5px] tracking-[-0.4492px] whitespace-nowrap">Interactive Systems Design</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#f5f5f5] h-[30px] relative rounded-[16777200px] shrink-0 w-[105.875px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[13px] not-italic text-[#525252] text-[14px] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">Spring 2026</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[30px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Text4 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#737373] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Teaching Assistant</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#525252] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[764px]">Supported undergraduate students in designing and prototyping interactive systems, provided feedback on design critiques.</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[134px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#171717] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[36px] pt-[8px] relative size-full">
        <Container15 />
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[25px] relative shrink-0 w-[662.555px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[25px] left-0 not-italic text-[#171717] text-[20px] top-[-0.5px] tracking-[-0.4492px] whitespace-nowrap">Introduction to UX Design</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-[#f5f5f5] h-[30px] relative rounded-[16777200px] shrink-0 w-[85.445px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[13px] not-italic text-[#525252] text-[14px] top-[5.5px] tracking-[-0.1504px] whitespace-nowrap">Fall 2024</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[30px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Text5 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#737373] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Teaching Assistant</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#525252] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Guided students through user research methods, wireframing, and usability testing fundamentals.</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[110px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#171717] border-l-4 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start pl-[36px] pt-[8px] relative size-full">
        <Container17 />
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[458px] items-start relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container14 />
      <Container16 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[530px] items-start left-0 top-[918px] w-[800px]" data-name="Section">
      <Heading5 />
      <Container11 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#737373] text-[14px] top-[0.5px] tracking-[0.5496px] uppercase whitespace-nowrap">On This Page</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[63.727px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#171717] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">About Me</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[20px] left-0 top-[32px] w-[80.938px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#737373] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Publications</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[20px] left-0 top-[64px] w-[59.617px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#737373] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Teaching</p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Navigation">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[26px] relative size-full">
        <Heading9 />
        <Navigation />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute content-stretch flex flex-col h-[313px] items-start left-[863px] top-[55px] w-[220px]" data-name="Sidebar">
      <Container18 />
    </div>
  );
}

function Heading10() {
  return <div className="h-[20px] shrink-0 w-[220px]" data-name="Heading 3" />;
}

function Link() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#525252] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Email</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#525252] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Google Scholar</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#525252] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">GitHub</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-[220px]" data-name="Container">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#737373] text-[14px] tracking-[0.5496px] uppercase whitespace-nowrap">Contact</p>
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[5px] items-start left-[-264px] top-[299px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
      <Heading10 />
      <Container20 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[1836px] relative shrink-0 w-[1016px]" data-name="Container">
      <Section />
      <Heading1 />
      <Container4 />
      <Section1 />
      <Sidebar />
      <Container19 />
      <div className="absolute bg-[#d9d9d9] left-[-268px] size-[224px] top-[56px]" />
    </div>
  );
}

function Research() {
  return (
    <div className="bg-[#f7f7f7] h-[1996px] relative shrink-0 w-full" data-name="Research">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center pt-[80px] px-[32px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Root() {
  return (
    <div className="bg-[#fafafa] content-stretch flex flex-col h-[1703px] items-center overflow-clip relative shrink-0 w-full" data-name="Root">
      <PlaceholderForNavigation />
      <Research />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col h-[885px] items-start left-0 top-0 w-[1344px]" data-name="Body">
      <Root />
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[98.391px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#171717] text-[16px] top-[-0.5px] tracking-[-0.7125px] whitespace-nowrap">Shengyang. L</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[38.992px]" data-name="Link">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#737373] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Home</p>
    </div>
  );
}

function Text6() {
  return <div className="absolute bg-[#3b82f6] h-[2px] left-[78.99px] top-[42px] w-[61.414px]" data-name="Text" />;
}

function Link5() {
  return (
    <div className="absolute h-[20px] left-[180.41px] top-0 w-[45.75px]" data-name="Link">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#737373] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Design</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[20px] left-[266.16px] top-0 w-[39.828px]" data-name="Link">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#737373] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">About</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[305.984px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Link4 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[78.99px] not-italic text-[#171717] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Research</p>
        <Text6 />
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link3 />
      <Container23 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start pt-[24px] px-[32px] relative size-full">
        <Container22 />
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="absolute bg-[rgba(250,250,250,0.6)] content-stretch flex flex-col h-[73px] items-start left-0 pb-px px-[96px] top-0 w-[1344px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border-[rgba(231,229,228,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Container21 />
    </div>
  );
}

export default function PersonalPortfolioWebsite() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="Personal Portfolio Website">
      <BackgroundTexture />
      <Body />
      <Navigation1 />
    </div>
  );
}