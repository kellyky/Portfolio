import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import ContactLayout from './Layouts/ContactLayout'
import LandingPage from './pages/LandingPage'
import Loading from './components/Loading/Loading'
import Error from './components/Error/Error'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <LandingPage />
        },
        {
          path: '/portfolio',
          lazy: () => import('./pages/PortfolioPage.jsx'),
          HydrateFallback: Loading,
        },
        {
          path: '/portfolio/:name',
          lazy: () => import('./pages/ProjectPage.jsx'),
          HydrateFallback: Loading,
        }
      ]
    },
    {
      path: '/contact',
      element: <ContactLayout />,
      children: [
        {
          index: true,
          lazy: () => import('./pages/ContactPage.jsx'),
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
