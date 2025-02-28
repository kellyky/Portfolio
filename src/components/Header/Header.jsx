import { HamburgerMenu } from '../../assets/icons/HamburgerMenu'
import { Logo } from '../../assets/icons/Logo'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 md:px-14 md:py-8 lg:py-4 color-greyish-dark-blue bg-very-light-grey" >
      <div>
        <Logo />
      </div>
      <nav>
        <ul className="uppercase hidden md:flex md:gap-2">
          <li>Home</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
        </ul>
      </nav>
      <div className="block md:hidden  ">
        <HamburgerMenu />
      </div>
    </header>
  )
}
