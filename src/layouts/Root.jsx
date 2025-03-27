import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { ModalContextProvider } from '../store/modal-context'

export default function Root() {
  return(
    <>
      <ModalContextProvider>
        <Header />
          <Outlet />
        <Footer />
      </ModalContextProvider>
    </>
  )
}
