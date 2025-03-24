import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'
import { ModalContextProvider } from '../store/modal-context'

export default function Root() {
  return(
    <>
      <ModalContextProvider>
        <Header />
          <Outlet />
          <Contact />
        <Footer />
      </ModalContextProvider>
    </>
  )
}
