import React from 'react'

function Header() {
  return (
    <>
      <div className="header-main" data-aos="fade-out">

        <ul>
          <li><a href="/Home" >Home</a></li>
          <li><a href="/About" >About</a></li>
          <li><a href="/Projects" >Projects</a></li>
          <li><a href="/SKills" >Skills</a></li>
          <li><a href="/Resume" className="resume-highlight"> Resume →</a></li>
          <li><a href="/Contact" >Contact</a></li>
        </ul>

      </div>


    </>
  )
}

export default Header