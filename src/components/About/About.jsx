import Button from '../Button/Button'

export default function About () {
  return (
      <section
        className='flex flex-col gap-8
        md:flex-row md:justify-center md:gap-14
        '
      >
        <picture className='mx-auto'>
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
          '
        >
          <article
            id='about-me'
            className='flex flex-col gap-4
            '>
            <h2 className='font-bold
              text-4xl xl:text-5xl
              md:pt-6
            '
            >About Me
            </h2>
            <p className='font-thin'>
              I love building tools that make life easier for both internal teams and external customers. My path started at Tuft & Needle as employee #3, where I wore many hats—customer experience specialist, software QA, and eventually software engineer. All of this gave me a deep empathy for end-users and a knack for spotting issues before they reach them.
            </p>
          </article>
            <Button
              isButton={false}
              to='/portfolio'
            >Go to Portfolio
            </Button>
        </div>
      </section>
  )
}
