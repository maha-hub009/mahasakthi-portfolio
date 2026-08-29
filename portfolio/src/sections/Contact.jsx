import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react'
import SplitText from '../components/SplitText'
import MagneticButton from '../components/MagneticButton'
import TiltCard from '../components/TiltCard'
import { profile } from '../data/portfolio'

const contactLinks = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: Linkedin, label: profile.linkedin, href: `https://${profile.linkedin}` },
  { icon: Github, label: profile.github, href: `https://${profile.github}` },
]

export default function Contact() {
  return (
    <div>
      <p className="eyebrow mb-4">Contact</p>
      <h2 className="font-display text-4xl font-semibold sm:text-6xl">
        <SplitText text="Let's build something" className="block" />
        <SplitText text="worth shipping." className="block text-gradient" />
      </h2>

      <p className="mt-6 flex items-center gap-2 text-sm text-ink-500">
        <MapPin size={14} /> {profile.location}
      </p>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {contactLinks.map(({ icon: Icon, label, href }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <TiltCard className="p-0" intensity={4}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-glow/20 to-cyan-glow/20 text-cyan-glow">
                  <Icon size={18} />
                </span>
                <span className="truncate text-sm text-ink-100">{label}</span>
              </a>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <div className="mt-14">
        <MagneticButton as="a" href={`mailto:${profile.email}`} variant="primary">
          Say hello <Mail size={16} />
        </MagneticButton>
      </div>
    </div>
  )
}
