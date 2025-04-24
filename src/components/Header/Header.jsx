import { use } from 'react'
import { NavLink } from 'react-router'
import { HamburgerMenu } from '../../assets/icons/HamburgerMenu'
import { Logo } from '../../assets/icons/Logo'
import { Modal } from '../Modal/Modal'
import ModalContext from '../../store/modal-context'

export default function Header () {
  const { modalState, closeModal } = use(ModalContext)

  return (
    <header className='sticky top-0 z-3 flex justify-between items-center
      p-8 md:py-8 lg:py-8 bg-very-light-grey lg:px-30'
    >
      <div>
        <Logo />
      </div>
      <nav>
        <ul className='uppercase hidden md:flex md:gap-12 lg:gap-8
          text-xs tracking-widest font-public-sans
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
          id='hamburger-menu' aria-label='hamburger menu'
        >
          <HamburgerMenu hide={modalState} />
        </button>
        {modalState && <Modal />}
      </div>
    </header>
  )
}
