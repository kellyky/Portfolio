import { Link } from 'react-router'
import { PROJECTS } from '../utils/data-projects'
import Button from '../components/Button/Button'

function PortfolioPage () {
  return (
    <main className='size-full grow-1 self-center px-8 py-4'>
      <ul>

        {
          PROJECTS.map(project => (
            <div
              key={project.id}
              className='flex flex-col gap-8 mb-8
              md:flex-row md:my-22 md:first:my-8
              md:even:flex-row-reverse
              md:last:my-0
              '
            >
              <img src={project.image}
                className='md:w-1/2'
              />
              <article
                className='flex flex-col gap-4
                py-8
                border-y-2 border-greyish-dark-blue/10
                text-base text-greyish-dark-blue
                opacity-80 leading-8
                lg:tracking-wide lg:text-lg
                xl:tracking-wide xl:text-xl'
              >
                <h2 className='font-ibarra font-bold
                  text-4xl xl:text-5xl
                  tracking-normal text-greyish-dark-blue
                  md:pt-6'
                >{project.name}
                </h2>
                {project.description}
                <Link to={`/portfolio/${project.name}`}>
                  <Button
                    isPrimary={false}
                    isButton
                    className='uppercase border py-4
                      w-3xs
                      md:w-11/20 lg:w-1/2 xl:w-xs 2xl:w-sm
                      text-greyish-dark-blue border-greyish-dark-blue
                      text-xs
                      xl:text-lg
                    '
                  >View Project
                  </Button>
                </Link>
              </article>
            </div>
          ))
        }
      </ul>
    </main>
  )
}

export const Component = PortfolioPage
