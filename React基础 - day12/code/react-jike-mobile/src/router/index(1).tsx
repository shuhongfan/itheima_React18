import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import Detail from '@/pages/Detail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/detail',
    element: <Detail />,
  },
])

export { router }
