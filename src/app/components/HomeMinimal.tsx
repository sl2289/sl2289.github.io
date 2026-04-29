import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export function HomeMinimal() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="max-w-5xl w-full">
        {/* Minimal Text-Focused */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-32"
        >
          <p className="text-sm tracking-[0.3em] text-muted-foreground mb-8 uppercase">
            Portfolio 2026
          </p>
          <h1 className="text-8xl leading-[0.9] mb-12 tracking-tight font-bold">
            HCI
            <br />
            <span className="text-muted-foreground/40">Research</span>
            <br />
            & Design
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
            Exploring how people learn, interact, and create with emerging technologies.
            Bridging practice and inquiry.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 gap-4 max-w-2xl"
        >
          <Link
            to="/research"
            className="group border-t border-border pt-6 pb-8 hover:border-foreground transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-semibold">Research</h3>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <p className="text-sm text-muted-foreground">
              Interactive systems, VR/MR, AI-assisted learning
            </p>
          </Link>

          <Link
            to="/design"
            className="group border-t border-border pt-6 pb-8 hover:border-foreground transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-semibold">Design</h3>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <p className="text-sm text-muted-foreground">
              UX research, visual communication, motion
            </p>
          </Link>

          <Link
            to="/about"
            className="group border-t border-border pt-6 pb-8 hover:border-foreground transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-semibold">About</h3>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <p className="text-sm text-muted-foreground">
              Background, skills, contact
            </p>
          </Link>

          <a
            href="mailto:contact@example.com"
            className="group border-t border-border pt-6 pb-8 hover:border-foreground transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-2xl font-semibold">Contact</h3>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
            <p className="text-sm text-muted-foreground">
              Get in touch
            </p>
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-32 pt-8 border-t border-border"
        >
          <div className="flex justify-between text-xs text-muted-foreground">
            <p>Currently PhD Candidate at [University]</p>
            <p>Based in [Location]</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
