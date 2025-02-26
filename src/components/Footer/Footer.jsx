import { Logo } from '../../assets/icons/Logo'
import { GitHub } from '../../assets/icons/GitHub'
import { LinkedIn } from '../../assets/icons/LinkedIn'

export default function Footer() {
  return (
    <footer className="bottom-0 p-12 md:p-4 gap-8 flex flex-col md:flex-row items-center justify-between bg-greyish-dark-blue text-very-light-grey">
        <nav>
          <ul className="uppercase px-10 gap-8 flex flex-col md:flex-row items-center">
            <li><Logo fill='var(--very-light-grey)' /></li>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
          </ul>
        </nav>
        <ul className="flex px-10 gap-5 items-center justify-around">
          <li><GitHub /></li>
          <li><LinkedIn /></li>
        </ul>
      </footer>
  )
}
