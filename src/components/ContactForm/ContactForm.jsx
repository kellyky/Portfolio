import { Form, redirect, useActionData } from 'react-router-dom'
import Button from '../Button/Button'
import FormSuccessModal from '../FormSuccessModal/FormSuccessModal'

export default function ContactForm () {
  const actionData = useActionData()

  const styleFormInputs = 'p-2 bg-greyish-dark-blue/10 text-greyish-dark-blue/60'
  const styleErrors = 'text-bright-red italic'
  const styleLabels = 'font-bold opacity-80 pb-2'

  return (
    <section className='flex flex-col justify-center gap-8
      px-8 w-full
      lg:flex-row lg:px-30 lg:justify-between
      '>
      { <FormSuccessModal /> }
        <h2 className='font-bold text-4xl xl:text-5xl'
        >Contact Me</h2>
        <Form
          method='post'
          noValidate
          className='flex flex-col gap-4 min-h-[490px]
          lg:justify-baseline lg:min-w-6/10'
        >
          <div className='flex flex-col pb-4'>
            <label
              htmlFor='name'
              className={styleLabels}
            >
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Frodo Baggins'
              className={`${styleFormInputs} ${ actionData?.invalidName ?
                  'border border-bright-red' : ''
              }`}
            />
            {
              actionData?.invalidName &&
                <span className={styleErrors}>{actionData.invalidName}</span>
            }
          </div>

          <div className='flex flex-col pb-4'>
            <label
              htmlFor='email'
              className={styleLabels}
            >
              Email Address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='frodo@bag-end.shire'
              className={`${styleFormInputs} ${ actionData?.invalidEmail ?
                  'border border-bright-red' : ''
              }`}
            />
            {
              actionData?.invalidEmail &&
                <span className={styleErrors}>{actionData.invalidEmail}</span>
            }
          </div>

          <div className='flex flex-col pb-4'>
            <label
              htmlFor='message'
              className={styleLabels}
            >
              Message
            </label>
            <textarea
              name='message'
              id='message'
              rows="4"
              placeholder='How can I help?'
              className={`${styleFormInputs} ${ actionData?.invalidMessage ?
                  'border border-bright-red' : ''
              }`}
            />
            {
              actionData?.invalidMessage &&
                <span className={styleErrors}>{actionData.invalidMessage}</span>
            }
          </div>

          <Button
            type='submit'
            isButton={true}
            className='flex w-[200px] h-[48px]
              mb-6 lg:mb-10
              items-center justify-center
              uppercase tracking-wide
              bg-dark-blue text-white
            '
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
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const postData = {
    name: enteredName,
    email: enteredEmail,
    message: enteredMessage
  }

  let actionData = new Object()

  if(enteredName.trim().length === 0) {
    actionData.invalidName = 'Please provide a name'
  }

  if(!regexEmail.test(enteredEmail)) {
    actionData.invalidEmail = 'Please provide a valid email'
  }

  if(enteredMessage.trim().length === 0) {
    actionData.invalidMessage = 'Please provide a message'
  }

  if(Object.keys(actionData).length >= 1){
    return actionData
  }

  try {
    const response = await fetch(import.meta.env.VITE_FORMSPREE_API, {
      method: "POST",
      headers:  {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })

    if (response.ok) {
      return { success: true }

    }
  } catch (error) {
    console.log("The form did not send")
    console.log(error)
  }
}
