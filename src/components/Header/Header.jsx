import { useState } from 'react';
import { HamburgerMenu } from '../../assets/icons/HamburgerMenu'
import { Logo } from '../../assets/icons/Logo'
import { Modal } from '../Modal/Modal'


export default function Header() {
  const [showModal, setShowModal] = useState(false);
  function handleClose(){
    setShowModal(previous => !previous)
  }
  return (
    <header className="sticky top-0 z-3 flex justify-between items-center
      p-8 md:py-8 lg:py-8 bg-very-light-grey"
    >
      <div>
        <Logo />
      </div>
      <nav>
        <ul className="uppercase hidden md:flex md:gap-12 lg:gap-8
          text-xs text-greyish-dark-blue tracking-widest font-public-sans
          ">
          <li>Home</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
        </ul>
      </nav>
      <div className="block md:hidden">
        <button onClick={handleClose}>
          <HamburgerMenu hide={showModal} />
        </button>
        {showModal && <Modal />}
      </div>
    </header>
  )
}
