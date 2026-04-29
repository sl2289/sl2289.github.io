import { Link } from "react-router";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "motion/react";

export function HomeSplit() {
  const projects = [
    { title: "AutoCue", year: "2026", type: "AI Research" },
    { title: "VR Learning Systems", year: "2025", type: "Spatial Computing" },
    { title: "Video-Based Learning", year: "2026", type: "UX Research" },
    { title: "EdTech Platform", year: "2025", type: "Product Design" },
  ];

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      {/* Left Side - Fixed */}
      <div className="bg-foreground text-background p-12 flex flex-col justify-between sticky top-0 h-screen">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-7xl font-bold mb-8 leading-[0.95]">
              HCI
              <br />
              Researcher
              <br />
              & Designer
            </h1>
            <p className="text-lg opacity-70 max-w-md leading-relaxed mb-12">
              Exploring interactive learning systems, VR/MR interaction, and AI-supported educational tools through design and research.
            </p>
            <div className="flex gap-4">
              <Link
                to="/about"
                className="px-6 py-3 bg-background text-foreground rounded-full text-sm font-medium hover:bg-background/90 transition-colors"
              >
                About Me
              </Link>
              <a
                href="mailto:contact@example.com"
                className="px-6 py-3 border border-background/20 rounded-full text-sm font-medium hover:bg-background/10 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm opacity-60">
            <Mail className="w-4 h-4" />
            <span>your.email@university.edu</span>
          </div>
          <p className="text-xs opacity-40">© 2026 — Available for collaboration</p>
        </div>
      </div>

      {/* Right Side - Scrollable */}
      <div className="bg-background p-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-sm tracking-wider text-muted-foreground mb-8 uppercase">
            Selected Work
          </h2>
          <div className="space-y-1">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group border-b border-border py-6 hover:border-foreground transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-1 group-hover:translate-x-2 transition-transform">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.type}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 gap-8"
        >
          <Link to="/research" className="group">
            <div className="aspect-square bg-muted rounded-2xl mb-4 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
              <span className="text-6xl font-bold opacity-10 group-hover:opacity-20 transition-opacity">
                R
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Research</h3>
            <p className="text-sm text-muted-foreground">Publications & Projects</p>
          </Link>

          <Link to="/design" className="group">
            <div className="aspect-square bg-muted rounded-2xl mb-4 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-accent/30 group-hover:bg-accent/50 transition-colors" />
              <span className="text-6xl font-bold opacity-10 group-hover:opacity-20 transition-opacity">
                D
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Design</h3>
            <p className="text-sm text-muted-foreground">Portfolio & Case Studies</p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
