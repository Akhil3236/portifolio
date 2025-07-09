import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter ,createRoutesFromElements, Route, RouterProvider}  from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Home from './Comp/Home.jsx'
import Projects from './Comp/Projects.jsx'
import Skills from './Comp/Skills.jsx'
import About from './Comp/About.jsx'
import Contact from './Comp/Conatct.jsx'


const router=createBrowserRouter(

  createRoutesFromElements(

    <>

    <Route path='/' element={<Layout/>}>
    <Route path='home' element={<Home/>}/>
    <Route path='Projects' element={<Projects/>}/>
    <Route path='Skills' element={<Skills/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Contact' element={<Contact/>}/>
    
    </Route>
    
    </>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
