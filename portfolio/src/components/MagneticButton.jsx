import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * A button that pulls toward the cursor within its bounds, fills with a
 * liquid gradient on hover, and compresses on click. `as="a"` renders an
 * anchor for outbound links (email, phone, socials).
 */
export default function MagneticButton({
  children,
  variant = 'primary',
  as = 'button',
  className = '',
  strength = 0.35,
  ...props
}) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 250, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 250, damping: 18, mass: 0.4 })

  function handleMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * strength)
    y.set(relY * strength)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  const Comp = motion[as] ?? motion.button

  const base =
    'group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 font-body text-sm font-medium tracking-wide transition-colors duration-300'

  const styles =
    variant === 'primary'
      ? 'text-obsidian bg-gradient-to-r from-violet-glow via-fuchsia-400 to-cyan-glow shadow-glow'
      : 'text-ink-100 border border-white/15 hover:border-white/30'

  return (
    <Comp
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.92 }}
      className={`${base} ${styles} ${className}`}
      {...props}
    >
      {variant === 'secondary' && (
        <span
          className="pointer-events-none absolute inset-0 -z-10 origin-bottom scale-y-0 bg-gradient-to-r from-violet-glow/80 to-cyan-glow/80 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-y-100"
          aria-hidden="true"
        />
      )}
      <span className="relative z-10">{children}</span>
    </Comp>
  )
}
