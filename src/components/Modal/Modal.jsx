import { createPortal } from 'react-dom';

export function Modal() {
  return createPortal(
    <>
      <div className="absolute z-10 top-20 right-8 size-50 md:hidden">
        <dialog open
          className="
          w-50 h-45
          bg-greyish-dark-blue text-very-light-grey
          "
        >
          <ul className="h-full flex flex-col items-center justify-center
            px-10 gap-8
            uppercase font-public-sans text-xs tracking-widest
            ">

            <li>Home</li>
            <li>Portfolio</li>
            <li>Contact Me</li>
          </ul>
        </dialog>
      </div>
    </>,
    document.body
  )
}
