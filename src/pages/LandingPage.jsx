import Button from '../components/Button/Button'

export function LandingPage(){
  return(
    <main className="h-full grow-1 self-center px-8">
      <section className="flex flex-col gap-4 relative">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet="/assets/images/hero-desktop.jpg"
          />
          <source
            media="(min-width:768px)"
            srcSet="/assets/images/hero-tablet.jpg"
          />
          <img
            src="/assets/images/hero-mobile.jpg"
            alt="Hero"
            className="w-full"
          />
        </picture>
        <div className="relative flex flex-col gap-4 bg-very-light-grey
          md:justify-center md:absolute md:bottom-0 md:w-3/4
          md:h-278/600 lg:w-2/5 lg:h-3/5"
        >
          <h1 className="font-ibarra font-bold
            text-4xl md:text-5xl lg:text-4xl xl:text-6xl
            lg:tracking-wide tracking-tighter
            text-greyish-dark-blue md:w-4/5 lg:w-4/5">
            Hey, I'm Kelly Popko and I am a software developer
          </h1>
          <Button isPrimary={true} className="inline-flex
            sm:max-w-xs max-w-3xs md:w-2/5 lg:h-1/8 lg:w-1/2
            bg-dark-blue items-center font-public-sans
            text-light-grey uppercase md:absolute md:bottom-0">About Me
          </Button>
        </div>
      </section>
      <section className="flex flex-col gap-8 my-16
        md:flex-row md:justify-center md:gap-14
        lg:flex-row
        ">
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet="/assets/images/headshot_no_bg.png"
            // srcSet="/assets/images/headshot-desktop.jpg"
          />
          <source
            media="(min-width:768px)"
            srcSet="/assets/images/headshot-tablet.jpg"
          />
          <img src="/assets/images/headshot-mobile.jpg" alt="TODO: PLACEHOLDER"
          />
        </picture>
        <div className="border-y-2 flex flex-col
          border-greyish-dark-blue/10
          gap-4 py-4
          md:w-19/20 md:justify-center md:gap-8 md:w-sm
          lg:mx-auto lg:w-4/10 lg:justify-center
          xl:gap-20
          font-public-sans
          "
        >
          <h2 className="font-ibarra font-bold
            text-4xl xl:text-5xl
            tracking-normal text-greyish-dark-blue
            md:pt-6
          ">About Me</h2>
          <article className="
            text-base text-greyish-dark-blue opacity-80 leading-8
            lg:tracking-wide lg:text-lg
            xl:tracking-wide xl:text-xl
          ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ligula id odio scelerisque aliquet. Integer non nisi vitae justo efficitur sagittis. Vivamus dictum, odio non vehicula gravida, nunc arcu laoreet metus, vel ultricies odio justo nec odio. Praesent sit amet feugiat enim. Duis aliquam, erat eget gravida vehicula, ligula elit blandit eros, nec vehicula purus odio ac libero. Integer auctor elit nec erat pharetra feugiat.</article>
          <Button isPrimary={false}
            className="uppercase border py-4
              w-3xs
              md:w-11/20 lg:w-1/2 xl:w-xs 2xl:w-sm
              text-greyish-dark-blue border-greyish-dark-blue
              text-xs
              xl:text-lg
            "
          >Go to Portfolio</Button>
        </div>
      </section>
      <section className="flex flex-col gap-8 my-12
          flex
          flex-col
          items-center
          md:flex-row
        ">
        <h2 className="font-ibarra font-bold
          text-center md:text-left
          py-8
          text-4xl xl:text-5xl
          lg:w-lg
          xl:w-2xl
          tracking-normal text-greyish-dark-blue
          md:pt-6
          ">Interested in doing a project together?</h2>
        <hr className="
          hidden
          md:flex
          md:w-3xs
          lg:w-2xl
          2xl:w-5xl
          lg:mx-auto
          self-center
          border-greyish-dark-blue/10
          border-y-1
        " />
        <Button isPrimary={false}
          className="uppercase border py-4
            w-3xs
            md:w-11/20 lg:w-3xs xl:w-xs 2xl:w-sm
            text-greyish-dark-blue border-greyish-dark-blue
            text-xs
            xl:text-lg
            font-public-sans
          "
        >Contact me</Button>
      </section>
    </main>
  )
}
