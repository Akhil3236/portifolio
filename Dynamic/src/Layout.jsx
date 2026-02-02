import React, { use, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Comp/Header'
import Footer from './Comp/Footer'
import MouseEffects from './Comp/MouseEffects'




function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      <MouseEffects />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout