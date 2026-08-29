import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function TiltCard({
  children,
  className = '',
  intensity = 8,
  ...props
}) {
  const ref = useRef(null)

  function handleMove(e) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * intensity * 2
    const rotateX = (0.5 - py) * intensity * 2
    el.style.setProperty('--tilt-x', `${rotateX}deg`)
    el.style.setProperty('--tilt-y', `${rotateY}deg`)
    el.style.setProperty('--glow-x', `${px * 100}%`)
    el.style.setProperty('--glow-y', `${py * 100}%`)
  }

  function handleLeave() {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--tilt-x', `0deg`)
    el.style.setProperty('--tilt-y', `0deg`)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ scale: { duration: 0.25, ease: 'easeOut' } }}
      className={`tilt-card glass relative rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
