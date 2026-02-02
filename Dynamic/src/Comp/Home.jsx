import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import Spline from '@splinetool/react-spline';
import { getCalApi } from "@calcom/embed-react"; // Import Cal.com API

// Assets
import profile from '../assets/profile2.png';
import skillsImg from '../assets/skills3.png';
import backgorund from '../assets/backgorund.png';
import Img1 from '../assets/Github.webp';
import Img2 from '../assets/Discrod2.jpg';
import Img3 from '../assets/Linkedin2.jpg';
import { SiLeetcode, SiGithub } from 'react-icons/si';


// Components
import ImageSlider from '../ImageSlider';

const images = [
  { src: Img1, link: "" },
  { src: Img2, link: "" },
  { src: Img3, link: "" },
];

function Home() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(null);

  // Initialize Cal.com
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "15min" });
      cal("ui", { "styles": { "branding": { "brandColor": "#ff5252" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  const handleCopy = (e, text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(text);
        setTimeout(() => setCopied(null), 2000);
      })
      .catch((err) => console.error('Copy failed:', err));
  };

  const scrollDown = () => {
    const gridSection = document.getElementById('bento-grid');
    if (gridSection) {
      gridSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <img src={backgorund} alt="background" className='gradient-img' />

      <div className="home-container">

        {/* --- HERO SECTION --- */}
        <section className="hero-section">
          <div className="hero-content" data-aos="fade-right">
            <h1 className="greeting">Hi, I'm <span className="name-highlight">Akhil Tuluri</span></h1>
            <div className="typewriter-container">
              <span className="typewriter-text">
                <Typewriter
                  words={['A Full Stack Developer', 'An Undergraduate at NIT Srinagar', 'A Versatile Developer']}
                  loop={0}
                  cursor
                  cursorStyle='_'
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>
            <p className="hero-description">
              Building robust, scalable, and user-friendly web applications.
              Let's turn ideas into reality.
            </p>

            <div className="hero-buttons">
              <button
                data-cal-namespace="15min"
                data-cal-link="akhiltuluri"
                data-cal-config='{"layout":"month_view"}'
                className="primary-btn"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <span></span> Book a Call
              </button>
              <button className="secondary-btn" onClick={scrollDown}>Explore More ↓</button>
              <div className="social-links">
                <a href="https://github.com/Akhil3236" target="_blank" rel="noreferrer" title="GitHub"><i className="devicon-github-original"></i></a>
                <a href="https://www.linkedin.com/in/akhil-tuluri-28973224a/" target="_blank" rel="noreferrer" title="LinkedIn"><i className="devicon-linkedin-plain"></i></a>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="spline-container">
              <Spline scene="https://prod.spline.design/HBfB8WY9R7F2KiQd/scene.splinecode" />
            </div>
          </div>
        </section>


        {/* --- TECH STACK MARQUEE --- */}
        <section className="tech-stack-section glass-effect">
          <h3 className="section-label">Tech Stack</h3>
          <div className="tech-marquee-container">
            <div className="track">
              {/* Repeat keys to ensure smooth infinite scroll */}
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  <span><i className="devicon-javascript-plain colored"></i></span>
                  <span><i className="devicon-react-original-wordmark colored"></i></span>
                  <span><i className="devicon-nodejs-plain-wordmark colored"></i></span>
                  <span><i className="devicon-mongodb-plain-wordmark colored"></i></span>
                  <span><i className="devicon-java-plain-wordmark colored"></i></span>
                  <span><i className="devicon-git-plain-wordmark colored"></i></span>
                  <span><i className="devicon-express-original-wordmark"></i></span>
                  <span><i className="devicon-github-original"></i></span>
                  <span><i className="devicon-cplusplus-plain colored"></i></span>
                  <span><i className="devicon-python-plain-wordmark colored"></i></span>
                  <span><i className="devicon-tailwindcss-original colored"></i></span>
                  <span><i className="devicon-bootstrap-plain-wordmark colored"></i></span>
                  <span><i className="devicon-figma-plain"></i></span>
                  <span><i className="devicon-amazonwebservices-plain-wordmark colored"></i></span>
                  <span><i className="devicon-css3-plain-wordmark"></i></span>
                  <span><i className="devicon-html5-plain-wordmark colored"></i></span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>


        {/* --- BENTO GRID SECTION --- */}
        <section id="bento-grid" className="bento-grid">

          {/* 1. Profile / Intro Card */}
          <div className="bento-card profile-card glass-effect">
            <div className="card-content">
              <div className="profile-text">
                <h3>Hi! I'm <span className="highlight-text">Akhil Tuluri</span></h3>
                <p>
                  A passionate <strong>Full Stack Developer</strong> and CS student at <strong>NIT Srinagar</strong>.
                  I create responsive, user-friendly and scalable apps.
                </p>
              </div>
              <div className="profile-image-container">
                <img src={profile} alt="Akhil Tuluri" className="profile-img" />
              </div>
            </div>
          </div>

          {/* 2. Resume Card */}
          <div className="bento-card resume-card glass-effect" onClick={() => navigate('/Resume')}>
            <h3>My Resume</h3>
            <p className="resume-desc">Full Stack Engineer with a knack for scalable systems.</p>

            <div className="tags-container">
              <span className="mini-tag">React.js</span>
              <span className="mini-tag">Node.js</span>
              <span className="mini-tag">MongoDB</span>
              <span className="mini-tag">Express</span>
              <span className="mini-tag">Next.js</span>
              <span className="mini-tag">Tailwind</span>
              <span className="mini-tag">SQL</span>
            </div>

            <a href="/Resume" className="text-btn">View Resume →</a>

          </div>

          {/* 3. Contact Card */}
          <div className="bento-card contact-card glass-effect">
            <h3>Get In Touch</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '10px', color: '#ccc' }}>Click below to copy or book a call.</p>
            <div className="contact-item">
              <button className={`copy-btn ${copied === 'akhiltuluri123@gmail.com' ? 'copied' : ''}`} onClick={(e) => handleCopy(e, 'akhiltuluri123@gmail.com')} title="Copy Email">
                {copied === 'akhiltuluri123@gmail.com' ? <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>✓</span> : <span style={{ fontSize: '1.2rem' }}>📋</span>}
              </button>
              <span onClick={(e) => handleCopy(e, 'akhiltuluri123@gmail.com')} style={{ cursor: 'pointer' }}>akhiltuluri123@gmail.com</span>
            </div>

            <button
              data-cal-namespace="15min"
              data-cal-link="akhiltuluri"
              data-cal-config='{"layout":"month_view"}'
              className="primary-btn schedule-btn"
              style={{ marginTop: '15px', width: '100%', justifyContent: 'center' }}
            >
              Schedule Meeting
            </button>
          </div>

          {/* 4. Story / Before & After Card */}
          <div className="bento-card story-card glass-effect" onClick={() => navigate('/About')}>
            <div className="story-header">
              <span>Journey</span>
              <span className="vs-badge">Stats</span>
            </div>
            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-num">6+</span>
                <span className="stat-label">months Exp</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">2+</span>
                <span className="stat-label">Clients</span>
              </div>
            </div>
            <button className="text-btn">Read My Story →</button>
          </div>

          {/* 5. Slider Card */}
          <div className="bento-card slider-card glass-effect">
            <ImageSlider images={images} />
          </div>

          {/* 6. Skills Card */}
          <div className="bento-card skills-card glass-effect" onClick={() => navigate('/Skills')}>
            <div className="skills-card-content">
              <img src={skillsImg} alt="Skills" className="skills-preview-img" />
              <div className="overlay-text">
                <span>Tech Stack & Tools</span>
              </div>
            </div>
          </div>

          {/* 7. Projects Card */}
          <div className="bento-card projects-card glass-effect" onClick={() => navigate('/Projects')}>
            <h3>Featured Projects</h3>
            <div className="project-list-home">
              <div className="p-item">
                <span className="p-emoji"></span>
                <span>Real-time Chat App</span>
              </div>
              <div className="p-item">
                <span className="p-emoji"></span>
                <span>E-commerce Platform</span>
              </div>
              <div className="p-item">
                <span className="p-emoji"></span>
                <span>AI Integrated Tools</span>
              </div>
              <div className="p-item">
                <span className="p-emoji"></span>
                <span>MetaMeet</span>
              </div>
              <div className="p-item">
                <span className="p-emoji"></span>
                <span>Twitter Bot</span>
              </div>
              <div className="p-item">
                <span className="p-emoji"></span>
                <span>Chat Bot</span>
              </div>
            </div>
            <p className="project-footer-msg">These are my highlight projects. Please check them out!</p>
            <button className="text-btn">View All Projects →</button>
          </div>

          {/* 8. Certifications Card */}
          <div className="bento-card cert-card glass-effect">
            <h3>Certifications</h3>
            <ul className="cert-list-home">
              <li>AWS Cloud Practitioner</li>
              <li>HackerRank (Gold Badge)</li>
              <li>Full Stack Web Dev Bootcamp</li>
            </ul>
          </div>

        </section>


        {/* --- LEETCODE ACTIVITY SECTION --- */}
        <section className="leetcode-section">
          <div className="section-header-centered animate-slide-up">
            <h2 className="section-title">Consistency <span className="highlight">Tracker</span></h2>
            <p className="section-subtitle">A visual representation of my daily problem-solving journey on LeetCode.</p>
          </div>

          <div className="leetcode-consistency-section animate-slide-up delay-200">
            <div className="leetcode-card glass-effect">
              <div className="leetcode-card-bg"></div>
              <div className="leetcode-content">
                <div className="leetcode-heatmap-container">
                  <div className="browser-top-bar">
                    <div className="browser-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="browser-address">leetcode.com/akhiltuluri</div>
                  </div>
                  <div className="heatmap-wrapper">
                    <img
                      src="https://leetcard.jacoblin.cool/akhiltuluri?theme=dark&font=Baloo&ext=heatmap"
                      alt="LeetCode Activity Heatmap"
                      className="leetcode-heatmap-img"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="leetcode-footer">
                  <a
                    href="https://leetcode.com/u/akhiltuluri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leetcode-btn"
                  >
                    <SiLeetcode size={20} />
                    <span>LeetCode Profile</span>
                  </a>

                  <a
                    href="https://github.com/Akhil3236"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leetcode-btn"
                  >
                    <SiGithub size={20} />
                    <span>GitHub Solutions</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* --- GITHUB ACTIVITY SECTION --- */}
        <section className="github-section">
          <div className="section-header-centered animate-slide-up">
            <h2 className="section-title">Open Source <span className="highlight">Contributions</span></h2>
            <p className="section-subtitle">A look into my GitHub activity and contributions to the developer community.</p>
          </div>

          <div className="github-activity-grid animate-slide-up delay-200">
            {/* Main Stats Card */}
            <div className="github-main-card glass-effect">

              <div className="github-graph-container">
                <div className="browser-top-bar">
                  <div className="browser-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="browser-address">github.com/akhil3236/activity</div>
                </div>
                <div className="graph-wrapper">
                  <img
                    src="https://github-readme-activity-graph.vercel.app/graph?username=akhil3236&theme=github-dark&bg_color=00000000&hide_border=true&color=ff5252"
                    alt="GitHub Activity Graph"
                    className="github-activity-img"
                  />
                </div>
              </div>

              <div className="github-footer">
                <a
                  href="https://github.com/Akhil3236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leetcode-btn"
                >
                  <SiGithub size={20} />
                  <span>Visit GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>
        </section>



      </div>
    </>
  );
}

export default Home;