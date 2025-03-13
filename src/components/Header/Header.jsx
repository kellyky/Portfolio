import { HamburgerMenu } from '../../assets/icons/HamburgerMenu'
import { Logo } from '../../assets/icons/Logo'

export default function Header() {
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
        <HamburgerMenu />
      </div>
    </header>
  )
}
