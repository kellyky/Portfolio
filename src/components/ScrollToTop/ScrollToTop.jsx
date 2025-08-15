import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = (props) => {
  const location = useLocation()
  const lastPathname = useRef(location.pathname)

  useEffect(() => {
    if (location.pathname !== lastPathname.current) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      lastPathname.current = location.pathname
    }
  }, [location])

  return (
    <>
      {props.children}
    </>
  )
}

export default ScrollToTop
