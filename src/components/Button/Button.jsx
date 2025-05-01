import { Link } from 'react-router'

export default function Button ({ children, isButton, ...args }) {
  const button = <button {...args}>{children}</button>
  const link = <Link {...args}
        className='w-52 p-4 flex justify-center
        border border-greyish-dark-blue
        uppercase text-xs tracking-widest
        '>
          {children}
      </Link>

  return (
    <>
      {isButton ? button : link}
    </>
  )
}

