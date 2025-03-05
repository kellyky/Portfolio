import Button from '../components/Button/Button'

export function LandingPage(){
  return(
    <main className="h-screen grow-1 self-center px-8">
      <section className="flex flex-col gap-4 relative">
        <picture>
          <source
            media="(max-width:992px)"
            srcSet="/assets/images/hero-tablet.jpg"
          />
          <source
            media="(min-width:1024px)"
            srcSet="/assets/images/hero-desktop.jpg"
          />
          <img src="/assets/images/hero-mobile.jpg" alt="Hero" />
        </picture>
        <div className="relative flex flex-col gap-4 bg-white
          md:justify-center md:absolute md:bottom-0 md:w-3/4
          md:h-278/600 lg:w-2/5 lg:h-3/5"
        >
          <h1 className="font-ibarra font-bold
            text-4xl xl:text-6xl
            lg:tracking-wide tracking-tighter
            text-greyish-dark-blue md:w-4/5 lg:w-4/5">
            Hey, I'm Kelly Popko and I am a software developer
          </h1>
          <Button isPrimary={true} className="inline-flex w-3/5
            md:w-2/5 lg:h-1/8  bg-dark-blue items-center font-public-sans
            text-light-grey uppercase md:absolute md:bottom-0">About Me
          </Button>
        </div>
      </section>
    </main>
  )
}
