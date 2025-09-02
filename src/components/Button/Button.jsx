import { Link } from 'react-router'

export default function Button ({ children, isButton, ...args }) {
  const button =
    <button {...args}>{children}</button>

  const link =
    <Link {...args}
      className='w-52 p-4 min-w-52 h-min flex justify-center
      border border-greyish-dark-blue
      uppercase text-xs tracking-widest
      hover:bg-greyish-dark-blue
      hover:text-very-light-grey'
    >
      {children}
    </Link>

  return (
    <>
      {isButton ? button : link}
    </>
  )
}
