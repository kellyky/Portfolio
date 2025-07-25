import { Outlet } from 'react-router-dom'
import { use } from 'react'
import ModalContext from '../store/modal-context'
import Header from '../components/Header/Header'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import ScrollToHash from  '../utils/ScrollToHash'

export default function RootLayout () {
  const { modalState } = use(ModalContext)

  return (
    <>
      <ScrollToTop />
      <ScrollToHash />
      <Header />
      <main className={
        `flex flex-col size-full grow self-center
        gap-8 px-8
        md:gap-12 md:blur-none
        lg:gap-8 lg:px-30
        ${ modalState ? 'blur-xs overflow-hidden' : '' }
        `
        }
      >
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
