import React from 'react'
import backgorund from "../assets/backgorund.png"

function About() {

  const intergrade="9.0";
  const enggrade="7.3";
  return (
    <>


    <img src={backgorund} alt="img" className='gradient-img'/>
       
    
    <div className="About-new">


     
     <div className="card">

      {/* <>deatils about me</> */}


   
     <div class="default"><a href="">image-1</a>




      <p> I'm an enthusiastic Full Stack Developer with expertise in React, Node.js, and modern web technologies. I'm passionate about creating innovative solutions and continuously expanding my technical knowledge to contribute meaningfully to the tech community.</p>


      <p> I love solving complex problems through elegant code, building scalable full-stack applications, and exploring cutting-edge technologies. Let's collaborate and create something extraordinary together!
  </p>
     </div>
      <div class="hover"><a href="">image-2</a>



    <p> I'm an enthusiastic Full Stack Developer with expertise in React, Node.js, and modern web technologies. I'm passionate about creating innovative solutions and continuously expanding my technical knowledge to contribute meaningfully to the tech community.</p>


      <p> I love solving complex problems through elegant code, building scalable full-stack applications, and exploring cutting-edge technologies. Let's collaborate and create something extraordinary together!
  </p>

    </div>

    

     </div>


      <div className="about-box">

     <div className="about-left">

        <h2>Education</h2>

        <ul>
          <li>

              <div className="left">

              Bachelor of Technology,
              <br />
              computer science and Engineering,
              <br />
              NIT Srinagar,
              <br />
              Srinagar

              <br />

              {/* Grade : {enggrade} */}

              </div>
              <div className="right">
               <p> 
                2022-present
               </p>
              </div> 
          </li>
          <li>

              <div className="left">

              M.P.C
              <br />
              Sasi New Gen Junior College ,
              <br />
              Vellivenu ,
              <br />
              East Godavari,AP.

              <br />

              {/* Grade : {intergrade} */}
                
              </div>

              <div className="right">
               
               <p> 
                2020-2022
               </p>

              </div>
            

               
              
          </li>
          <li>

              <div className="left">

              S.S.C
              <br />
              Sasi Eng Medium High School ,
              <br />
              Vellivenu ,
              <br />
              Andhra Pradesh.

              <br />

              {/* Grade : {intergrade} */}
                
              </div>

              <div className="right">
               
               <p> 
                2020-2022
               </p>

              </div>
            

               
              
          </li>

        </ul>

     </div>
     <div className="about-right">


        <h2>Work Experience:</h2>


        <div className="con">

          <div className="left">

            
            <ul>

              <li>

              Ardent Pvt Limited

              <br />

              Full Stack Developer Intern

              <br />

              • Developed a comprehensive user authentication system with registration, login, and role-based access control for 100+ users using React.js and Node.js
              <br />
              • Optimized application performance by reducing page reloads and enhancing UI responsiveness by 30% through client-side validation and efficient API handling
              <br />
              • Gained extensive hands-on experience in React components, REST APIs, Express.js routing, and MongoDB integration

              <br />

              </li>
            </ul>

           



          </div>

          <div className="right">


              <p>
               
               3Months

              </p>


          </div>
        </div>




     </div>
      </div>
    </div>
    
    
    
    </>
  )
}

export default About