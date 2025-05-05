import Arrows from '../../assets/icons/Arrows'
import { motion } from 'motion/react'

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
      <motion.div
        className='relative flex flex-col gap-4 bg-very-light-grey
        md:justify-center md:absolute md:bottom-0
        md:w-[32rem] md:h-[17rem]
        lg:w-[27rem] lg:h-[22rem]'
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, duration: 3 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <h1 className='
          font-bold
          text-4xl md:text-5xl
          w-9/10
          grow md:flex md:items-center
          text-shadow-sm/30
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
      </motion.div>
    </section>
  )
}
