import { use } from 'react'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import ModalContext from '../store/modal-context'

export default function LandingPage () {
  const { modalState } = use(ModalContext)

  return (
    <main className={
      `flex flex-col size-full grow self-center
      gap-8 px-8
      md:gap-12
      lg:px-30
      ${modalState ? 'blur-xs overflow-hidden' : ''}`
      }
    >
      <Hero />
      <About />
    </main>
  )
}
