import Social from '../Social/Social'

export default function ContactIntro () {
  return (
    <>
      <section className='flex flex-col
        gap-20 my-10 px-8
        lg:px-30 lg:flex-row '>
        <article className='py-8
          border-y-2 border-greyish-dark-blue/15
          md:flex md:flex-col md:gap-4
          lg:flex lg:flex-row lg:justify-baseline
          '>
          <h2 className='flex font-bold
            text-4xl xl:text-5xl
            lg:grow
            tracking-normal
            '
          >Get in Touch</h2>
          <div className='flex flex-col gap-4
            lg:flex-col lg:max-w-6/10
              '
          >
            <p>
              I’m seeking backend or full-stack roles where I can make an impact and keep growing—ideally Ruby/Rails backend, remote/hybrid, or local to the Milwaukee area. I love building tools that make life easier for both internal teams and external customers. If you know of opportunities—or just want to reconnect—let’s talk!
Reach out if you would like to collaborate — or if you know an  a team that could use a Rails developer with a knack for debugging, integrations, and user experience — I’d love to connect. Check out my GitHub or LinkedIn to see what I’ve been working on, then drop me a note here!
            </p>
            <Social color="fill-greyish-dark-blue" />
          </div>

        </article>
      </section>
    </>
  )
}
