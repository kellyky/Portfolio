import { use, useEffect, useState, useRef } from 'react'
import Resume from '/resume/Resume.pdf'
import { AnimatePresence } from 'motion/react'
import { NavLink } from 'react-router'
import { HamburgerMenu } from '../../assets/icons/HamburgerMenu'
import { Logo } from '../../assets/icons/Logo'
import { Modal } from '../Modal/Modal'
import ModalContext from '../../store/modal-context'

export default function Header () {
  const { modalState, closeModal } = use(ModalContext)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const timeoutId = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY

      clearTimeout(timeoutId.current)
      timeoutId.current = setTimeout(() => {
        setIsVisible(true)
      }, 150)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-3 flex justify-between items-center
        p-8 md:py-8 lg:py-8 bg-very-light-grey lg:px-30
        transition-transform duration-300
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div>
        <Logo />
      </div>
      <nav className='invisible md:visible'>
        <ul className='uppercase hidden md:flex md:gap-12 lg:gap-8
          text-xs tracking-widest
          '
        >
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => isActive ? 'text-muted-cyan' : ''}
            >Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/portfolio'
              className={({ isActive }) => isActive ? 'text-muted-cyan' : ''}
            >Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? 'text-muted-cyan' : ''}
              to={Resume}
              target='_blank'
            >
              Resume
            </NavLink>
            </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) => isActive ? 'text-muted-cyan' : ''}
            >Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='block md:hidden'>
        <button
          onClick={closeModal}
          id='hamburger-menu'
          aria-label='hamburger menu'
        >
          <HamburgerMenu hide={modalState} />
        </button>
        <AnimatePresence mode='wait'>

          {modalState && <Modal />}
        </AnimatePresence>
      </div>
    </header>
  )
}
