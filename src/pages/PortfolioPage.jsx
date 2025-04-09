import { Link } from 'react-router'
import { PROJECTS } from '../utils/data-projects'
import Button from '../components/Button/Button'

function PortfolioPage () {
  return (
    <main className='size-full grow-1 self-center px-8 py-4'>
      <ul className='flex flex-col items-center
        md:gap-20
        '
      >

        {
          PROJECTS.map(project => (
            <div
              key={project.id}
              className='flex flex-col gap-8
              md:flex-row
              md:even:flex-row-reverse
              md:last:my-0 md:first:mt-8
              md:max-w-[689px] md:max-h-[410px] md:gap-12
              lg:max-w-[1025px] lg:gap-12
              '
            >
              <img
                src={project.imageDesktop}
                srcSet={`${project.image} 340w, ${project.imageDesktop} 540w`}
                sizes='max-width: 768px) 340px, (max-width: 1024px) 540px'
                className='md:w-1/2 md:object-contain
                '
              />
              <article
                className='flex flex-col gap-4
                border-y-2 border-bright-red
                text-base text-greyish-dark-blue
                leading-8
                py-8
                md:justify-center
                lg:tracking-wide lg:text-lg
                xl:tracking-wide xl:text-xl'
              >
                <h2 className='font-ibarra font-bold
                  text-4xl xl:text-5xl
                  tracking-normal text-greyish-dark-blue
                  '
                >{project.name}
                </h2>
                <p className='
                  text-base/8 font-thin opacity-80 tracking-tight
                  font-public-sans text-color-greyish-dark-blue'>
                  {project.description}
                </p>
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
