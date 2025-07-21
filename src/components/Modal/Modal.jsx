import { createPortal } from 'react-dom'
import { use, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { motion } from 'motion/react'
import ModalContext from '../../store/modal-context'

export function Modal () {
  const { closeModal } = use(ModalContext)

  // wip
  const [isVisible, setIsVisible] = useState(true)

  const toggleModal = () => {
    setIsVisible(!isVisible)
  }

  const modalRef = useRef()
  // console.log('modalRef.current:', modalRef.current)

  const handleClickOutside = (event) => {
    console.log(modalRef.current && !modalRef.current.contains(event.target))
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      // toggleModal()
      closeModal()
      // setIsVisible(true);
    }
  }

  useEffect(() => {
    if(isVisible){
      console.log('1')
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      console.log('2')
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isVisible])



  // const closeModal = () => {
  //   setIsVisible(false)
  // }

  const location = useLocation()

  return createPortal(
    <>
      <div
        className='fixed z-10 top-20 right-8 size-50 md:hidden'
        style={{ display: isVisible ? 'inline-block' : 'none' }}
        ref={modalRef}
      >
        <motion.div
          key='modal'
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: '100%', opacity: 1 }}
          exit={{ width: 0 }}
          transition={{ ease: 'anticipate', duration: 1 }}
          className='
          w-50 h-45
          bg-greyish-dark-blue text-very-light-grey
          float-right right-0

          '
        >
          <motion.ul
            initial={{
              opacity: 0
            }}

            animate={{
              opacity: 1
            }}

            transition={{
              delay: 0.3,
              ease: 'easeInOut'
            }}

            exit={{
              opacity: 0,
              duration: 100,
            }}

            className='

            h-full
            flex flex-col items-center justify-center gap-8
            uppercase text-xs tracking-widest
            overflow-hidden
            '
          >
            <li><Link to='/' onClick={closeModal} >Home</Link></li>
            <li><Link to='/portfolio' onClick={closeModal} >Portfolio</Link></li>
            <li><Link to='/contact' onClick={closeModal} >Contact Me</Link></li>
          </motion.ul>
        </motion.div>
      </div>
    </>,
    document.body
  )
}
