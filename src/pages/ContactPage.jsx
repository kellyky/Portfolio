import ContactForm from '../components/ContactForm/ContactForm'
import ContactIntro from '../components/ContactIntro/ContactIntro'

function ContactPage () {
  return (
    <main className='grow flex flex-col'>
      <ContactIntro />
      <ContactForm />
    </main>
  )
}

export const Component = ContactPage

