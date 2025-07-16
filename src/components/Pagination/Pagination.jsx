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
  const buttonStyle  = `flex flex-col justify-between gap-2 py-4
                        lg:flex-row lg:items-center lg:gap-4`
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
          className={`${buttonStyle} items-start lg:justify-start`}
        >
          <div id="page-left" className='
            gap-4
            flex flex-col
            lg:flex-row
            lg:items-center
            '
          >
            <PageLeft />
            <div className='flex flex-col'>
              <h2 className={`${headingStyle} text-left`}>
                {previousProject.name}
              </h2>

              <span className={`${textStyle} text-left`}>
                Previous Project
              </span>
            </div>
          </div>
        </Button>
        <Button
          isButton={true}
          onClick={handleNextPage}
          className={`${buttonStyle} items-end lg:justify-start lg:flex-row-reverse
          `}
        >
          <div id="page-right" className='
            gap-4
            flex flex-col
            items-end
            lg:flex-row-reverse
            lg:items-center
            '
          >
            <PageRight />
            <div className='flex flex-col'>
              <h2 className={`${headingStyle} text-right`} >
                  {nextProject.name}
              </h2>
              <span className={`${textStyle} text-right`}>
                Next Project
              </span>
            </div>
          </div>
        </Button>
      </section>
    </>
  )
}

