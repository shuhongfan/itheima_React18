import ReactDOM from 'react-dom/client'
import 'normalize.css'

// 导入provider
import { RouterProvider } from 'react-router-dom'
// 导入router实例
import { router } from './router/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
