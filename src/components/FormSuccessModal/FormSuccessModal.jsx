import { createPortal } from 'react-dom'
import { Link } from 'react-router'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import Button from '../Button/Button'
import { PaperAirplane } from '../../assets/icons/PaperAirplane'

export default function FormSuccessModal () {
  const { width, height } = useWindowSize()

  return createPortal(
    <>
      {
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={150}
        /> }

      <dialog
        className='
        flex
        flex-col
        rounded-lg
        w-2/3
        inset-0
        fixed
        max-w-dvw
        h-max-dvh
        m-auto
        h-[5rem]
        '
        open
      >
        <img
          src='/assets/images/contact-confirmation/beach_umbrella.webp'
          alt='Black and white sketch of a beach and umbrella'
          className='
          rounded-tl-lg
          rounded-tr-lg
          '
        />

        <div className='bg-white
          rounded-bl-lg
          rounded-br-lg
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          p-4
          '>
          <div>
            <strong>Thanks for reaching out!</strong>
            <p>I will be in touch soon.</p>
            <PaperAirplane />
          </div>
          <Button
            className=''
          >
            back
          </Button>
        </div>

      </dialog>

    </>,
    document.body
  )
}

