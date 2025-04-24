import { Link } from 'react-router'
import Button from '../Button/Button'
import Arrows from '../../assets/icons/Arrows'

export default function Hero () {
  return (
    <section className='flex flex-col gap-4 relative'>
      <picture>
        <source
          media='(min-width:1024px)'
          srcSet='/assets/images/hero-desktop.webp'
          width='1110'
          height='600'
        />
        <source
          media='(min-width:768px)'
          srcSet='/assets/images/hero-tablet.webp'
          width='688'
          height='600'
        />
        <img
          src='/assets/images/hero-mobile.webp'
          alt='Hero'
          width='311'
          height='271'
          className='w-full'
        />
      </picture>
      <div className='relative flex flex-col gap-4 bg-very-light-grey
        md:justify-center md:absolute md:bottom-0 md:w-3/4
        md:h-9/20
        lg:w-2/5 lg:h-3/5'
      >
        <h1 className='font-ibarra font-bold
          text-4xl md:text-5xl lg:text-4xl xl:text-6xl
          lg:tracking-wide tracking-tighter
          w-9/10
          grow md:flex md:items-center
          '
        >
          Hey, I&rsquo;m Kelly Popko and I am a software developer
        </h1>
        <a
          href='#about-me'
          className='w-52 flex items-center
          transition-all delay-300 duration-150 ease-in-out
          cursor-pointer hover:bg-muted-cyan hover:text-white
          bg-dark-blue text-light-grey
          uppercase md:bottom-0'
        >
          <Arrows className='' />
          <span className='flex grow justify-center'>
            About Me
          </span>
        </a>
      </div>
    </section>
  )
}
