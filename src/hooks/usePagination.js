import { useNavigate, useParams } from 'react-router-dom'
import { PROJECTS } from '../utils/data-projects'

export default function usePagination () {
  const params = useParams()
  const navigate = useNavigate()

  const currentProject = PROJECTS.find(project => project.name === params.name )
  const previousProjectId = (currentProject.id - 1 + PROJECTS.length) % PROJECTS.length || PROJECTS.length
  const previousProject = PROJECTS.find(project => project.id === previousProjectId )

  const nextProjectId = currentProject.id % PROJECTS.length + 1
  const nextProject = PROJECTS.find(project => project.id === nextProjectId )


  function handlePreviousPage () {
    navigate(`/portfolio/${previousProject.name}`)
  }

  function handleNextPage () {
    navigate(`/portfolio/${nextProject.name}`)
  }
  return [ previousProject, nextProject, handlePreviousPage, handleNextPage ]
}
