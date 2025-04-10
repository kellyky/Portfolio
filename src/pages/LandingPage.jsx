import { use } from 'react'
import About from '../components/About/About'
import Hero from '../components/Hero/Hero'
import ModalContext from '../store/modal-context'

export default function LandingPage () {
  const { modalState } = use(ModalContext)

  return (
    <main className={
      `size-full grow-1 self-center px-8 lg:px-30
      ${modalState ? 'blur-xs overflow-hidden' : ''}`
      }
    >
      <Hero />
      <About />
    </main>
  )
}
