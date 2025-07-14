import { BlueSky } from '../../assets/icons/BlueSky'
import { Dev } from '../../assets/icons/Dev'
import { GitHub } from '../../assets/icons/GitHub'
import { LinkedIn } from '../../assets/icons/LinkedIn'
import { Medium } from '../../assets/icons/Medium'

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
        <li>
          <a
            href='https://dev.to/kelpopko'
            target='_blank'
            aria-label="Kelly's Dev.to profile" rel='noreferrer'
          >
            <Dev
              className={`hover:fill-muted-cyan transition-colors ${color}
              delay-150 duration-300`}
            />
          </a>
        </li>
        <li>
          <a
            href='https://medium.com/@kelpopko'
            target='_blank'
            aria-label="Kelly's Medium profile" rel='noreferrer'
          >
            <Medium
              className={`hover:fill-muted-cyan transition-colors ${color}
              delay-150 duration-300`}
            />
          </a>
        </li>
        <li>
          <a
            href='https://bsky.app/profile/kellypopko.bsky.social'
            target='_blank'
            aria-label="Kelly's BlueSky profile" rel='noreferrer'
          >
            <BlueSky
              className={`hover:fill-muted-cyan transition-colors ${color}
              delay-150 duration-300`}
            />
          </a>
        </li>
      </ul>

  )
}
