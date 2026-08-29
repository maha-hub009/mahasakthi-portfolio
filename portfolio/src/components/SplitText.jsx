import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: (stagger = 0.035) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
}

const letter = {
  hidden: { y: '110%', opacity: 0, rotateZ: 6 },
  visible: {
    y: '0%',
    opacity: 1,
    rotateZ: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

/**
 * Splits `text` into per-letter <span>s and reveals them with a staggered
 * slide-up. Words are wrapped so line-breaks stay natural.
 */
export default function SplitText({
  text,
  as: Tag = 'span',
  className = '',
  stagger = 0.035,
  once = true,
  ...props
}) {
  const words = text.split(' ')
  const MotionTag = motion[Tag] ?? motion.span

  return (
    <MotionTag
      className={`inline-block ${className}`}
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.4 }}
      {...props}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split('').map((char, ci) => (
            <span key={ci} className="inline-block overflow-hidden">
              <motion.span variants={letter} className="inline-block">
                {char}
              </motion.span>
            </span>
          ))}
          {wi < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </MotionTag>
  )
}
