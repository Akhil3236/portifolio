import React from 'react'

function Footer() {

   const scrollup=()=>{

    window.scrollTo({

      top:10,
      behavior:"smooth",
    })
  }
  return (
    <div className='footer'>


      <button onClick={scrollup}>up</button>
    </div>
  )
}

export default Footer