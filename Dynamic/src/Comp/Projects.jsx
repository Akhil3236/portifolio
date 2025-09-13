import React from 'react'
import { useNavigate } from 'react-router-dom';
import backgorund from '../assets/backgorund.png';
import Metameet from '../assets/Metameet.png'
import YoutubeProject from '../assets/YoutubeProject.png'
import WeatherProject from '../assets/WeatherProject.png'


function Projects() {
  const nav=useNavigate();

  const userpage=()=>{

    nav("/Home");

  }
  return (
    <>
    

    <div>
       <img src={backgorund} alt="img" className='gradient-img'/>

      <div className="project-header">

          <h1>Featured Projects</h1>
          <div className='highlighter'></div>
          <p>A curated collection of my most impactful projects, showcasing innovative solutions built with modern technologies and creative problem-solving approaches.</p>

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
              MetaMeet is an innovative real-time 3D metaverse platform that revolutionizes virtual collaboration. Users can create personalized avatars, join immersive virtual rooms, and engage in seamless real-time interactions, making remote collaboration more engaging and productive.
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

         

            <div className='projectImage'>

              <img src={YoutubeProject} alt="YouTube Summarizer" />

            </div>


            <h2>
             
             YouTube Summarizer

            </h2>
            <p>

             YouTube Summarizer is an intelligent Chrome extension that revolutionizes content consumption. By extracting video transcripts and generating AI-powered summaries, it helps users quickly understand key points without watching entire videos, saving time while maintaining comprehension.

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
          <div className="project_card">

                  <h1>More Projects Coming Soon!</h1>

                  <p>I'm constantly working on new and exciting projects. Stay tuned for more innovative solutions and creative applications!</p>
                  
                  <div className='projectbutton'>
                    <a href="mailto:akhiltuluri123@gmail.com">Contact Me</a>
                  </div>
          </div>
          <div className="project_card">


                 <div className='projectImage'>

              <img src={WeatherProject} alt="Weater Api" />

            </div>


            <h2>
             
            Weather-Now

            </h2>
            <p>

            WeatherNow is a clean and intuitive web application that provides accurate, real-time weather information. Built with modern web technologies, it delivers comprehensive weather data with an elegant user interface, making it easy for users to stay informed about current conditions and forecasts.

            </p>

            <div className='tech'>

                 <div className="framework">
                   HTML
                 </div>
                  <div className="framework">
                   CSS
                 </div>
                  <div className="framework">
                  JavaScript
                 </div>
                  <div className="framework">
                  API
                 </div>
                 
                 
                  
            </div>

            <div className='projectbutton'>

              <a href="https://github.com/Akhil3236/weather-app/tree/main" target='_blank'>Code<span><i class="devicon-github-original"></i></span></a>
              <a href="https://akhil3236.github.io/weather-app/"  target="_blank"
              className='live2'>Live Demo</a>
            </div>


          </div>
          {/* <div className="project_card">

          </div> */}
          {/* <div className="project_card">

          </div> */}
     </div>



    </div>


    
    
    </>
  )
}

export default Projects