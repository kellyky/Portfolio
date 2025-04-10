import { Logo } from '../../assets/icons/Logo'
import Social from '../Social/Social'

export default function Footer () {
  return (
    <footer className='bottom-0 p-12 md:p-4 gap-8 lg:px-20
      flex flex-col md:flex-row items-center justify-between
      bg-greyish-dark-blue text-very-light-grey'
    >
      <nav>
        <ul className='uppercase px-10 gap-8 flex flex-col
          md:flex-row items-center'
        >
          <li><Logo fill='var(--very-light-grey)' /></li>
          <li>Home</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
        </ul>
      </nav>
      <Social />
    </footer>
  )
}
