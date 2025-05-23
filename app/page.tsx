"use client";

import React from 'react'
import styles from '@/app/ui/home.module.css'
import Hero from './sections/Hero'
import CoursesAndWorkshops from './sections/CoursesAndWorkshops'
import FreshNews from './sections/FreshNews'
import FinalForm from './sections/FinalForm'
import { useScrolled } from './hooks/useScrolled'
import PopupFloating from './components/PopupFloating'

function Home() {
  const scrolled = useScrolled(50);
  return (
    <main className="container">
      <Hero />
      <CoursesAndWorkshops />
      <FreshNews />
      <FinalForm />
      {scrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={styles.scrollToTop}
          aria-label="Volver arriba"
        >
          ↑
        </button>
      )}
      <PopupFloating />
    </main>
  )
}

export default Home