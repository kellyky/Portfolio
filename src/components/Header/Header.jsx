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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const shouldBeVisible = modalState || isVisible

  return (
    <header
      className={`sticky top-0 z-30 flex justify-between items-center
        p-8 md:py-8 lg:py-8 bg-very-light-grey lg:px-30
        transition-transform duration-300
        ${shouldBeVisible ? 'translate-y-0' : '-translate-y-full'}
      `}
    >
      <div>
        <Logo />
      </div>
      <nav className='invisible md:visible'>
        <ul className='uppercase hidden md:flex md:gap-12 lg:gap-8
          text-xs tracking-widest'
        >
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `${isActive ? 'text-muted-cyan' : 'underline-hover-effect'}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/portfolio'
              className={({ isActive }) =>
                `${isActive ? 'text-muted-cyan' : 'underline-hover-effect'}`
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? 'text-muted-cyan' : 'underline-hover-effect'}`
              }
              to={Resume}
              target='_blank'
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                `${isActive ? 'text-muted-cyan' : 'underline-hover-effect'}`
              }
            >
              Contact Me
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
