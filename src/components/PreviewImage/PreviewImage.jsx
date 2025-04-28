export default function PreviewImage ({images}) {
  return (
    <>
      <picture>
        <source
          srcSet={images[2]}
          media='(min-width:1024px)'
          width='1110'
          height='500'
        />
        <source
          srcSet={images[1]}
          media='(min-width:768px)'
          width='689'
          height='310'
        />
        <img
          src={images[0]}
          alt='project-hero'
          width='311'
          height='310'
          className=''
        />
      </picture>
    </>
  )
}

