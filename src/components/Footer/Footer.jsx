import { Logo } from '../../assets/icons/Logo'
import { GitHub } from '../../assets/icons/GitHub'
import { LinkedIn } from '../../assets/icons/LinkedIn'

export default function Footer() {
  return (
      <footer className="p-12 gap-8 flex flex-col items-center bg-greyish-dark-blue text-very-light-grey">
        <div>
          <Logo fill='var(--very-light-grey)' />
        </div>
        <nav>
          <ul className="uppercase gap-8 flex flex-col items-center">
            <li>Home</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
          </ul>
        </nav>
        <ul className="flex gap-5 items-center justify-around">
          <li><GitHub /></li>
          <li><LinkedIn /></li>
        </ul>
      </footer>
  )
}
