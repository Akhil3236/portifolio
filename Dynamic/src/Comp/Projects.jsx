import React from 'react'
import { useNavigate } from 'react-router-dom';
import backgorund from '../assets/backgorund.png';
import Metameet from '../assets/Metameet.png'
import YoutubeProject from '../assets/YoutubeProject.png'
import WeatherProject from '../assets/WeatherProject.png'
import Twitter from '../assets/twee.png'
import LDVProject from '../assets/LDV.png'
import emi from '../assets/emi.png'
import chatbot from '../assets/cahtbot.png'



function Projects() {
  const nav = useNavigate();

  const userpage = () => {

    nav("/Home");

  }
  return (
    <>


      <div>
        <img src={backgorund} alt="img" className='gradient-img' />

        <div className="project-header">

          <h1>Featured Projects</h1>
          <div className='highlighter'></div>
          <p>A curated collection of my most impactful projects, showcasing innovative solutions built with modern technologies and creative problem-solving approaches.</p>

        </div>

        <div className="project_main">

          <div className="project_card animate-slide-up delay-400">

            <div className='projectImage'>
              <img src={LDVProject} alt="La Dolce Vita" />
            </div>

            <h2>La Dolce Vita (LDV)</h2>
            <p>
              Worked as a <strong>Backend Developer</strong> to build a robust e-commerce platform. Integrated <strong>Stripe payment gateway</strong> for secure online transactions, implemented <strong>Midtrans delivery system</strong> for order tracking, and developed comprehensive <strong>admin management logic</strong> for product management, order processing, and inventory control. Built scalable RESTful APIs using Node.js and Express.
            </p>

            <div className='tech'>
              <div className="framework">Node.js</div>
              <div className="framework">Express</div>
              <div className="framework">MongoDB</div>
              <div className="framework">Stripe API</div>
            </div>

            <div className='projectbutton'>
              <a href="https://ladolcevita.payonlive.com" target="_blank" className='live2'>Live Demo</a>
            </div>

          </div>
          <div className="project_card animate-slide-up delay-400">

            <div className='projectImage'>
              <img src={emi} alt="Emi Bocquillon" />
            </div>

            <h2>Emi Bocquillon</h2>
            <p>
              Worked as a <strong>Backend Developer</strong> and handled <strong>complete deployment</strong> of the server, website, and admin panel. Developed <strong>finance calculation logic</strong> for HREAT project management, implementing complex algorithms for budget tracking, cost estimation, and financial reporting. Built scalable RESTful APIs using Node.js and Express with MongoDB integration.
            </p>

            <div className='tech'>
              <div className="framework">Node.js</div>
              <div className="framework">Express</div>
              <div className="framework">MongoDB</div>
              <div className="framework">Deployment</div>
            </div>

            <div className='projectbutton'>
              <a href="https://www.emibocquillon.fr" target="_blank" className='live2'>Live Demo</a>
            </div>

          </div>
          <div className="project_card animate-slide-up delay-100">

            <div className='projectImage'>
              <img src={Metameet} alt="metameet" />
            </div>

            <h2>MetaMeet</h2>
            <p>
              MetaMeet is an innovative <strong>real-time 3D metaverse platform</strong> that revolutionizes virtual collaboration. Users can create <strong>personalized avatars</strong>, join <strong>immersive virtual rooms</strong>, and engage in <strong>seamless real-time interactions</strong>, making remote collaboration more engaging and productive.
            </p>

            <div className='tech'>
              <div className="framework">React</div>
              <div className="framework">Node.js</div>
              <div className="framework">Express</div>
              <div className="framework">MongoDB</div>
              <div className="framework">Socket.io</div>
            </div>

            <div className='projectbutton'>
              <a href="https://github.com/Akhil3236/Metameet" target='_blank'>Code<span><i class="devicon-github-original"></i></span></a>
              <a href="https://www.metameet.digital/" target="_blank" className='live2'>Live Demo</a>
            </div>

          </div>


          <div className="project_card animate-slide-up delay-400">

            <div className='projectImage'>
              <img src={chatbot} alt="Weater Api" />
            </div>

            <h2>Next-Gen AI Chat Interface</h2>
            <p>
              Built a <strong>high-performance AI chat widget</strong> using <strong>Next.js</strong> and <strong>TypeScript</strong> for type safety and scalability. Implemented <strong>Tailwind CSS</strong> for modern styling and <strong>Framer Motion</strong> for smooth animations. Features include <strong>real-time messaging</strong>, instant AI responses, and an aesthetically pleasing interface designed for seamless user engagement.
            </p>

            <div className='tech'>
              <div className="framework">Next.js</div>
              <div className="framework">TypeScript</div>
              <div className="framework">Tailwind CSS</div>
              <div className="framework">Framer Motion</div>
            </div>

            <div className='projectbutton'>
              <a href="https://web-ui-chatbot.onrender.com" target="_blank" className='live2'>Live Demo</a>
            </div>

          </div>

          <div className="project_card animate-slide-up delay-200">

            <div className='projectImage'>
              <img src={YoutubeProject} alt="YouTube Summarizer" />
            </div>

            <h2>YouTube Summarizer</h2>
            <p>
              YouTube Summarizer is an intelligent <strong>Chrome extension</strong> that revolutionizes content consumption. By extracting <strong>video transcripts</strong> and generating <strong>AI-powered summaries</strong>, it helps users quickly understand key points without watching entire videos, saving time while maintaining comprehension.
            </p>

            <div className='tech'>
              <div className="framework">React</div>
              <div className="framework">Node.js</div>
              <div className="framework">Express</div>
              <div className="framework">Tailwind</div>
              <div className="framework">Chrome</div>
              <div className="framework">Menifest</div>
            </div>

            <div className='projectbutton'>
              <a href="https://github.com/Akhil3236/youtube-summarizer" className="live2" target='_blank'>Code<span><i class="devicon-github-original"></i></span></a>
            </div>

          </div>

          <div className="project_card animate-slide-up delay-300">

            <div className='projectImage'>
              <img src={Twitter} alt="Weater Api" />
            </div>

            <h2>Tweet-Bot</h2>
            <br />
            <br />
            <p>
              An <strong>automated Twitter bot</strong> that fetches the latest <strong>Technology News</strong> from NewsAPI and tweets them directly using the <strong>Twitter API v2</strong>.
              The bot is <strong>scheduled to run every day at 8 AM</strong> and posts trending news articles.
            </p>

            <div className='tech'>
              <div className="framework">Nodejs</div>
              <div className="framework">API</div>
              <div className="framework">Twitter account</div>
            </div>

            <div className='projectbutton'>
              <a href="https://github.com/Akhil3236/tweet-bot/tree/main#features" target='_blank'>Code<span><i class="devicon-github-original"></i></span></a>
              <a href="https://x.com/TuluriYt" target="_blank" className='live2'>Live Demo</a>
            </div>

          </div>



          <div className="project_card animate-slide-up delay-400">

            <div className='projectImage'>
              <img src={WeatherProject} alt="Weater Api" />
            </div>

            <h2>Weather-Now</h2>
            <p>
              WeatherNow is a clean and intuitive web application that provides accurate, <strong>real-time weather information</strong>. Built with <strong>modern web technologies</strong>, it delivers <strong>comprehensive weather data</strong> with an elegant user interface, making it easy for users to stay informed about current conditions and forecasts.
            </p>

            <div className='tech'>
              <div className="framework">HTML</div>
              <div className="framework">CSS</div>
              <div className="framework">JavaScript</div>
              <div className="framework">API</div>
            </div>

            <div className='projectbutton'>
              <a href="https://github.com/Akhil3236/weather-app/tree/main" target='_blank'>Code<span><i class="devicon-github-original"></i></span></a>
              <a href="https://akhil3236.github.io/weather-app/" target="_blank" className='live2'>Live Demo</a>
            </div>

          </div>

          <div className="project_card animate-slide-up delay-500">
            <h1>More Projects Coming Soon!</h1>

            <p>I'm constantly working on new and exciting projects. Stay tuned for more innovative solutions and creative applications!</p>

            <div className='projectbutton'>
              <a href="mailto:akhiltuluri123@gmail.com">Contact Me</a>
            </div>
          </div>

        </div>



      </div>




    </>
  )
}

export default Projects