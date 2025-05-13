import { useParams } from 'react-router'
import Button from '../components/Button/Button'
import { findProjectByName } from '../utils/findProjectByName'
import PreviewImage from '../components/PreviewImage/PreviewImage.jsx'
import Pagination from '../components/Pagination/Pagination'

function ProjectPage () {
  const {name}       = useParams()
  const projectData  = findProjectByName(name)

  // Styles
  const divStyle     = 'flex flex-col gap-4 py-4 my-4'
  const headingStyle = 'text-3xl tracking-light'
  const skillsStyle  = `font-bold text-muted-cyan md:w-1/2 lg:w-full`

  return (
    <>
      {
        projectData.map((project) => (
          <section
            key={project.name}
            className='
              font-thin
              flex flex-col gap-4 py-4 my-4
              lg:grid lg:grid-cols-5
              lg:gap-16
            '
          >
            <PreviewImage
              images={project.projectInfo.hero}
              className='lg:col-span-full'
            />
              <div
                className='lg:col-span-2
                '
              >
                <div className='
                  gap-4 py-4 my-4
                  border-y-2 border-greyish-dark-blue/10
                  flex flex-wrap
                  lg:py-8 lg:gap-4
                  '
                >
                  <h1
                    className={`${headingStyle}
                      text-4xl
                      font-bold
                    `}
                  >{project.name}</h1>
                  <p
                    className='
                    '
                  >{project.description}</p>
                  <p className={`${skillsStyle} `}>
                    {project.projectInfo.concepts}
                    <br />
                    {project.projectInfo.languages}
                  </p>
                  <Button
                    isButton={false}
                    to={project.projectInfo.link}
                    className=''
                  >Visit Website
                  </Button>
                </div>
              </div>

            <div className='lg:col-span-3
              flex flex-col gap-6
              '>
                <div
                  className='flex flex-col gap-4'
                >
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
              </div>
          </section>
        ))
      }
      <Pagination />
    </>
  )
}

export const Component = ProjectPage
