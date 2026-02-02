import React, { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="header-main" data-aos="fade-out">

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <ul className={isMenuOpen ? 'active' : ''}>
          <li><a href="/Home" onClick={closeMenu}>Home</a></li>
          <li><a href="/About" onClick={closeMenu}>About</a></li>
          <li><a href="/Projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="/SKills" onClick={closeMenu}>Skills</a></li>
          <li><a href="/Resume" className="resume-highlight" onClick={closeMenu}>📄 Resume →</a></li>
          <li><a href="/Contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        {/* Overlay for mobile menu */}
        {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      </div>


    </>
  )
}

export default Header