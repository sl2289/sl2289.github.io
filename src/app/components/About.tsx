import { Mail, Github, Linkedin, GraduationCap, FileText, User } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const skills = {
    research: [
      "Qualitative Research",
      "Quantitative Analysis",
      "User Studies",
      "Ethnography",
      "Statistical Analysis",
      "Thematic Analysis",
    ],
    design: [
      "Figma",
      "Adobe Creative Suite",
      "Sketch",
      "Prototyping",
      "Design Systems",
      "Motion Design",
    ],
    frontend: [
      "React",
      "TypeScript",
      "HTML/CSS",
      "Tailwind",
      "D3.js",
      "Three.js",
    ],
    vr: [
      "Unity",
      "Unreal Engine",
      "Meta Quest SDK",
      "SteamVR",
      "Spatial UI Design",
      "C#",
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-8 py-24">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24 max-w-4xl"
      >
        <h1 className="text-6xl mb-8 font-semibold tracking-tight">About</h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-6 text-muted-foreground text-lg leading-relaxed"
        >
          <p>
            I am a PhD student in Human-Computer Interaction, exploring how people learn,
            interact, and create with emerging technologies. My research focuses on
            interactive learning systems, with particular emphasis on video-based tutorial
            learning, AI-assisted educational tools, and VR/MR interaction design.
          </p>
          <p>
            My path to HCI research began with photography and visual communication design.
            Working as a photographer taught me to observe carefully, to see how people
            interact with their environments, and to communicate through visual means.
            This foundation led me to pursue visual communication and motion design, where
            I became interested in how design decisions affect user experience and comprehension.
          </p>
          <p>
            The transition from design practice to UX research felt natural—I wanted to
            understand not just how to make things look good, but why certain designs work
            and how to systematically improve the way people interact with technology.
            This led me to pursue graduate studies in HCI, where I could combine rigorous
            research methods with design thinking and prototyping skills.
          </p>
          <p>
            Today, my work bridges design and research. I use design skills to create
            interactive prototypes and research tools, and I apply research methods to
            understand how people experience and learn from these systems. This hybrid
            background allows me to contribute both conceptual insights and practical
            design solutions to the field of human-computer interaction.
          </p>
        </motion.div>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-24"
      >
        <h2 className="text-3xl mb-10 font-semibold">Skills & Tools</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-card border border-border/50 rounded-2xl p-8 hover:border-border transition-all hover:shadow-lg"
          >
            <h3 className="mb-6 font-semibold">Research Methods</h3>
            <div className="flex flex-wrap gap-2">
              {skills.research.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-muted/50 text-sm rounded-xl cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="bg-card border border-border/50 rounded-2xl p-8 hover:border-border transition-all hover:shadow-lg"
          >
            <h3 className="mb-6 font-semibold">Design Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.design.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-muted/50 text-sm rounded-xl cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-card border border-border/50 rounded-2xl p-8 hover:border-border transition-all hover:shadow-lg"
          >
            <h3 className="mb-6 font-semibold">Frontend / Prototyping</h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-muted/50 text-sm rounded-xl cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="bg-card border border-border/50 rounded-2xl p-8 hover:border-border transition-all hover:shadow-lg"
          >
            <h3 className="mb-6 font-semibold">VR/MR Tools</h3>
            <div className="flex flex-wrap gap-2">
              {skills.vr.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-muted/50 text-sm rounded-xl cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="pb-24"
      >
        <h2 className="text-3xl mb-10 font-semibold">Contact & Links</h2>
        <div className="bg-card border border-border/50 rounded-2xl p-10">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Mail, text: "your.email@university.edu", href: "mailto:your.email@university.edu" },
              { icon: Github, text: "GitHub", href: "https://github.com/yourusername" },
              { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com/in/yourusername" },
              { icon: GraduationCap, text: "Google Scholar", href: "https://scholar.google.com/citations?user=yourid" },
              { icon: FileText, text: "Download CV", href: "/cv.pdf" },
            ].map((link) => (
              <a
                key={link.text}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-all p-4 rounded-xl hover:bg-muted/30"
              >
                <div className="w-10 h-10 bg-muted/50 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <link.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                </div>
                <span className="font-medium text-sm">{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
