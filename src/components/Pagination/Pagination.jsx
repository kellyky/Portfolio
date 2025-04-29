import { PageLeft } from '../../assets/icons/PageLeft'
import { PageRight } from '../../assets/icons/PageRight'
import { PROJECTS } from '../../utils/data-projects'
import Button from '../Button/Button'

export default function Pagination ({previous, next, setPagination}) {
  function handlePreviousPage () {
    setPagination(previous => (previous - 1 + 4) % 4 )
  }

  function handleNextPage () {
    setPagination(next => (next % 4) + 1)
  }

  return (
    <>
      <section>
        <Button
          isButton={true}
          onClick={handlePreviousPage}
          className=''
        >
          <PageLeft />
          {previous}
          Previous Project
        </Button>
        <Button
          isButton={true}
          onClick={handleNextPage}
          className=''
        >
          <PageRight />
          {next}
          Next Project
        </Button>
      </section>
    </>
  )
}

