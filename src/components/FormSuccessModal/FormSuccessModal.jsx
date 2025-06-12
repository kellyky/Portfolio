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

      <div className='
        md:size-1/5
        '>

        <dialog
          className='
          flex
          flex-col
          rounded-lg
          w-2/3
          inset-0
          fixed
          m-auto
          h-[5rem]

          md:flex-row
          md:h-fit
          md:pb-4
          lg:max-w-2xl
          '
          open
        >
          <img
            src='/assets/images/contact-confirmation/beach_umbrella.webp'
            alt='Black and white sketch of a beach and umbrella'
            className='
            rounded-tl-lg
            rounded-tr-lg

            md:w-1/2
            md:h-fit
            '
          />

          <div className='bg-white
            rounded-bl-lg
            rounded-br-lg
            flex
            flex-col
            justify-between
            items-center
            p-4

            md:flex-col
            md:gap-[1rem]
            md:h-full
            md:my-auto

            '>
            <div
              className='
              flex flex-col items-center
              
              '
            >
              <h3
                className='
                font-bold
                text-xl
                '
              >Thanks for reaching out!</h3>
              <div
                className='flex items-center gap-2'
              >
                <p>I will be in touch soon.</p>
                <PaperAirplane
                  className='
                  fill-greyish-dark-blue
                  size-6
                  '
                />
              </div>
            </div>
            <Button
              className=''
            >
              back
            </Button>
          </div>

        </dialog>
      </div>

    </>,
    document.body
  )
}

