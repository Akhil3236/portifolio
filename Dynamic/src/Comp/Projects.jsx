import React from 'react'
import backgorund from '../assets/backgorund.png';
import Metameet from '../assets/Metameet.png'
import YoutubeProject from '../assets/YoutubeProject.png'


function Projects() {
  return (
    <>
    

    <div>
       <img src={backgorund} alt="img" className='gradient-img'/>

      <div className="project-header">

          <h1>Featured Projects </h1>
          <div className='highlighter'></div>
          <p>A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.</p>

      </div>

     <div className="project_main">


          <div className="project_card">

            
            <div className='projectImage'>

              <img src={Metameet} alt="metameet" />

            </div>

            <h2>
             MetaMeet

            </h2>
            <p>
              MetaMeet is a real-time 3D metaverse platform enabling users to join virtual rooms, interact via avatars, and collaborate through immersive experiences.
            </p>

            <div className='tech'>

                 <div className="framework">
                  React
                 </div>
                  <div className="framework">
                  Node.js
                 </div>
                  <div className="framework">
                  Express
                 </div>
                  <div className="framework">
                  MongoDB
                 </div>
                  <div className="framework">
                  Socket.io
                 </div>
            </div>

            <div className='projectbutton'>

              <a href="https://github.com/Akhil3236/Metameet" target='_blank'>Code<span><i class="devicon-github-original"></i></span></a>
              <a href="https://www.metameet.digital/"  target="_blank"
              className='live2'>Live Demo</a>
            </div>

            
          </div>
          <div className="project_card">

          {/* <div className='cnter'> */}

            <div className='projectImage'>

              <img src={YoutubeProject} alt="YouTube Summarizer" />

            </div>

          {/* </div> */}

            <h2>
             
             YouTube Summarizer

            </h2>
            <p>

             YouTube Summarizer is a Chrome extension that extracts video transcripts and generates concise, AI-powered summaries for quick understanding.

            </p>

            <div className='tech'>

                 <div className="framework">
                  React
                 </div>
                  <div className="framework">
                  Node.js
                 </div>
                  <div className="framework">
                  Express
                 </div>
                  <div className="framework">
                  Tailwind
                 </div>
                 <div className="framework">
                  Chrome
                 </div>
                 <div className="framework">
                  Menifest
                 </div>
                 
                  
            </div>

            <div className='projectbutton'>

              <a href="https://github.com/Akhil3236/youtube-summarizer" className="live2"target='_blank'>Code<span><i class="devicon-github-original"></i></span></a>
              {/* <a href="https://www.metameet.digital/"  target="_blank"
              className='live2'>Live Demo</a> */}
            </div>

          </div>
          {/* <div className="project_card">

          </div>
          <div className="project_card">

          </div>
          <div className="project_card">

          </div>
          <div className="project_card">

          </div> */}
     </div>



    </div>


    
    
    </>
  )
}

export default Projects