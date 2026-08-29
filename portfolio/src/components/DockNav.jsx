import { motion } from 'framer-motion'
import { nav } from '../data/portfolio'

export default function DockNav({ active, onNavigate }) {
  return (
    <motion.nav
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
      aria-label="Primary"
    >
      <ul className="glass group flex items-center gap-1 rounded-full px-2 py-2 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)] transition-[gap,padding] duration-300 ease-out hover:gap-2 hover:px-3">
        {nav.map((item) => {
          const isActive = active === item.id
          return (
            <li key={item.id} className="relative">
              <motion.button
                onClick={() => onNavigate(item.id)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className={`relative z-10 flex items-center rounded-full px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-glow ${
                  isActive
                    ? 'text-obsidian'
                    : 'text-ink-300 hover:text-ink-100'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </motion.button>
              {isActive && (
                <motion.span
                  layoutId="dock-active-indicator"
                  className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-violet-glow via-fuchsia-400 to-cyan-glow"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </li>
          )
        })}
      </ul>
    </motion.nav>
  )
}
