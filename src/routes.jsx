import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PortfolioPage from './pages/PortfolioPage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LandingPage />
    },
    { path: '/portfolio',
      element: <PortfolioPage />
    }
  ]
)

export default function Routes() {
  return <RouterProvider router={router} />;
}
