import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import LandingPage from './pages/LandingPage'
import Loading from './components/Loading/Loading'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />
        },
        {
          path: '/portfolio',
          lazy: () => import('./pages/PortfolioPage.jsx'),
          HydrateFallback: Loading
        }
      ]
    },
    {
      path: '*',
      lazy: () => import('./pages/NotFoundPage.jsx'),
      HydrateFallback: Loading
    }
  ]
)

export default function Routes () {
  return <RouterProvider router={router} />
}
