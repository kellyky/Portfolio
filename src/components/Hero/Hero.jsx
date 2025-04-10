import Button from '../Button/Button'

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
        md:h-278/600 lg:w-2/5 lg:h-3/5'
      >
        <h1 className='font-ibarra font-bold
          text-4xl md:text-5xl lg:text-4xl xl:text-6xl
          lg:tracking-wide tracking-tighter
          text-greyish-dark-blue md:w-4/5 lg:w-4/5'
        >
          Hey, I&rsquo;m Kelly Popko and I am a software developer
        </h1>
        <Button
          isButton={false}
          isPrimary
          href='#about-me'
          className='inline-flex group
          transition-all delay-300 duration-150 ease-in-out
          cursor-pointer hover:bg-muted-cyan hover:text-white
          sm:max-w-xs max-w-3xs md:w-2/5 lg:h-1/8 lg:w-1/2
          bg-dark-blue items-center font-public-sans
          text-light-grey uppercase md:absolute md:bottom-0'
        >
          About Me
        </Button>
      </div>
    </section>
  )
}
