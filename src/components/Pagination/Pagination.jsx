import { PageLeft } from '../../assets/icons/PageLeft'
import { PageRight } from '../../assets/icons/PageRight'
import Button from '../Button/Button'
import usePagination from '../../hooks/usePagination'

export default function Pagination () {
  const [
    previousProject,
    nextProject,
    handlePreviousPage,
    handleNextPage
  ] = usePagination()

  // styles
  const headingStyle = `text-dark-greyish-blue
                        max-[420px]:text-2xl max-[500px]:text-3xl text-4xl`
  const buttonStyle  = `flex flex-col justify-between gap-2 lg:gap-4 py-6`
  const textStyle    = `opacity-50 text-dark-greyish-blue`

  return (
    <>
      <section
        className='
        grid grid-cols-2 divide-x-2 divide-solid divide-greyish-dark-blue/10
        border-y-2 border-greyish-dark-blue/10
        '
      >
        <Button
          isButton ={true}
          onClick={handlePreviousPage}
          className={`${buttonStyle} items-start`}
        >
          <PageLeft />
          <h2 className={`${headingStyle} text-left`}>
            {previousProject.name}
          </h2>

          <span className={`${textStyle} text-left`}>
            Previous Project
          </span>
        </Button>
        <Button
          isButton={true}
          onClick={handleNextPage}
          className={`${buttonStyle} items-end`}
        >
          <PageRight />
          <h2 className={ `${headingStyle} text-right`} >
              {nextProject.name}
          </h2>
          <span className={`${textStyle} text-right`}>
            Next Project
          </span>
        </Button>
      </section>
    </>
  )
}

