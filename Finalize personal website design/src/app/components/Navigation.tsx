import { Link, useLocation } from 'react-router';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-[rgba(250,250,250,0.6)] sticky top-0 z-50 w-full border-b border-[rgba(231,229,228,0.5)]">
      <div className="flex items-center justify-between px-8 py-6 max-w-[1536px] mx-auto">
        <Link to="/" className="font-semibold text-[16px] text-[#171717] tracking-[-0.7125px]">
          Shengyang. L
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className="font-medium text-[14px] tracking-[-0.1504px] relative"
          >
            <span className={isActive('/') ? 'text-[#171717]' : 'text-[#737373]'}>Home</span>
            {isActive('/') && (
              <div className="absolute -bottom-[25px] left-0 right-0 h-[2px] bg-[#3b82f6]" />
            )}
          </Link>

          <Link
            to="/research"
            className="font-medium text-[14px] tracking-[-0.1504px] relative"
          >
            <span className={isActive('/research') ? 'text-[#171717]' : 'text-[#737373]'}>Research</span>
            {isActive('/research') && (
              <div className="absolute -bottom-[25px] left-0 right-0 h-[2px] bg-[#3b82f6]" />
            )}
          </Link>

          <Link
            to="/design"
            className="font-medium text-[14px] tracking-[-0.1504px] relative"
          >
            <span className={isActive('/design') ? 'text-[#171717]' : 'text-[#737373]'}>Design</span>
            {isActive('/design') && (
              <div className="absolute -bottom-[25px] left-0 right-0 h-[2px] bg-[#3b82f6]" />
            )}
          </Link>

          <Link
            to="/about"
            className="font-medium text-[14px] tracking-[-0.1504px] relative"
          >
            <span className={isActive('/about') ? 'text-[#171717]' : 'text-[#737373]'}>About</span>
            {isActive('/about') && (
              <div className="absolute -bottom-[25px] left-0 right-0 h-[2px] bg-[#3b82f6]" />
            )}
          </Link>
        </nav>
      </div>
    </div>
  );
}
