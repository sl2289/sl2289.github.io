import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function HomeHero() {
  return (
    <div className="min-h-screen">
      {/* Full-Screen Hero */}
      <div className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/30 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm tracking-[0.4em] text-primary mb-8 uppercase font-semibold"
            >
              PhD Candidate — HCI & Design
            </motion.p>

            <h1 className="text-8xl md:text-9xl font-bold mb-8 leading-[0.9] tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block"
              >
                Building
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block text-muted-foreground"
              >
                the Future
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="block"
              >
                of Learning
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12"
            >
              Exploring how people learn, interact, and create with emerging technologies
              through the lens of design and rigorous research.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 justify-center"
            >
              <Link
                to="/research"
                className="px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-all hover:shadow-xl"
              >
                View Research
              </Link>
              <Link
                to="/design"
                className="px-8 py-4 border-2 border-border rounded-full font-semibold hover:border-foreground transition-all"
              >
                View Design Work
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs tracking-wider uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-8 py-32">
        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-5xl font-bold mb-16">Featured Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AutoCue: AI Visual Cue Generation",
                category: "AI Research",
                description: "Intelligent systems for software tutorial enhancement",
              },
              {
                title: "VR Learning Environments",
                category: "Spatial Computing",
                description: "Immersive training for complex procedural tasks",
              },
              {
                title: "Video-Based Software Learning",
                category: "UX Research",
                description: "Understanding learner breakdowns and device ecologies",
              },
              {
                title: "EdTech Platform Redesign",
                category: "Product Design",
                description: "Complete UX overhaul for 50K+ users",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-card border border-border rounded-3xl p-8 hover:border-foreground transition-all hover:shadow-2xl cursor-pointer"
              >
                <p className="text-xs text-primary tracking-wider uppercase font-semibold mb-4">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold mb-3 leading-tight">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Connect Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center py-24"
        >
          <h2 className="text-5xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or just want to chat about HCI and design?
          </p>
          <div className="flex gap-6 justify-center">
            <a
              href="mailto:your.email@university.edu"
              className="w-14 h-14 bg-card border border-border rounded-full flex items-center justify-center hover:border-foreground hover:shadow-lg transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-card border border-border rounded-full flex items-center justify-center hover:border-foreground hover:shadow-lg transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-card border border-border rounded-full flex items-center justify-center hover:border-foreground hover:shadow-lg transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
