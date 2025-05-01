export default function PreviewImage ({images}) {
  return (
    <>
      <picture className='flex flex-col mx-auto w-full'>
        <source
          srcSet={images[2]}
          media='(min-width:1024px)'
        />
        <source
          srcSet={images[1]}
          media='(min-width:768px)'
        />
        <img
          src={images[0]}
          alt='project-hero'
        />
      </picture>
    </>
  )
}

