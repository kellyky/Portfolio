import { PROJECTS } from '../utils/data-projects'
import Button from '../components/Button/Button'
import Contact from '../components/Contact/Contact'

function PortfolioPage () {
  return (
    <>
      <ul className='flex flex-col items-center
        md:gap-20
        '
      >

        {
          PROJECTS.map(project => (
            <li
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
                border-y-2 border-greyish-dark-blue/15
                leading-8
                py-8
                md:justify-center
                lg:mx-10
                lg:tracking-wide lg:text-lg
                xl:tracking-wide xl:text-xl'
              >
                <h2 className='font-bold
                  text-4xl xl:text-5xl
                  tracking-normal
                  '
                >{project.name}
                </h2>
                <p className='text-base/8'>
                  {project.description}
                </p>
                  <Button
                    to={`/portfolio/${project.name}`}
                    isButton={false}
                  >View Project
                </Button>
              </article>
            </li>
          ))
        }
      </ul>
      <Contact />
    </>
  )
}

export const Component = PortfolioPage
