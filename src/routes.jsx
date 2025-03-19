import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PortfolioPage from './pages/PortfolioPage'
import Root from './Layouts/Root'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root/>,
      children: [
        {
          index: true,
          element: <LandingPage />
        },
        {
          path: '/portfolio',
          element: <PortfolioPage />
        }
      ]
    },
  ]
)

export default function Routes() {
  return <RouterProvider router={router} />;
}
