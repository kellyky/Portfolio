import { GitHub } from '../../assets/icons/GitHub'
import { LinkedIn } from '../../assets/icons/LinkedIn'

export default function Social ({color}) {
  return (
      <ul className='flex gap-5 items-center justify-start'>
        <li>
          <a
            href='https://github.com/kellyky/'
            target='_blank'
            aria-label="Kelly's GitHub profile" rel='noreferrer'
          >
            <GitHub
              className={`hover:fill-muted-cyan transition-colors ${color}
              delay-150 duration-300`}
            />
          </a>
        </li>
        <li>
          <a
            href='https://linkedin.com/in/kelly-popko/'
            target='_blank'
            aria-label="Kelly's LinkedIn profile" rel='noreferrer'
          >
            <LinkedIn
              className={`hover:fill-muted-cyan transition-colors ${color}
              delay-150 duration-300`}
            />
          </a>
        </li>
      </ul>

  )
}
