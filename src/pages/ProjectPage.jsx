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
          <section
            key={project.name}
            className='
              flex flex-col gap-4
            '
          >
            <PreviewImage images={project.projectInfo.hero} />
            <article
              className='font-public-sans tracking-tight
              text-base/8 font-thin opacity-80
              '
            >
              <div className='border-y-2 border-greyish-dark-blue/10'>
                <h1
                  className='font-ibarra font-bold
                  text-4xl
                  tracking-tight
                  '
                >{project.name}</h1>
                <p>{project.description}</p>
                <p
                  className='font-bold text-muted-cyan'
                >{project.projectInfo.concepts}</p>
                <p
                  className='font-bold text-muted-cyan'
                >{project.projectInfo.languages}</p>
                <Button
                  isButton={false}
                  to={project.projectInfo.link}
                >Visit Website
                </Button>
              </div>
              <div>
                <h2
                  className='font-ibarra
                  text-4xl
                  tracking-tight
                  '
                >Project Background</h2>
                <p>{project.projectInfo.background}</p>
              </div>
              <div>
                <h2
                  className='font-ibarra
                  text-4xl
                  tracking-tight
                  '
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
