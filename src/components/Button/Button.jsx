export default function Button({children, isPrimary, ...args}) {
  return (
    <button {...args}>
        { isPrimary && <img src='/assets/icons/ButtonAgain.svg' alt="downward arrow" className="h-full" />}
      <div className="flex grow-1 tracking-widest items-center justify-center">
        { children }
      </div>
    </button>
  )
}
