import { useParams } from 'react-router'
import Button from '../components/Button/Button'
import { findProjectByName } from '../utils/findProjectByName'
import PreviewImage from '../components/PreviewImage/PreviewImage.jsx'
import { PROJECTS } from '../utils/data-projects'

function ProjectPage () {
  const {name} = useParams()
  const projectData = findProjectByName(name)
  // console.log(projectData[0].projectInfo.hero[0])

  return (
    <>
      {
        projectData.map((project) => (
          <section key={project.name}>
            <PreviewImage images={project.projectInfo.hero} />
            <h1>{project.name}</h1>
          </section>
          // TODOs 
        ))
      }
    </>
  )
}

export const Component = ProjectPage
