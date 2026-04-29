import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowUpRight, FlaskConical, Palette, User, Mail } from "lucide-react";

export function HomeBento() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-6xl font-bold mb-4">HCI Portfolio</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Researcher and designer exploring interactive systems and emerging technologies
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
          {/* Large Hero Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="col-span-12 md:col-span-8 row-span-2 bg-gradient-to-br from-primary to-primary/60 rounded-3xl p-10 text-white flex flex-col justify-between overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <p className="text-sm opacity-80 mb-4 tracking-wider uppercase">Featured Work</p>
              <h2 className="text-5xl font-bold mb-4 leading-tight">
                AI-Assisted Visual Cue
                <br />
                Generation
              </h2>
              <p className="text-lg opacity-90 max-w-lg">
                Developing intelligent systems for software tutorial videos to enhance learner comprehension
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 bg-white text-primary rounded-full font-medium hover:bg-white/90 transition-colors">
                View Project
              </button>
              <button className="px-6 py-3 border border-white/30 rounded-full font-medium hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Research Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/research"
              className="col-span-12 md:col-span-4 row-span-2 bg-card border border-border rounded-3xl p-8 hover:border-foreground transition-all hover:shadow-xl flex flex-col justify-between h-full group"
            >
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <FlaskConical className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-3">Research</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Interactive learning systems, VR/MR interaction design
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                Explore
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          {/* Design Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="col-span-12 md:col-span-4 row-span-2"
          >
            <Link
              to="/design"
              className="bg-card border border-border rounded-3xl p-8 hover:border-foreground transition-all hover:shadow-xl flex flex-col justify-between h-full group"
            >
              <div>
                <div className="w-12 h-12 bg-accent/50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-3">Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  UX research, visual communication, motion design
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                Explore
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          {/* About Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="col-span-6 md:col-span-4 row-span-1"
          >
            <Link
              to="/about"
              className="bg-muted/50 border border-border rounded-3xl p-6 hover:border-foreground transition-all hover:shadow-lg flex items-center justify-between h-full group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-foreground/5 rounded-xl flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <span className="font-semibold">About</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </Link>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45 }}
            className="col-span-6 md:col-span-4 row-span-1"
          >
            <a
              href="mailto:your.email@university.edu"
              className="bg-muted/50 border border-border rounded-3xl p-6 hover:border-foreground transition-all hover:shadow-lg flex items-center justify-between h-full group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-foreground/5 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-semibold">Contact</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </motion.div>

          {/* Stats/Info Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="col-span-4 md:col-span-2 row-span-1 bg-card border border-border rounded-2xl p-6"
          >
            <p className="text-3xl font-bold mb-1">5+</p>
            <p className="text-xs text-muted-foreground">Years Experience</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.55 }}
            className="col-span-4 md:col-span-2 row-span-1 bg-card border border-border rounded-2xl p-6"
          >
            <p className="text-3xl font-bold mb-1">10+</p>
            <p className="text-xs text-muted-foreground">Projects</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="col-span-4 md:col-span-2 row-span-1 bg-card border border-border rounded-2xl p-6"
          >
            <p className="text-3xl font-bold mb-1">3+</p>
            <p className="text-xs text-muted-foreground">Publications</p>
          </motion.div>

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.65 }}
            className="col-span-12 md:col-span-6 row-span-1 bg-secondary/30 border border-border rounded-2xl p-6"
          >
            <p className="text-sm font-semibold mb-3">Current Focus</p>
            <div className="flex flex-wrap gap-2">
              {["HCI", "VR/MR", "AI Learning", "UX Research"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-card border border-border rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
