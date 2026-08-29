import { useEffect, useState } from 'react'

export default function TypingText({
  words,
  className = '',
  typingSpeed = 55,
  deletingSpeed = 30,
  pause = 1400,
}) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing') // typing | pausing | deleting

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typingSpeed
        )
      } else {
        timeout = setTimeout(() => setPhase('pausing'), pause)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('deleting'), 400)
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          deletingSpeed
        )
      } else {
        setWordIndex((i) => (i + 1) % words.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timeout)
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pause])

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] translate-y-[2px] bg-cyan-glow animate-blink h-[1em]" />
    </span>
  )
}
