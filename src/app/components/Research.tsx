import { motion } from "motion/react";
import { BookOpen, Users, Microscope, Award } from "lucide-react";

export function Research() {
  const researchInterests = [
    "Interactive Learning Systems",
    "VR/MR Interaction Design",
    "AI-Assisted Learning Tools",
    "Video-Based Tutorial Learning",
    "User Experience Research",
    "Multimodal Interaction",
  ];

  const projects = [
    {
      title: "AutoCue: AI-Assisted Visual Cue Augmentation",
      description:
        "Developing intelligent systems that automatically generate and position visual cues in software tutorial videos to enhance learner attention and comprehension.",
      role: "Lead Researcher",
      methods: ["User Studies", "Machine Learning", "Eye Tracking", "Video Analysis"],
      status: "In Progress",
    },
    {
      title: "Understanding Learner Breakdowns in Video Tutorials",
      description:
        "Empirical investigation of how learners experience breakdowns while following software tutorials, examining device ecologies and multi-screen learning strategies.",
      role: "Primary Investigator",
      methods: ["Ethnographic Observation", "Semi-Structured Interviews", "Thematic Analysis"],
      status: "Under Review",
    },
    {
      title: "VR/MR Training for Complex Procedural Tasks",
      description:
        "Designing and evaluating immersive learning environments for technical skill acquisition in VR/MR contexts.",
      role: "Co-Investigator",
      methods: ["Prototyping", "Comparative Studies", "Performance Analysis"],
      status: "Published",
    },
    {
      title: "Multimodal Interaction in Educational Contexts",
      description:
        "Exploring how gesture, voice, and touch interact in learning scenarios to inform the design of next-generation educational interfaces.",
      role: "Researcher",
      methods: ["Wizard of Oz", "Interaction Logging", "Statistical Analysis"],
      status: "Early Stage",
    },
  ];

  const methods = [
    "Qualitative Research",
    "Quantitative Research",
    "Mixed Methods",
    "User-Centered Design",
    "Participatory Design",
    "Interaction Prototyping",
    "A/B Testing",
    "Ethnographic Methods",
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 py-24">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-24"
      >
        <h1 className="text-6xl mb-6 font-semibold tracking-tight">Research</h1>
        <p className="text-muted-foreground text-xl max-w-3xl leading-relaxed">
          Investigating how people learn, interact, and create with emerging technologies through interactive learning systems and immersive environments.
        </p>
      </motion.section>

      {/* Research Interests */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-24"
      >
        <h2 className="text-3xl mb-10 font-semibold">Research Interests</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {researchInterests.map((interest, index) => (
            <motion.div
              key={interest}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="bg-card border border-border/50 rounded-2xl p-8 text-center hover:border-border transition-all hover:shadow-lg cursor-default"
            >
              <span className="text-sm font-medium">{interest}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Selected Projects */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-24"
      >
        <h2 className="text-3xl mb-10 font-semibold">Selected Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="group bg-card border border-border/50 rounded-2xl p-10 hover:border-border transition-all hover:shadow-lg"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl flex-1 font-semibold">{project.title}</h3>
                <span className="px-4 py-1.5 bg-muted/50 text-xs rounded-xl whitespace-nowrap ml-4 font-medium">
                  {project.status}
                </span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Role:</span>{" "}
                  <span>{project.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Methods:</span>{" "}
                  <span>{project.methods.join(", ")}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Publications */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mb-24"
      >
        <h2 className="text-3xl mb-10 font-semibold">Publications & Manuscripts</h2>
        <div className="bg-card border border-border/50 rounded-2xl p-10 space-y-8 hover:border-border transition-colors">
          <div className="border-l-4 border-primary/30 pl-6">
            <p className="mb-2 font-semibold">
              AutoCue: Intelligent Visual Cue Generation for Software Tutorial Videos
            </p>
            <p className="text-sm text-muted-foreground mb-1">
              In Preparation for CHI 2027
            </p>
            <p className="text-sm text-muted-foreground">
              Authors: [Your Name], [Co-authors]
            </p>
          </div>

          <div className="border-l-4 border-primary/30 pl-6">
            <p className="mb-2 font-semibold">
              Understanding Learner Breakdowns in Video-Based Software Tutorials
            </p>
            <p className="text-sm text-muted-foreground mb-1">
              Under Review at CSCW 2026
            </p>
            <p className="text-sm text-muted-foreground">
              Authors: [Your Name], [Co-authors]
            </p>
          </div>

          <div className="border-l-4 border-muted-foreground/30 pl-6">
            <p className="mb-2 font-semibold">
              Immersive Learning Environments for Technical Skill Acquisition
            </p>
            <p className="text-sm text-muted-foreground mb-1">
              VR Learning '25 Workshop Proceedings
            </p>
            <p className="text-sm text-muted-foreground">
              Authors: [Your Name], [Co-authors]
            </p>
          </div>
        </div>
      </motion.section>

      {/* Research Methods */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mb-24"
      >
        <h2 className="text-3xl mb-10 font-semibold">Research Methods</h2>
        <div className="grid md:grid-cols-4 gap-3">
          {methods.map((method) => (
            <div
              key={method}
              className="px-4 py-3 bg-muted/50 border border-border/50 rounded-xl text-sm text-center font-medium"
            >
              {method}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Teaching */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="pb-24"
      >
        <h2 className="text-3xl mb-10 font-semibold">Teaching & Service</h2>
        <div className="bg-card border border-border/50 rounded-2xl p-10 space-y-6">
          <div>
            <h4 className="mb-2 font-semibold">Teaching Assistant</h4>
            <p className="text-sm text-muted-foreground">
              HCI Methods (Fall 2025), Interactive Systems Design (Spring 2026)
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Peer Reviewer</h4>
            <p className="text-sm text-muted-foreground">
              CHI, CSCW, UIST Student Volunteer
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
