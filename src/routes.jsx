import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import ContactLayout from './layouts/ContactLayout'
import LandingPage from './pages/LandingPage'
import Loading from './components/Loading/Loading'
import Error from './components/Error/Error'
import { action as newContactAction } from './components/ContactForm/ContactForm'

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
      errorElement: <Error />,
      children: [
        {
          index: true,
          lazy: () => import('./pages/ContactPage.jsx'),
          HydrateFallback: Loading,
          action: newContactAction,
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
