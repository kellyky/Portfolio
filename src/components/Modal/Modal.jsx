import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Link } from "react-router";

export function Modal() {
  return createPortal(
    <>
      <div className="fixed z-10 top-20 right-8 size-50 md:hidden">
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

            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </dialog>
      </div>
    </>,
    document.body
  )
}
