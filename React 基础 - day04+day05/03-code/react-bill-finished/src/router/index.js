import { createBrowserRouter } from 'react-router-dom'
import KeepAccount from '../pages/KeepAccount'
import YearBill from '../pages/YearBill'
import Layout from '../pages/Layout'
import MonthBill from '../pages/MonthBill'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MonthBill />
      },
      {
        path: 'year',
        element: <YearBill />
      }
    ]
  },
  {
    path: '/new',
    element: <KeepAccount />
  }
])

export default router