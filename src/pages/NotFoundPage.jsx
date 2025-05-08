import Button from '../components/Button/Button'

function NotFoundPage () {
  return (
    <>
      <div
        className='
        h-screen bg-not-found-page
        flex flex-col items-center justify-center
        '
      >
        <h1
          className=''
        >Error 404: Page Not Found</h1>
        <Button
          isButton={false}
          to='/'
        >
          Go Home
        </Button>
      </div>
    </>
  )
}

export const Component = NotFoundPage
