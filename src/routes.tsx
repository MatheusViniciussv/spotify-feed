import { createBrowserRouter } from 'react-router-dom'
import { Intro } from './pages/intro'
import { Feed } from './pages/feed/feed'
import { Authorization } from './pages/authorization/authorization'

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/',
        element: <Intro />,
      },
      {
        path: '/authorization',
        element: <Authorization />,
      },
      {
        path: '/feed',
        element: <Feed />,
      }
    ]
  },

])