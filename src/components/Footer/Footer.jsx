import { Link } from 'react-router'
import { Logo } from '../../assets/icons/Logo'
import Social from '../Social/Social'
import Resume from '/resume/Resume.pdf'

export default function Footer () {
  return (
    <footer className='bottom-0 md:p-4 gap-8 lg:px-20
      flex flex-col md:flex-row items-center justify-between
      bg-greyish-dark-blue text-very-light-grey'
    >
      <nav className='w-full m-8 gap-8 md:gap-4 flex flex-col md:flex-row md:justify-between items-center'>
        <ul className='uppercase gap-6 flex flex-col
          md:flex-row items-center'
        >
          <li><Logo fill='var(--very-light-grey)' /></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/portfolio'>Portfolio</Link></li>
          <li><Link to={Resume} target='_blank'>Resume</Link></li>
          <li><Link to='/contact'>Contact Me</Link></li>
        </ul>
      <Social color='fill-very-light-grey' />
      </nav>
    </footer>
  )
}
