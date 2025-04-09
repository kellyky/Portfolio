import { Logo } from '../../assets/icons/Logo'
import { GitHub } from '../../assets/icons/GitHub'
import { LinkedIn } from '../../assets/icons/LinkedIn'

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
      <ul className='flex px-10 gap-5 items-center justify-around'>
        <li>
          <a
            href='https://github.com/kellyky/'
            target='_blank'
            aria-label="Kelly's GitHub profile" rel='noreferrer'
          >
            <GitHub
              className='hover:fill-muted-cyan transition-colors
              delay-150 duration-300'
            />
          </a>
        </li>
        <li>
          <a
            href='https://linkedin.com/in/kelly-popko/'
            target='_blank'
            aria-label="Kelly's LinkedIn profile" rel='noreferrer'
          >
            <LinkedIn
              className='hover:fill-muted-cyan transition-colors
            delay-150 duration-300'
            />
          </a>
        </li>
      </ul>
    </footer>
  )
}
