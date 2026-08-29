import { motion } from 'framer-motion'
import SplitText from '../components/SplitText'
import TiltCard from '../components/TiltCard'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <div>
      <p className="eyebrow mb-4">Experience</p>
      <h2 className="font-display text-4xl font-semibold sm:text-5xl">
        <SplitText text="Where the fundamentals met production code." />
      </h2>

      <div className="relative mt-14 border-l border-white/10 pl-8">
        {experience.map((job, i) => (
          <motion.div
            key={job.org}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative mb-4"
          >
            <span className="absolute -left-[38px] top-2 h-3 w-3 rounded-full bg-gradient-to-br from-violet-glow to-cyan-glow shadow-glow" />
            <TiltCard className="p-6" intensity={4}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl text-ink-100">
                  {job.role}
                </h3>
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-cyan-glow">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-300">{job.org}</p>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-ink-300"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-glow" />
                    {point}
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
