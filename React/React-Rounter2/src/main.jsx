import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import router from './routes'

const routers = createBrowserRouter(router);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers}></RouterProvider>
  </StrictMode>,
)
