import Button from '../Button/Button'
import { Link } from 'react-router'

export default function About () {
  return (
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
  )
}
