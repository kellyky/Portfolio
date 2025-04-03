import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { ModalContextProvider } from '../store/modal-context'

export default function Root () {
  return (
    <>
      <ModalContextProvider>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Contact />
        <Footer />
      </ModalContextProvider>
    </>
  )
}
