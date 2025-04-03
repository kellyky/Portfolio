import { useParams } from 'react-router'
import Button from '../components/Button/Button'
import { findProjectByName } from '../utils/findProjectByName'

function ProjectPage () {
  const {name} = useParams()
  const projectData = findProjectByName(name)

  return (
    <>
      {
        projectData.map((property) => (
          <h1>{property.name}</h1>
        ))
      }
    </>
  )
}

export const Component = ProjectPage
