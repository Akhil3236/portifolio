import React, { use, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Comp/Header'
import Footer from './Comp/Footer'




function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div>
      {isHomePage && (
        <div className="name-display">
          <h1>Akhil Tuluri</h1>
        </div>
      )}
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout