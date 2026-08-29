import { motion } from 'framer-motion'
import SplitText from '../components/SplitText'
import TiltCard from '../components/TiltCard'
import { projects } from '../data/portfolio'

export default function Projects() {
  const featured = projects.find((p) => p.size === 'lg')
  const rest = projects.filter((p) => p.size !== 'lg')

  return (
    <div>
      <p className="eyebrow mb-4">Projects</p>
      <h2 className="font-display text-4xl font-semibold sm:text-5xl">
        <SplitText text="Shipped, not just scoped." />
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="lg:row-span-2"
          >
            <TiltCard className="flex h-full flex-col justify-between p-8">
              <div>
                <span className="eyebrow">{featured.tag}</span>
                <h3 className="mt-3 font-display text-2xl text-ink-100 sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-300">
                  {featured.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {featured.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-ink-300"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-glow" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {featured.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-ink-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        )}

        {rest.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
          >
            <TiltCard className="flex h-full flex-col justify-between p-7" intensity={6}>
              <div>
                <span className="eyebrow">{project.tag}</span>
                <h3 className="mt-3 font-display text-xl text-ink-100">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  {project.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-ink-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
