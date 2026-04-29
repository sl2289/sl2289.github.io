import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, FlaskConical, Palette, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { HomeMinimal } from "./HomeMinimal";
import { HomeSplit } from "./HomeSplit";
import { HomeBento } from "./HomeBento";
import { HomeHero } from "./HomeHero";
import { HomeFigma } from "./HomeFigma";

export function Home() {
  const [selectedStyle, setSelectedStyle] = useState<"default" | "minimal" | "split" | "bento" | "hero" | "figma">("figma");

  // Style selector
  const StyleSelector = () => (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-card border border-border rounded-full shadow-2xl p-2 flex gap-2">
      <button
        onClick={() => setSelectedStyle("figma")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          selectedStyle === "figma"
            ? "bg-primary text-white"
            : "hover:bg-muted"
        }`}
      >
        Figma (Blue)
      </button>
      <button
        onClick={() => setSelectedStyle("default")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          selectedStyle === "default"
            ? "bg-foreground text-background"
            : "hover:bg-muted"
        }`}
      >
        Current
      </button>
      <button
        onClick={() => setSelectedStyle("minimal")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          selectedStyle === "minimal"
            ? "bg-foreground text-background"
            : "hover:bg-muted"
        }`}
      >
        Minimal
      </button>
      <button
        onClick={() => setSelectedStyle("split")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          selectedStyle === "split"
            ? "bg-foreground text-background"
            : "hover:bg-muted"
        }`}
      >
        Split
      </button>
      <button
        onClick={() => setSelectedStyle("bento")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          selectedStyle === "bento"
            ? "bg-foreground text-background"
            : "hover:bg-muted"
        }`}
      >
        Bento
      </button>
      <button
        onClick={() => setSelectedStyle("hero")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
          selectedStyle === "hero"
            ? "bg-foreground text-background"
            : "hover:bg-muted"
        }`}
      >
        Hero
      </button>
    </div>
  );

  // Render selected style
  if (selectedStyle === "figma") return <><HomeFigma /><StyleSelector /></>;
  if (selectedStyle === "minimal") return <><HomeMinimal /><StyleSelector /></>;
  if (selectedStyle === "split") return <><HomeSplit /><StyleSelector /></>;
  if (selectedStyle === "bento") return <><HomeBento /><StyleSelector /></>;
  if (selectedStyle === "hero") return <><HomeHero /><StyleSelector /></>;

  const featuredProjects = [
    {
      title: "AutoCue",
      description: "AI-assisted visual cue augmentation for software tutorial videos.",
      category: "AI-Assisted Learning",
      gradient: "from-emerald-500/10 to-teal-500/10",
    },
    {
      title: "Video-Based Software Learning",
      description: "Empirical study of learner breakdowns and device ecologies.",
      category: "UX Research",
      gradient: "from-green-500/10 to-lime-500/10",
    },
    {
      title: "VR/MR Learning Systems",
      description: "Immersive training and interaction design for complex tasks.",
      category: "Spatial Computing",
      gradient: "from-teal-500/10 to-cyan-500/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-6xl mx-auto px-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="pt-32 pb-24 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-medium text-primary mb-6 tracking-wide"
        >
          HCI RESEARCHER & DESIGNER
        </motion.div>
        <h1 className="text-7xl mb-10 leading-[1.1] tracking-tight font-semibold">
          Exploring how people{" "}
          <span className="text-muted-foreground">learn, interact,</span>
          <br />
          and create with emerging technologies
        </h1>
        <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl">
          Bridging design practice and research inquiry through interactive systems and human-centered investigation.
        </p>
      </motion.section>

      {/* Navigation Cards */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid md:grid-cols-2 gap-8 mb-32"
      >
        <Link
          to="/research"
          className="group relative bg-card border border-border/50 rounded-3xl p-12 hover:border-border transition-all duration-500 overflow-hidden block hover:shadow-2xl hover:shadow-black/5"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
            <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
              <FlaskConical className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl mb-4 font-semibold">Research</h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Interactive learning systems, VR/MR interaction, and AI-supported educational tools.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
              Explore
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>

        <Link
          to="/design"
          className="group relative bg-card border border-border/50 rounded-3xl p-12 hover:border-border transition-all duration-500 overflow-hidden block hover:shadow-2xl hover:shadow-black/5"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative">
            <div className="w-12 h-12 bg-accent/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/40 transition-colors">
              <Palette className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl mb-4 font-semibold">Design</h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              UX research, visual communication, motion design, and photography-informed thinking.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
              Explore
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-32"
      >
        <h2 className="text-4xl mb-12 font-semibold">Featured Work</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group bg-card border border-border/50 rounded-2xl p-8 hover:border-border transition-all duration-300 hover:shadow-xl hover:shadow-black/5 cursor-pointer"
            >
              <div className="text-xs text-primary mb-4 tracking-wider uppercase font-semibold">
                {project.category}
              </div>
              <h3 className="text-xl mb-3 font-semibold leading-tight">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Current Focus */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="pb-32"
      >
        <h3 className="text-2xl mb-8 font-semibold">Current Focus</h3>
        <div className="flex flex-wrap gap-3">
          {[
            "Human-Computer Interaction",
            "UX Research",
            "VR/MR Interaction",
            "AI-Supported Learning",
            "Software Tutorial Systems",
            "Video-Based Learning",
          ].map((topic, index) => (
            <motion.span
              key={topic}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.05 }}
              className="px-5 py-2.5 bg-card border border-border/50 rounded-full text-sm font-medium hover:border-border transition-all cursor-default"
            >
              {topic}
            </motion.span>
          ))}
        </div>
      </motion.section>

      <StyleSelector />
    </div>
  );
}
