import { Link } from 'react-router'
import { use } from 'react'
import Button from '../components/Button/Button'
import ModalContext from '../store/modal-context'

export default function LandingPage () {
  const { modalState } = use(ModalContext)

  return (
    <main className={
      `size-full grow-1 self-center px-8
      ${modalState ? 'blur-xs overflow-hidden' : ''}`
      }
    >
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
      <section
        id='about-me'
        className='flex flex-col gap-8 my-16
        md:flex-row md:justify-center md:gap-14
        lg:flex-row
        '
      >
        <picture>
          <source
            media='(min-width:1024px)'
            srcSet='/assets/images/headshot-desktop.webp'
            width='540'
            height='600'
          />
          <source
            media='(min-width:768px)'
            srcSet='/assets/images/headshot-tablet.webp'
            width='281'
            height='600'
          />
          <img
            src='/assets/images/headshot-mobile.webp'
            alt='TODO: PLACEHOLDER'
            width='346'
            height='311'
          />
        </picture>
        <div className='border-y-2 flex flex-col
          border-greyish-dark-blue/10
          gap-4 py-4
          md:w-19/20 md:justify-center md:gap-8 md:w-sm
          lg:mx-auto lg:w-4/10 lg:justify-center
          xl:gap-20
          font-public-sans
          '
        >
          <h2 className='font-ibarra font-bold
            text-4xl xl:text-5xl
            tracking-normal text-greyish-dark-blue
            md:pt-6
          '
          >About Me
          </h2>
          <article className='
            text-base text-greyish-dark-blue opacity-80 leading-8
            lg:tracking-wide lg:text-lg
            xl:tracking-wide xl:text-xl
          '
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ligula id odio scelerisque aliquet. Integer non nisi vitae justo efficitur sagittis. Vivamus dictum, odio non vehicula gravida, nunc arcu laoreet metus, vel ultricies odio justo nec odio. Praesent sit amet feugiat enim. Duis aliquam, erat eget gravida vehicula, ligula elit blandit eros, nec vehicula purus odio ac libero. Integer auctor elit nec erat pharetra feugiat.
          </article>
          <Link to='/portfolio'>
            <Button
              isPrimary={false}
              isButton
              className='uppercase border py-4
                w-3xs
                md:w-11/20 lg:w-1/2 xl:w-xs 2xl:w-sm
                text-greyish-dark-blue border-greyish-dark-blue
                text-xs
                xl:text-lg
              '
            >Go to Portfolio
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
