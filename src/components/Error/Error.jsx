import { useRouteError } from 'react-router-dom'
import { isRouteErrorResponse } from 'react-router-dom'

function Error () {
  const error = useRouteError()

  if(isRouteErrorResponse(error)){
    return (
      <div>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    )
  } else {
    return <div>Oops</div>
  }

}

export default Error
