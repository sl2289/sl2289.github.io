import { Link } from "react-router";
import { motion } from "motion/react";
import { FlaskConical, Palette, ArrowRight } from "lucide-react";

export function HomeFigma() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fafafa]">
      {/* Background Texture */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute right-[-140px] top-0 hidden h-[520px] w-[520px] md:block lg:right-[-40px] lg:h-[680px] lg:w-[680px] xl:right-0 xl:h-[800px] xl:w-[800px]">
          <svg className="absolute block inset-0 w-full h-full opacity-[0.03]" fill="none" preserveAspectRatio="none" viewBox="0 0 800 800">
            <defs>
              <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q 25 30, 50 50 T 100 50" stroke="currentColor" fill="none" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="800" height="800" fill="url(#wave-pattern)" />
          </svg>
        </div>
        <div className="absolute right-[-120px] top-[48px] h-[280px] w-[280px] rounded-full bg-gradient-to-br from-blue-100/25 to-transparent blur-[64px] md:right-[6%] md:top-[80px] md:h-[420px] md:w-[420px] md:from-blue-100/30 lg:h-[600px] lg:w-[600px] lg:from-blue-100/40" />
        <div className="absolute right-[-100px] top-[220px] h-[220px] w-[220px] rounded-full bg-gradient-to-br from-blue-500/5 to-transparent blur-[64px] md:right-[18%] md:top-[305px] md:h-[320px] md:w-[320px] lg:right-[22%] lg:h-[500px] lg:w-[500px]" />
      </div>

      <div className="mx-auto max-w-[1152px] px-4 pt-10 sm:px-6 md:px-8 md:pt-[73px]">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pb-12 pt-16 [will-change:transform,opacity] md:pb-16 md:pt-24 lg:pt-32"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-primary sm:text-sm md:mb-6 md:tracking-[0.2em]">
            HCI RESEARCHER & DESIGNER
          </p>
          <h1 className="mb-5 max-w-[1024px] text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:mb-6 md:text-6xl lg:text-[72px]">
            Exploring how people{" "}
            <span className="text-[#737373]">interact</span>
            <br />
            with emerging technologies
          </h1>
          <p className="max-w-[672px] text-base leading-relaxed text-[#737373] sm:text-lg md:text-[20px]">
            Bridging design practice and research inquiry through interactive systems and human-centered investigation.
          </p>
        </motion.section>

        {/* Navigation Cards */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.12, duration: 0.45, ease: "easeOut" }}
          className="relative mb-16 grid grid-cols-1 gap-5 sm:gap-6 md:mb-24 md:grid-cols-2 md:gap-8"
        >
          <Link
            to="/research"
            className="group relative overflow-hidden rounded-[24px] border border-white/40 bg-white/28 p-6 backdrop-blur-xl transition-all hover:border-blue-200/60 hover:bg-white/32 hover:shadow-xl hover:shadow-blue-500/10 sm:p-8 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/45 via-white/18 to-transparent" />
            <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/12 transition-colors group-hover:bg-blue-500/18">
              <FlaskConical className="w-6 h-6 text-primary" />
            </div>
            <h2 className="relative mb-4 text-2xl font-semibold sm:text-[28px] lg:text-[30px]">Research</h2>
            <p className="relative mb-8 leading-relaxed text-[#737373]">
              Interactive learning systems, VR/MR interaction, and AI-supported educational tools.
            </p>
            <div className="relative flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3">
              Explore
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/design"
            className="group relative overflow-hidden rounded-[24px] border border-white/40 bg-white/25 p-6 backdrop-blur-xl transition-all hover:border-blue-200/60 hover:bg-white/30 hover:shadow-xl hover:shadow-blue-500/10 sm:p-8 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/42 via-white/16 to-transparent" />
            <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100/45 transition-colors group-hover:bg-blue-100/60">
              <Palette className="w-6 h-6 text-primary" />
            </div>
            <h2 className="relative mb-4 text-2xl font-semibold sm:text-[28px] lg:text-[30px]">Design</h2>
            <p className="relative mb-8 leading-relaxed text-[#737373]">
              UX research, visual communication, motion design, and photography-informed thinking.
            </p>
            <div className="relative flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3">
              Explore
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </motion.section>

        {/* Featured Work */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.45, ease: "easeOut" }}
          className="mb-16 md:mb-20"
        >
          <h2 className="mb-8 text-3xl font-semibold md:mb-12 md:text-4xl">Featured Work</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="cursor-pointer rounded-2xl border border-[rgba(231,229,228,0.5)] bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-blue-500/5 md:p-8"
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
              className="cursor-pointer rounded-2xl border border-[rgba(231,229,228,0.5)] bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-blue-500/5 md:p-8"
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
              className="cursor-pointer rounded-2xl border border-[rgba(231,229,228,0.5)] bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-blue-500/5 md:p-8"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28, duration: 0.45, ease: "easeOut" }}
          className="pb-20 md:pb-32"
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
