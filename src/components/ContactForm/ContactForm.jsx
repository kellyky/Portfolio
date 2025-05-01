import { Form, redirect, useActionData } from 'react-router-dom'
import Button from '../Button/Button'

export default function ContactForm () {
  const validateErrors = useActionData()
  const styleFormInputs = 'p-2 bg-greyish-dark-blue/10 text-greyish-dark-blue/60'
  const styleErrors = 'text-bright-red italic'

  return (
    <section className='flex flex-col justify-center gap-8
      px-8 w-full
      lg:flex-row lg:px-30 lg:justify-between
      '>
        <h2 className='font-bold text-4xl xl:text-5xl'
        >Contact Me</h2>
        <Form
          method='post'
          noValidate
          className='flex flex-col gap-4 min-h-[490px]
          font-bold
          lg:justify-baseline lg:min-w-6/10'
        >
          <div className='flex flex-col pb-4'>
            <label
              htmlFor='name'
              className='pb-2'
            >
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Frodo Baggins'
              className={`${styleFormInputs} ${ validateErrors?.invalidName ?
                  'border border-bright-red' : ''
              }`}
            />
            {
              validateErrors?.invalidName &&
                <span className={styleErrors}>{validateErrors.invalidName}</span>
            }
          </div>

          <div className='flex flex-col pb-4'>
            <label
              htmlFor='email'
              className='pb-2'
            >
              Email Address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='frodo@bag-end.shire'
              className={`${styleFormInputs} ${ validateErrors?.invalidEmail ?
                  'border border-bright-red' : ''
              }`}
            />
            {
              validateErrors?.invalidEmail &&
                <span className={styleErrors}>{validateErrors.invalidEmail}</span>
            }
          </div>

          <div className='flex flex-col pb-4'>
            <label
              htmlFor='message'
              className='pb-2'
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              rows="4"
              placeholder='How can I help?'
              className={`${styleFormInputs} ${ validateErrors?.invalidMessage ?
                  'border border-bright-red' : ''
              }`}
            />
            {
              validateErrors?.invalidMessage &&
                <span className={styleErrors}>{validateErrors.invalidMessage}</span>
            }
          </div>

          <Button
            type='submit'
            isButton={true}
            className='flex w-[200px] h-[48px]
            items-center justify-center
            uppercase tracking-wide
            bg-dark-blue text-white'
          >
            Send Message
          </Button>

        </Form>

    </section>
  )
}

export async function action({ request }) {
  const formData = await request.formData()
  const enteredName = formData.get('name')
  const enteredEmail = formData.get('email')
  const enteredMessage = formData.get('message')
  const regexEmail = /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/

  const postData = {
    name: enteredName,
    email: enteredEmail,
    message: enteredMessage
  }

  let validateErrors = new Object()

  if(enteredName.trim().length === 0) {
    validateErrors.invalidName = 'Please provide a name'
  }


  if(!regexEmail.test(enteredEmail)) {
    validateErrors.invalidEmail = 'Please provide a valid email'
  }

  if(enteredMessage.trim().length === 0) {
    validateErrors.invalidMessage = 'Please provide a message'
  }

  if(Object.keys(validateErrors).length >= 1){
    return validateErrors
  }

  return redirect('/')
    // return null
}
