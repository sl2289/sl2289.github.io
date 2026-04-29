import { Link } from "react-router";
import { motion } from "motion/react";
import { FlaskConical, Palette, ArrowRight } from "lucide-react";

export function HomeFigma() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Background Texture */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute left-[736px] w-[800px] h-[800px] top-0">
          <svg className="absolute block inset-0 w-full h-full opacity-[0.03]" fill="none" preserveAspectRatio="none" viewBox="0 0 800 800">
            <defs>
              <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q 25 30, 50 50 T 100 50" stroke="currentColor" fill="none" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="800" height="800" fill="url(#wave-pattern)" />
          </svg>
        </div>
        <div className="absolute bg-gradient-to-br from-blue-100/40 to-transparent blur-[64px] left-[384px] rounded-full w-[600px] h-[600px] top-[80px]" />
        <div className="absolute bg-gradient-to-br from-blue-500/5 to-transparent blur-[64px] left-[652px] rounded-full w-[500px] h-[500px] top-[305px]" />
      </div>

      <div className="max-w-[1152px] mx-auto px-8 pt-[73px]">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="pt-32 pb-16"
        >
          <p className="text-sm font-medium text-primary mb-6 tracking-[0.2em] uppercase">
            HCI RESEARCHER & DESIGNER
          </p>
          <h1 className="text-[72px] font-semibold leading-[1.1] tracking-tight mb-6 max-w-[1024px]">
            Exploring how people{" "}
            <span className="text-[#737373]">interact</span>
            <br />
            with emerging technologies
          </h1>
          <p className="text-[20px] text-[#737373] leading-relaxed max-w-[672px]">
            Bridging design practice and research inquiry through interactive systems and human-centered investigation.
          </p>
        </motion.section>

        {/* Navigation Cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 gap-8 mb-24"
        >
          <Link
            to="/research"
            className="group bg-white border border-[rgba(231,229,228,0.5)] rounded-[24px] p-12 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-blue-500/5"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/15 transition-colors">
              <FlaskConical className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-[30px] font-semibold mb-4">Research</h2>
            <p className="text-[#737373] leading-relaxed mb-8">
              Interactive learning systems, VR/MR interaction, and AI-supported educational tools.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
              Explore
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/design"
            className="group bg-white border border-[rgba(231,229,228,0.5)] rounded-[24px] p-12 hover:border-primary/30 transition-all hover:shadow-xl hover:shadow-blue-500/5"
          >
            <div className="w-12 h-12 bg-blue-100/60 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
              <Palette className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-[30px] font-semibold mb-4">Design</h2>
            <p className="text-[#737373] leading-relaxed mb-8">
              UX research, visual communication, motion design, and photography-informed thinking.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
              Explore
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.section>

        {/* Featured Work */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-semibold mb-12">Featured Work</h2>
          <div className="grid grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white border border-[rgba(231,229,228,0.5)] rounded-2xl p-8 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-blue-500/5 cursor-pointer"
            >
              <p className="text-xs text-primary tracking-[0.05em] uppercase font-semibold mb-4">
                LLM Application
              </p>
              <h3 className="text-xl font-semibold mb-3">AutoCue</h3>
              <p className="text-sm text-[#737373] leading-relaxed">
                AI-assisted visual cue augmentation for software tutorial videos.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white border border-[rgba(231,229,228,0.5)] rounded-2xl p-8 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-blue-500/5 cursor-pointer"
            >
              <p className="text-xs text-primary tracking-[0.05em] uppercase font-semibold mb-4">
                UX Research
              </p>
              <h3 className="text-xl font-semibold mb-3">Video-Based Software Learning</h3>
              <p className="text-sm text-[#737373] leading-relaxed">
                Empirical study of learner breakdowns and device ecologies.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white border border-[rgba(231,229,228,0.5)] rounded-2xl p-8 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-blue-500/5 cursor-pointer"
            >
              <p className="text-xs text-primary tracking-[0.05em] uppercase font-semibold mb-4">
                Spatial Computing
              </p>
              <h3 className="text-xl font-semibold mb-3">VR/MR Learning Systems</h3>
              <p className="text-sm text-[#737373] leading-relaxed">
                Immersive training and interaction design for complex tasks.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Current Focus */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="pb-32"
        >
          <h2 className="text-2xl font-semibold mb-8">Current Focus</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Human-Computer Interaction",
              "UX Research",
              "VR/MR Interaction",
              "AI-Supported Learning",
              "Software Tutorial Systems",
              "Video-Based Learning",
            ].map((topic) => (
              <span
                key={topic}
                className="px-5 py-2.5 bg-white border border-[rgba(231,229,228,0.5)] rounded text-sm font-medium hover:border-primary/30 transition-colors"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
