import { useState } from  'react'
import { useParams } from 'react-router'
import Button from '../components/Button/Button'
import { findProjectByName } from '../utils/findProjectByName'
import PreviewImage from '../components/PreviewImage/PreviewImage.jsx'
import { PROJECTS } from '../utils/data-projects'
import Pagination from '../components/Pagination/Pagination'

function ProjectPage () {
  const {name}       = useParams()
  const projectData  = findProjectByName(name)

  // Styles
  const divStyle     = 'flex flex-col gap-4 py-4 my-4'
  const headingStyle = 'font-ibarra text-4xl tracking-light'
  const skillsStyle  = `font-public-sans font-bold text-muted-cyan md:w-1/2`

  return (
    <>
      {
        projectData.map((project) => (
          <section
            key={project.name}
            className={`${divStyle}
              flex flex-col
              font-public-sans tracking-tight
              text-base/8 font-thin
            `}
          >
            <PreviewImage images={project.projectInfo.hero} />
            <article
              className={`
                ${divStyle}
             `}
            >
              <div className={`${divStyle}
                border-y-2 border-greyish-dark-blue/10
                md:max-h-80 flex-wrap
                `}
              >
                <h1
                  className={`${headingStyle}
                    font-bold order-first
                  `}
                >{project.name}</h1>
                <p
                  className='
                    order-second
                    md:order-last
                    md:w-1/2
                  '
                >{project.description}</p>
                <p className={`${skillsStyle} order-third`}>
                  {project.projectInfo.concepts}
                  <br />
                  {project.projectInfo.languages}
                </p>
                <Button
                  isButton={false}
                  to={project.projectInfo.link}
                  className='order-last'
                >Visit Website
                </Button>
              </div>
              <div>
                <h2 className={headingStyle}>
                  Project Background
                </h2>
                <p>{project.projectInfo.background}</p>
              </div>
              <div className={`
                ${divStyle}
                `}
              >
                <h2
                  className={headingStyle}
                >Static Previews</h2>
                <div className='flex flex-col gap-8 mx-auto'>
                  <PreviewImage images={project.projectInfo.previewOne} />
                  <PreviewImage images={project.projectInfo.previewTwo} />
                </div>
              </div>
            </article>
            <Pagination
            />
          </section>
        ))
      }
    </>
  )
}

export const Component = ProjectPage
