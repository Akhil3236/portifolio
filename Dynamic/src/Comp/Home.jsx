import profile from '../assets/profile2.png';
import Img2 from '../assets/Discrod2.jpg';
import Img3 from '../assets/Linkedin2.jpg';
import Img1 from '../assets/Github.webp';
// import Img4 from '..assets/instagram2.png';
import ImageSlider from '../ImageSlider';
import { useState,useEffect ,useRef} from 'react';
import BcgImg from '../assets/profile.png';
import skills from '../assets/skills3.png';
import { useNavigate } from 'react-router-dom';
import { createContext } from 'react';
import backgorund from '../assets/backgorund.png';
import { Typewriter } from 'react-simple-typewriter'
import Spline from '@splinetool/react-spline';




export const ThemeContext=createContext('light');

const images=[
  
  {src:Img1,link:""},
  {src:Img2,link:""},
  {src:Img3,link:""},
  // {src:Img4,link:""},
  
];

function Home() {

  const [history,sethistory]=useState([
    "Welcome to the My Terminal Ask me anything about Me Here"
  ]);

  const [command,setcommand]=useState("");
  const useterminal=useRef(null);


  const responses = {
    "name": "\n Akhil Tuluri",
    "age": "20",
    clear: "Welcome to Fake Compiler Terminal!",
    help: "Try: javac HelloWorld.java, java HelloWorld, clear"
  };


  const newhandledone=()=>{


    const userinput=`${command}`;
    const res=responses[userinput] || `${command} not found !!!!`;

    sethistory(prev=>[...prev,userinput,res]);

    console.log(sethistory);
    
    setcommand("");

  }

  const handlekeyDone=(e)=>{

    if(e.key==="Enter"){      
      newhandledone();
    }
  }

 useEffect(() => {
    useterminal.current.scrollTop = useterminal.current.scrollHeight;
  }, [history]);


  const handleType = (count) => {
    
    console.log(count)}

    const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }



  const [theme,setTheme]=useState('light');

  const toggleTheme=()=>{

    setTheme((curr)=>(curr==="light"?"dark":"light"));

  }

  const navigate=useNavigate();

  const [copied, setCopied] = useState(false);
  const textToCopy = 'akhiltuluri123@gmail.com';


  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Copy failed:', err);
      });


  };

  const scrollDown=()=>{

    window.scrollBy({

      top:750,
      behavior:"smooth",
    })
  }

  
  return (
    <>
    

    <img src={backgorund} alt="img" className='gradient-img'/>
    <div className='layer1'> </div>
   

    <div className='profile-page'>


    <div className='intro' data-aos="flip-right">

          <div className='App'>
      <h4 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
        Hi ,It's 👋<b className='name'> Akhil Tuluri </b><br />
        A {' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Full Stack Developer ', 'Student at Nit srinagar ','Coder ',"Editor "]}
            loop={10}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={100}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </span>
      </h4>
    </div>

    <div className='Link'>

     <div className="scroll">

        <button className='scroll-btn' onClick={scrollDown}>About me</button>
      </div>
      
      <div className='Link1'>

      <a href="">GitHub</a>
      <a href="">LinkedIn</a>

      </div>

    </div>


    </div>

    <div className="Dbox">


    <Spline className='DBOX' scene="https://prod.spline.design/HBfB8WY9R7F2KiQd/scene.splinecode" />
    <div className='layer'>


    </div>
        
    </div>


    </div>
    <div className="Home">
      <div className="u1">
        <div className="UL1">
          <div className="UL11">

            <a className="profile-box" href="">

          
              <div className="left">
                  
                <p>I'm <b className='name'>Akhil Tuluri</b> ,
                   motivated web developer with strong React skills and 
                   a passion for creating responsive, user-friendly interfaces
                  <br />
                   <b className='name1'> full stack developer , 3rd  </b>
                   year B.Tech  ,
                   in <b className="name1"> NIT srinagar </b>  .
            
                </p>


              </div>
              <div className="right">

                <img className='profile' src={profile} alt="img"/>
                
                  

              </div>
            
            </a>

          </div>

          <div className="ULL2">

            <a className='resume' href="">


               <p><b className='name1'>Resume:</b></p>

               Check Out My Resume,

               <button className='enter1' >Check Out</button>
            


            </a>
            <a href="">


               
               <div className='contact'>
                  
                  <img src="" alt="" />

                  <h3 className='name1'>Get In Touch :</h3>

                  <div className='gmail'>

                  <button className='copybutton' onClick={handleCopy}>📎</button>
                  <p className="copy">akhiltuluri123@gmail.com</p>

                  </div>

                  <div className='gmail'>

                  <button className='copybutton' onClick={handleCopy}>📎</button>
                  <p className="copy">9666440579</p>

                  </div>


               </div>
            </a>

          </div>


        </div>

        <div className="UL2">

          <a className='carer'>
            <div className='projects'>

              How it's Started <b className='vs'> vs </b> How it's going
            </div>

            <div className='sub-text'>
              
              <p>A Short personal history as it relates to design and devlopment, and how I've found value in the cross-section between both disciplines  </p>

            </div>

            <div>
              <button className='enter'  onClick={()=>navigate('/About')}>Read</button>
            </div>

            
          </a>
          <div1>
              <ImageSlider images={images}/>

          </div1>

        </div>


      </div>
    <div className="u2">

      <a href="" className='skill'>
            
            
            <img src={skills} alt="" className='img234'/>
            <button className='enter3'  onClick={()=>navigate('/Skills')}>Tools</button>


      </a>


     <a href="" className='app'>


       <h1 className='name1'>

        certificates:

       </h1>
        <p> 
          check out my certifications here
        </p>

        <button className='enter'>check</button>
 

      </a>



      <div className='new-box'>

        <button className='enter2'  onClick={()=>navigate('/Projects')}>Project's </button>
        <img src={BcgImg} alt="" className='pro'/>
    
      
        
      </div>


    </div>

    </div>



        <div className="terminal" ref={useterminal}>

        {history.map((line,index)=>(
          <div key={index} className="output">
              {line}

          </div>
        ))}
            <div className="input">

              <span> &gt; </span>
              <input 
              type="text" 
              value={command}
              onChange={(e)=>setcommand(e.target.value)}
              onKeyDown={handlekeyDone}
              autoFocus
              />


            </div>

        </div>
    </>
  )

  
}

export default Home;