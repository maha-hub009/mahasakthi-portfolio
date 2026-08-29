import { motion } from 'framer-motion'
import SplitText from '../components/SplitText'
import TiltCard from '../components/TiltCard'
import { profile, competencies, education, certifications, achievements } from '../data/portfolio'

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function About() {
  return (
    <div>
      <p className="eyebrow mb-4">About</p>
      <h2 className="font-display text-4xl font-semibold sm:text-5xl">
        <SplitText text="Grounded in fundamentals, built for shipping." />
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <p className="text-balance text-lg leading-relaxed text-ink-300 lg:col-span-7">
          {profile.summary}
        </p>

        <TiltCard className="p-6 lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
            Education
          </p>
          <p className="mt-3 font-display text-xl text-ink-100">
            {education.degree}
          </p>
          <p className="mt-1 text-sm text-ink-300">{education.school}</p>
          <p className="mt-1 text-sm text-ink-500">
            {education.period} · {education.detail}
          </p>
          <div className="mt-5 border-t border-white/10 pt-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
              Certification
            </p>
            {certifications.map((c) => (
              <p key={c} className="mt-2 text-sm text-ink-300">
                {c}
              </p>
            ))}
          </div>
        </TiltCard>
      </div>

      <div className="mt-16">
        <p className="eyebrow mb-5">Core competencies</p>
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap gap-3"
        >
          {competencies.map((c) => (
            <motion.li
              key={c}
              variants={itemVariants}
              className="glass rounded-full px-4 py-2 text-sm text-ink-100"
            >
              {c}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <div className="mt-16">
        <p className="eyebrow mb-5">Achievements</p>
        <motion.ul
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {achievements.map((a) => (
            <motion.li
              key={a}
              variants={itemVariants}
              className="glass rounded-2xl p-5 text-sm leading-relaxed text-ink-300"
            >
              {a}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  )
}
