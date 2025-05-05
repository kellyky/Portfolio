import { motion } from 'motion/react'
import { mix, easeInOut } from 'motion/react'
import Button from '../Button/Button'

export default function About () {


  return (
      <section
        className='flex flex-col gap-8
        md:flex-row md:justify-center md:gap-14
        '
      >
        <motion.picture
          className='mx-auto'
          initial={{
            x: -100, opacity: 0,
          }}

          animate={{
            x: 0, opacity: 1, duration: 2
          }}
            transition={{
              ease: 'easeOut',
              duration: 2,
              delay: 1
          }}
        >
          <source
            media='(min-width:1024px)'
            srcSet='/assets/images/headshot-desktop.webp'
            width='540'
            height='600'
          />
          <source
            media='(min-width:768px)'
            srcSet='/assets/images/headshot-tablet.webp'
            width='281'
            height='600'
          />
          <img
            src='/assets/images/headshot-mobile.webp'
            alt='TODO: PLACEHOLDER'
            width='346'
            height='311'
          />
        </motion.picture>
        <div className='border-y-2 flex flex-col
          border-greyish-dark-blue/10
          gap-4 py-4
          md:w-19/20 md:justify-center md:gap-8 md:w-sm
          lg:mx-auto lg:w-4/10 lg:justify-center
          xl:gap-20
          '
        >
          <motion.article
            id='about-me'
            className='flex flex-col gap-4'
            initial={{
              x: 100, opacity: 0
            }}

            whileInView={{
              x: 0, opacity: 1, duration: 2
            }}

            transition={{ ease: 'easeOut', duration: 2, 

            }}
          >
            <h2 className='font-bold
              text-4xl xl:text-5xl
              md:pt-6
            '
            >About Me
            </h2>
            <p className='font-thin
              '
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ligula id odio scelerisque aliquet. Integer non nisi vitae justo efficitur sagittis. Vivamus dictum, odio non vehicula gravida, nunc arcu laoreet metus, vel ultricies odio justo nec odio. Praesent sit amet feugiat enim. Duis aliquam, erat eget gravida vehicula, ligula elit blandit eros, nec vehicula purus odio ac libero. Integer auctor elit nec erat pharetra feugiat.
            </p>
          </motion.article>
            <Button
              isButton={false}
              to='/portfolio'
            >Go to Portfolio
            </Button>
        </div>
      </section>
  )
}
