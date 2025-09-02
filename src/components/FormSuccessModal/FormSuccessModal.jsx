import { createPortal } from 'react-dom'
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
          p-4
          shadow-lg shadow-dark-blue/60
          md:flex-row
          h-fit
          lg:max-w-2xl
          '
          open
        >
          <img
            src='/assets/images/contact-confirmation/beach_umbrella.webp'
            alt='Black and white sketch of a beach and umbrella'
            className='

            md:w-1/2
            md:h-full
            '
          />

          <div className='bg-white
            flex
            flex-col
            grow
            gap-4
            md:gap-0
            justify-evenly
            items-center
            h-auto
            md:flex-col
            md:gap-[1rem]
            md:h-auto
            lg:p-4
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

