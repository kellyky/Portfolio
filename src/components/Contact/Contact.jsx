import Button from '../Button/Button'

export default function Contact() {
  return (
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
      <Button isPrimary={false} isButton={true}
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
  )
}
