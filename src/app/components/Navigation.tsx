import { Link, useLocation } from 'react-router';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <style>{`
        @keyframes nav-underline-sway {
          0% { transform: translateX(0); }
          20% { transform: translateX(-5px); }
          45% { transform: translateX(4px); }
          70% { transform: translateX(-2px); }
          100% { transform: translateX(0); }
        }
      `}</style>
      <div className="bg-[rgba(250,250,250,0.6)] sticky top-0 z-50 w-full border-b border-[rgba(231,229,228,0.5)]">
      <div className="mx-auto flex max-w-[1536px] flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-6">
        <Link to="/" className="font-semibold text-[16px] text-[#171717] tracking-[-0.7125px]">
          Shengyang. L
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-6 md:gap-8">
          <Link
            to="/"
            className="font-medium text-[14px] tracking-[-0.1504px] relative"
          >
            <span className={isActive('/') ? 'text-[#171717]' : 'text-[#737373]'}>Home</span>
            {isActive('/') && (
              <div className="absolute -bottom-[8px] left-0 right-0 h-[2px] bg-[#3b82f6] [animation:nav-underline-sway_0.36s_ease-out] md:-bottom-[25px]" />
            )}
          </Link>

          <Link
            to="/research"
            className="font-medium text-[14px] tracking-[-0.1504px] relative"
          >
            <span className={isActive('/research') ? 'text-[#171717]' : 'text-[#737373]'}>Research</span>
            {isActive('/research') && (
              <div className="absolute -bottom-[8px] left-0 right-0 h-[2px] bg-[#3b82f6] [animation:nav-underline-sway_0.36s_ease-out] md:-bottom-[25px]" />
            )}
          </Link>

          <Link
            to="/design"
            className="font-medium text-[14px] tracking-[-0.1504px] relative"
          >
            <span className={isActive('/design') ? 'text-[#171717]' : 'text-[#737373]'}>Design</span>
            {isActive('/design') && (
              <div className="absolute -bottom-[8px] left-0 right-0 h-[2px] bg-[#3b82f6] [animation:nav-underline-sway_0.36s_ease-out] md:-bottom-[25px]" />
            )}
          </Link>

          <Link
            to="/about"
            className="font-medium text-[14px] tracking-[-0.1504px] relative"
          >
            <span className={isActive('/about') ? 'text-[#171717]' : 'text-[#737373]'}>About</span>
            {isActive('/about') && (
              <div className="absolute -bottom-[8px] left-0 right-0 h-[2px] bg-[#3b82f6] [animation:nav-underline-sway_0.36s_ease-out] md:-bottom-[25px]" />
            )}
          </Link>
        </nav>
      </div>
      </div>
    </>
  );
}
