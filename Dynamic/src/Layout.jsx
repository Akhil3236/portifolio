import React, { use, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Comp/Header'
import Footer from './Comp/Footer'




function Layout() {

  

  return (
    

    <div >

    <Header/>
    <Outlet/>
    <Footer/>

    </div>
  )
}

export default Layout