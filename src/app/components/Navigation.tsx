import { Link, useLocation } from "react-router";
import { motion } from "motion/react";

export function Navigation() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/research", label: "Research" },
    { to: "/design", label: "Design" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(250,250,250,0.6)] backdrop-blur-xl border-b border-[rgba(231,229,228,0.5)]">
      <div className="max-w-[1152px] mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-base font-semibold tracking-tight text-foreground hover:text-primary transition-colors">
            Shengyang. L
          </Link>
          <div className="flex gap-10">
            {links.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative text-sm font-medium transition-colors"
                >
                  <motion.span
                    className={isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.15 }}
                  >
                    {link.label}
                  </motion.span>
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute -bottom-6 left-0 right-0 h-[2px] bg-primary"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
