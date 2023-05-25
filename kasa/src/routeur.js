import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Root, { rootLoader } from './routes/root'
import Home from './components/_section1'
import Apropos from './pages/Apropos'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
  },
  {
    path: '../pages/Home',
    element: <Home />,
    loader: rootLoader,
  },
  {
    path: '/',
    element: <Apropos />,
    loader: rootLoader,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
