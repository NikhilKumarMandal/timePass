import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.tsx'
import Video from './pages/Video.tsx'
import CodingLoverForm from './pages/CodingLoverForm.tsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
     <Route path='' element={<CodingLoverForm/>}/>
     <Route path='/video' element={<Video/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
