import React from 'react'
import backgorund from "../assets/backgorund.avif"

function About() {


  const intergrade="9.0";
  const enggrade="7.1";
  return (
    <>


    <img src={backgorund} alt="img" className='gradient-img'/>
       
    
    <div className="About-new">


     
     <div className="card">

      {/* <>deatils about me</> */}


   
     <div class="default"><a href="">image-1</a>




      <p> I’m an enthusiastic Laravel developer with experience, keen to leverage my robust knowledge in Laravel and related technologies to contribute significantly continuously expanding my expertise.</p>


      <p> I love solving problems with code, building full-stack Laravel apps, and exploring new tools and frameworks. Let's build something amazing!
  </p>
     </div>
      <div class="hover"><a href="">image-2</a>



    <p> I’m an enthusiastic Laravel developer with experience, keen to leverage my robust knowledge in Laravel and related technologies to contribute significantly continuously expanding my expertise.</p>


      <p> I love solving problems with code, building full-stack Laravel apps, and exploring new tools and frameworks. Let's build something amazing!
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
              computer science and engineering,
              <br />
              NIT sringar,
              <br />
              srinagar

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


        <h2>Work Experince:</h2>


        <div className="con">

          <div className="left">

            
            <ul>

              <li>

              Ardent PVT limted

              <br />

              MERN stack devloper Intern

              <br />

              contributed in devloping authenication and autherization
              <br />
               system in login page
              <br />

              with proper security techniques

              <br />

              </li>
            </ul>

           



          </div>

          <div className="right">


              <p>
              dec 2024-feb 2025

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