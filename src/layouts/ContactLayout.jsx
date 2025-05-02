import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { ModalContextProvider } from '../store/modal-context'

export default function ContactLayout () {
  return (
    <>
      <ModalContextProvider>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </ModalContextProvider>
    </>
  )
}

