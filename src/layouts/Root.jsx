import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'

export default function Root() {
  return(
    <>
      <Header />
      <main className="size-full grow-1 self-center px-8">
        <Outlet />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
