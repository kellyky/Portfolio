import { useNavigate, useParams } from 'react-router-dom'
import { PageLeft } from '../../assets/icons/PageLeft'
import { PageRight } from '../../assets/icons/PageRight'
import { PROJECTS } from '../../utils/data-projects'
import Button from '../Button/Button'

export default function Pagination () {
  const params = useParams()
  const currentProject = PROJECTS.find(project => project.name === params.name )
  const previousProjectId = (currentProject.id - 1 + 4) % 4 || 4
  const previousProject = PROJECTS.find(project => project.id === previousProjectId )

  const nextProjectId = currentProject.id % 4 + 1
  const nextProject = PROJECTS.find(project => project.id === nextProjectId )

  let navigate = useNavigate()

  function handlePreviousPage () {
    navigate(`/portfolio/${previousProject.name}`)
  }

  function handleNextPage () {
    navigate(`/portfolio/${nextProject.name}`)
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

