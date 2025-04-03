import Arrows from '../../assets/icons/Arrows'

export default function Button ({ children, isButton, isPrimary, ...args }) {
  const Tag = isButton ? 'button' : 'a'
  return (
    <Tag {...args}>
      {isPrimary && <Arrows />}
      <div className='flex grow-1 tracking-widest items-center justify-center'>
        {children}
      </div>
    </Tag>
  )
}
