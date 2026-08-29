import { motion } from 'framer-motion'

const contentVariants = {
  initial: { opacity: 0, y: 48, scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.25 },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: -24,
    transition: { duration: 0.3, ease: [0.7, 0, 0.84, 0] },
  },
}

const wipeVariants = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: [0, 1, 1, 0],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.6, 1],
      ease: 'easeInOut',
    },
  },
  exit: { scaleY: 0 },
}

/**
 * Wraps a single "page" (section) so that on mount/unmount it performs a
 * gradient curtain wipe across the viewport while the outgoing content
 * fades/scales down and the incoming content slides up into place.
 */
export default function PageTransition({ children, id }) {
  return (
    <motion.section
      key={id}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full px-6 pb-32 pt-28 md:px-12 lg:px-20"
    >
      <motion.div
        variants={wipeVariants}
        className="pointer-events-none fixed inset-0 z-[60] origin-top bg-gradient-to-b from-violet-glow via-fuchsia-500 to-cyan-glow"
        aria-hidden="true"
      />
      <motion.div variants={contentVariants} className="mx-auto max-w-6xl">
        {children}
      </motion.div>
    </motion.section>
  )
}
