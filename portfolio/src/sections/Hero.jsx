import { motion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import ParticleField from '../components/ParticleField'
import SplitText from '../components/SplitText'
import TypingText from '../components/TypingText'
import MagneticButton from '../components/MagneticButton'
import { profile } from '../data/portfolio'

export default function Hero({ onNavigate }) {
  return (
    <div className="relative -mx-6 -mt-28 flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20">
      <div className="absolute inset-0 bg-radial-fade" aria-hidden="true" />
      <ParticleField />

      <div className="relative z-10 grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="eyebrow mb-6"
          >
            Coimbatore, India · Available for opportunities
          </motion.p>

          <h1 className="font-display text-[13vw] font-semibold leading-[0.92] tracking-tight text-ink-100 sm:text-7xl lg:text-8xl">
            <SplitText text="Mahasakthi" as="span" className="block" />
            <SplitText
              text="B."
              as="span"
              className="block text-gradient"
              stagger={0.05}
            />
          </h1>

          <div className="mt-8 h-8 font-mono text-lg text-ink-300 sm:text-xl">
            <TypingText words={profile.roles} />
          </div>
        </div>

        <div className="lg:col-span-4 lg:justify-self-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="glass animate-floaty rounded-2xl p-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
              Currently
            </p>
            <p className="mt-2 font-display text-lg text-ink-100">
              B.Sc IT, graduating May 2026
            </p>
            <p className="mt-1 text-sm text-ink-300">
              Full-stack projects in React, Node.js &amp; MongoDB
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="relative z-10 mt-14 flex flex-wrap items-center gap-4"
      >
        <MagneticButton
          as="button"
          variant="primary"
          onClick={() => onNavigate('projects')}
        >
          View projects <ArrowUpRight size={16} />
        </MagneticButton>
        <MagneticButton
          as="a"
          href={`mailto:${profile.email}`}
          variant="secondary"
        >
          Get in touch <Download size={16} />
        </MagneticButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 mt-16 max-w-2xl text-sm leading-relaxed text-ink-300"
      >
        {profile.summary}
      </motion.div>
    </div>
  )
}
