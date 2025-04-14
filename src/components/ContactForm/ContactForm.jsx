import { useRef, useState } from 'react'
import Button from '../Button/Button'

export default function ContactForm () {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const [name, setName] = useState("")

  function handleSubmit (event) {
    event.preventDefault()
    if(nameRef.current.value === "Kelly"){
      alert('Hello, Kelly!')
    } else {
      alert('Hello, not Kelly!')
    }
  }

  return (
    <section className='flex flex-col justify-center gap-8
      px-8 w-full
      lg:flex-row lg:px-30 lg:justify-between
      '>
        <h2 className='font-ibarra font-bold text-4xl xl:text-5xl
          tracking-tight text-greyish-dark-blue
          '
        >Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-4 min-h-[490px]
          font-public-sans text-color-greyish-dark-blue font-bold
          lg:justify-baseline lg:min-w-6/10'
        >

          <div className='flex flex-col pb-4'>
            <label htmlFor='name' className='pb-2'>Name:</label>
            <input type='text' name='name' id='name' ref={nameRef}
              placeholder='Frodo Baggins'
              className='p-2 bg-greyish-dark-blue/10 text-greyish-dark-blue/60'
            />
          </div>

          <div className='flex flex-col pb-4'>
            <label htmlFor='email' className='pb-2'>Email Address:</label>
            <input type='email' name='email' id='email' ref={emailRef}
              placeholder='frodo@bag-end.shire'
              className='p-2 bg-greyish-dark-blue/10 text-greyish-dark-blue/60'
            />
          </div>

          <div className='flex flex-col pb-4'>
            <label htmlFor='message' className='pb-2'>Message:</label>
            <textarea name='message' id='message' rows="4" ref={messageRef}
              placeholder='How can I help?'
              className='p-2 bg-greyish-dark-blue/10 text-greyish-dark-blue/60'
            />
          </div>

          <Button
            type='submit'
            isButton={true}
            className='flex w-[200px] h-[48px]
            uppercase tracking-wide
            bg-dark-blue text-white'
          >
            Send Message
          </Button>

        </form>
    </section>
  )
}
