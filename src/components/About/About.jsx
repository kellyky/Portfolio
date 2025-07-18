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
              I’m a software engineer who loves building user-first apps. I thrive on untangling bugs, writing strong tests, and making sure the code works for the people who rely on it.

My background in QA, customer experience, supply chain, and fulfillment means I understand how good software keeps real-world operations running smoothly. I ask good questions, bridge gaps, and keep projects moving — with a bias for clear, reliable solutions.

Outside of coding, I experiment with digital art, formulating skincare products, and playing various music styles with local musicians.
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
