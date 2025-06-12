import ContactForm from '../components/ContactForm/ContactForm'
import ContactIntro from '../components/ContactIntro/ContactIntro'
import { useActionData } from 'react-router-dom'

function ContactPage () {
  const actionData = useActionData()

  return (
    <main className={`
      bg-blue-300
      grow flex flex-col
      ${ actionData?.success && 'blur-xs overflow-hidden' }
      `}
      >
      <ContactIntro />
      <ContactForm />
    </main>
  )
}

export const Component = ContactPage

