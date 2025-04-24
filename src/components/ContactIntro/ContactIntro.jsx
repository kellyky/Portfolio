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
          <h2 className='flex font-ibarra font-bold
            text-4xl xl:text-5xl
            lg:grow
            tracking-normal
            '
          >Get in Touch</h2>
          <div className='flex flex-col gap-4
            lg:flex-col lg:max-w-6/10
              '
          >
            <p className='font-public-sans'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Voluptatem sequi nesciunt, neque porro quisquam est qui dolorem ipsum quia dolor sit amet. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit. Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur?
            </p>
            <Social color="fill-greyish-dark-blue" />
          </div>

        </article>
      </section>
    </>
  )
}
