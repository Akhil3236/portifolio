import React from 'react'
import { ArrowUp } from 'lucide-react';

function Footer() {

  const scrollup = () => {

    window.scrollTo({

      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className='footer'>


      <button onClick={scrollup} aria-label="Scroll to top">
        <ArrowUp size={24} />
      </button>
    </div>
  )
}

export default Footer