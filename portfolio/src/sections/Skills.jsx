import { motion } from 'framer-motion'
import SplitText from '../components/SplitText'
import TiltCard from '../components/TiltCard'
import { skillGroups } from '../data/portfolio'

const accentDot = {
  violet: 'bg-violet-glow',
  cyan: 'bg-cyan-glow',
  magenta: 'bg-magenta-glow',
}

export default function Skills() {
  return (
    <div>
      <p className="eyebrow mb-4">Skills</p>
      <h2 className="font-display text-4xl font-semibold sm:text-5xl">
        <SplitText text="A stack built to move fast, safely." />
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}
          >
            <TiltCard className="h-full p-6" intensity={6}>
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${accentDot[group.accent]}`}
                />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
                  {group.label}
                </p>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-ink-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
