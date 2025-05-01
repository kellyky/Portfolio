import Button from '../Button/Button'

export default function Contact () {
  return (
    <section className='flex flex-col mb-12
        @container
        flex
        flex-col
        items-center
        md:flex-row
      '
    >
      <h2 className='
        py-8
        text-4xl font-bold text-center
        md:text-left
        md:pt-6
        md:max-w-1/2
        lg:w-lg
        xl:text-5xl
        xl:w-2xl
        '
      >Interested in doing a project together?
      </h2>
      <hr className='
        hidden self-center
        border-y-1 border-greyish-dark-blue/10
        md:flex
        md:w-sm
        md:mx-6
        lg:w-2xl
        2xl:w-5xl
      '
      />
      <Button
        isButton={false}
        to='/contact'
      >Contact me
      </Button>
    </section>
  )
}
