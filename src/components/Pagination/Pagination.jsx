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

  return (
    <>
      <section>
        <Button
          isButton={true}
          onClick={handlePreviousPage}
          className=''
        >
          <PageLeft />
          {previousProject.name}
          Previous Project
        </Button>
        <Button
          isButton={true}
          onClick={handleNextPage}
          className=''
        >
          <PageRight />
          {nextProject.name}
          Next Project
        </Button>
      </section>
    </>
  )
}

