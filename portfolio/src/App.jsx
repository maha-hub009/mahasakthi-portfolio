import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import DockNav from './components/DockNav'
import PageTransition from './components/PageTransition'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

const sections = {
  home: Hero,
  about: About,
  skills: Skills,
  experience: Experience,
  projects: Projects,
  contact: Contact,
}

export default function App() {
  const [active, setActive] = useState('home')
  const ActiveSection = sections[active]

  return (
    <div className="relative min-h-screen bg-obsidian">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cyan-glow focus:px-4 focus:py-2 focus:text-obsidian"
      >
        Skip to content
      </a>

      <header className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
        <button
          onClick={() => setActive('home')}
          className="font-display text-sm font-semibold tracking-wide text-ink-100"
        >
          MB<span className="text-cyan-glow">.</span>
        </button>
        <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-ink-500 sm:block">
          Full Stack Developer
        </span>
      </header>

      <main id="main">
        <AnimatePresence mode="wait">
          <PageTransition key={active} id={active}>
            <ActiveSection onNavigate={setActive} />
          </PageTransition>
        </AnimatePresence>
      </main>

      <DockNav active={active} onNavigate={setActive} />
    </div>
  )
}
