import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Palette, Sparkles, Camera, MonitorPlay } from "lucide-react";

export function Design() {
  const caseStudies = [
    {
      title: "EdTech Platform Redesign",
      role: "Lead UX Designer",
      description:
        "Complete redesign of an educational technology platform serving 50K+ users. Conducted user research, created interaction flows, and delivered high-fidelity prototypes.",
      tags: ["UX Research", "Interaction Design", "Prototyping"],
    },
    {
      title: "VR Training Interface",
      role: "Interaction Designer",
      description:
        "Designed spatial interaction patterns and UI components for a VR-based technical training system, balancing immersion with usability.",
      tags: ["VR/MR Design", "Spatial UI", "User Testing"],
    },
    {
      title: "Mobile Learning App",
      role: "Product Designer",
      description:
        "End-to-end product design for a mobile learning companion app, from concept sketches through final implementation handoff.",
      tags: ["Mobile Design", "Visual Design", "Design Systems"],
    },
  ];

  const visualProjects = [
    {
      title: "Academic Conference Branding",
      description: "Visual identity and conference materials for HCI symposium",
    },
    {
      title: "Research Poster Series",
      description: "Data visualization and layout design for academic presentations",
    },
    {
      title: "Motion Graphics Explainers",
      description: "Animated videos explaining complex research concepts",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 py-24">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24"
      >
        <h1 className="text-6xl mb-6 font-semibold tracking-tight">Design</h1>
        <p className="text-muted-foreground text-xl max-w-3xl leading-relaxed">
          UX research, interaction design, visual communication, and photography-informed thinking—connecting design practice with research inquiry.
        </p>
      </motion.section>

      {/* UX Case Studies */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-24"
      >
        <h2 className="text-3xl mb-12 font-semibold">UX Case Studies</h2>
        <div className="space-y-10">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-card border border-border/50 rounded-3xl overflow-hidden hover:border-border transition-all hover:shadow-xl hover:shadow-black/5"
            >
              <div className="relative aspect-[2/1] bg-gradient-to-br from-muted to-accent/10 flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src=""
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="p-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold">{study.title}</h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4 px-4 py-1.5 bg-muted/50 rounded-full font-medium">
                    {study.role}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 bg-muted/50 text-sm rounded-xl cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Visual Communication */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-24"
      >
        <h2 className="text-3xl mb-12 font-semibold">Visual Communication</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {visualProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-border transition-all hover:shadow-lg cursor-pointer"
            >
              <div className="relative aspect-square bg-gradient-to-br from-muted to-accent/10 flex items-center justify-center overflow-hidden">
                <ImageWithFallback
                  src=""
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Motion & Interaction Design */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mb-24"
      >
        <h2 className="text-3xl mb-8 font-semibold">Motion & Interaction</h2>
        <div className="bg-card border border-border/50 rounded-3xl p-10 hover:border-border transition-all">
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Exploring animation and micro-interactions to enhance usability and delight. Work includes prototype transitions, loading states, onboarding flows, and explanatory animations for research dissemination.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative aspect-video bg-gradient-to-br from-muted to-accent/10 rounded-2xl flex items-center justify-center overflow-hidden cursor-pointer">
              <ImageWithFallback
                src=""
                alt="Motion design example 1"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="group relative aspect-video bg-gradient-to-br from-accent/10 to-secondary/30 rounded-2xl flex items-center justify-center overflow-hidden cursor-pointer">
              <ImageWithFallback
                src=""
                alt="Motion design example 2"
                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Photography Background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="pb-24"
      >
        <h2 className="text-3xl mb-8 font-semibold">Photography</h2>
        <div className="bg-card border border-border/50 rounded-3xl p-10 hover:border-border transition-all">
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Photography training informs visual thinking, composition, and attention to detail throughout design work. Experience in portrait, documentary, and editorial photography contributes to a strong foundation in visual storytelling.
          </p>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="group aspect-[3/4] bg-gradient-to-br from-muted to-accent/10 rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-all"
              >
                <ImageWithFallback
                  src=""
                  alt={`Photography sample ${i}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
