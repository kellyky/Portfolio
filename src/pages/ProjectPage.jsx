import { useState } from  'react'
import { useParams } from 'react-router'
import Button from '../components/Button/Button'
import { findProjectByName } from '../utils/findProjectByName'
import PreviewImage from '../components/PreviewImage/PreviewImage.jsx'
import { PROJECTS } from '../utils/data-projects'
import Pagination from '../components/Pagination/Pagination'

function ProjectPage () {
  const {name} = useParams()
  const projectData = findProjectByName(name)
  const [pagination, setPagination] = useState(projectData[0].id)
  // console.log(pagination)

  // Styles
  const divStyle = 'flex grow-2 flex-col gap-4 py-4 my-4'
  const headingStyle = 'font-ibarra text-4xl tracking-light'
  const skillsStyle = 'font-public-sans text-muted-cyan text-base/8'

  return (
    <>
      {
        projectData.map((project) => (
          <section
            key={project.name}
            className={`
                ${divStyle}
              flex flex-col gap-8
            `}
          >
            <PreviewImage images={project.projectInfo.hero} />
            <article
              className={`
                ${divStyle}
              font-public-sans tracking-tight
              text-base/8 font-thin opacity-80
             `}
            >
              <div className={`
                ${divStyle}
                border-y-2 border-greyish-dark-blue/10
                `}
              >
                <h1
                  className={`
                  ${headingStyle}
                  font-bold
                  `}
                >{project.name}</h1>
                <p>{project.description}</p>
                <p
                  className={skillsStyle}
                >{project.projectInfo.concepts}</p>
                <p
                  className={skillsStyle}
                >{project.projectInfo.languages}</p>
                <Button
                  isButton={false}
                  to={project.projectInfo.link}
                >Visit Website
                </Button>
              </div>
              <div>
                <h2
                  className={headingStyle}
                >Project Background</h2>
                <p>{project.projectInfo.background}</p>
              </div>
              <div className={`
                ${divStyle}
                `}
              >
                <h2
                  className={headingStyle}
                >Static Previews</h2>
                <PreviewImage images={project.projectInfo.previewOne} />
                <PreviewImage images={project.projectInfo.previewTwo} />
              </div>
            </article>
            <Pagination previous='' next='' setPagination={setPagination} />
          </section>
        ))
      }
    </>
  )
}

export const Component = ProjectPage
