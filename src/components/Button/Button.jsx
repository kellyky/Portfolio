import Arrows from '../../assets/icons/Arrows'

export default function Button ({ children, isButton, isPrimary, ...args }) {
  const Tag = isButton ? 'button' : 'a'
  return (
    <Tag {...args}>
      {isPrimary && <Arrows />}
      <div className='
        flex grow-1 py-4 tracking-widest items-center justify-center
        w-[200px] h-[48-px]
        text-xs font-public-sans uppercase
        '>
        {children}
      </div>
    </Tag>
  )
}
