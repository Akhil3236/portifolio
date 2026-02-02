import React from 'react';
import backgorund from "../assets/backgorund.png";

function About() {
  return (
    <>
      <img src={backgorund} alt="background" className='gradient-img' />

      <div className="about-container">
        {/* Header Section */}
        <div className="about-header animate-slide-up">
          <h1 className="title-text">About Me</h1>
          <p className="subtitle-text">Building the future, one line of code at a time.</p>
        </div>

        {/* Bio Section */}
        <div className="about-bio-section animate-slide-up delay-100">
          <div className="bio-card glass-effect">
            <p>
              I'm an enthusiastic <strong>Full Stack Developer</strong> with expertise in React, Node.js, and modern web technologies.
              I'm passionate about creating innovative solutions and continuously expanding my technical knowledge
              to contribute meaningfully to the tech community.
            </p>
            <br />
            <p>
              I love solving complex problems through elegant code, building scalable full-stack applications,
              and exploring cutting-edge technologies. Let's collaborate and create something extraordinary together!
            </p>
          </div>
        </div>

        {/* Timeline / Grid Section */}
        <div className="about-details-grid">

          {/* Experience Column */}
          <div className="detail-column experience-col animate-slide-up delay-200">
            <h2 className="section-title">Work Experience</h2>
            <div className="timeline">

              <div className="timeline-item glass-effect animate-slide-up delay-300">
                <div className="timeline-date">Oct2025 - Feb2026</div>
                <div className="timeline-content">
                  <h3>Backend Developer Intern</h3>
                  <h4>Pamsar Technologies</h4>
                  <ul className="t-list">
                    <li>Integrated Stripe payments (PaymentIntent, Webhooks, Customer API) using Node.js & Express to enable 100% secure
                      online transactions, reducing checkout failures by 30% and improving payment reliability.</li>
                    <li>Built and optimized 20+ RESTful using Node.js, Express, and MongoDB backend APIs for admin management modules
                      (Users, Orders, Roles & Permissions), improving data retrieval.</li>
                    <li>Collaborated with cross-functional teams to design scalable backend architecture, implementing role-based authentication,
                      input validation, and standardized error handling, reducing production bugs.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item glass-effect animate-slide-up delay-300">
                <div className="timeline-date">Dec2024 - Feb2025</div>
                <div className="timeline-content">
                  <h3>Full Stack Developer Intern</h3>
                  <h4>Ardent Pvt Limited</h4>
                  <ul className="t-list">
                    <li>Developed a comprehensive user authentication system with registration, login, and role-based access control for 100+ users using React.js and Node.js.</li>
                    <li>Optimized application performance by reducing page reloads and enhancing UI responsiveness by 30% through client-side validation.</li>
                    <li>Gained extensive hands-on experience in React components, REST APIs, Express.js routing, and MongoDB integration.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Education Column */}
          <div className="detail-column education-col animate-slide-up delay-200">
            <h2 className="section-title">Education</h2>
            <div className="timeline">

              <div className="timeline-item glass-effect animate-slide-up delay-400">
                <div className="timeline-date">2022 - Present</div>
                <div className="timeline-content">
                  <h3>Bachelor of Technology</h3>
                  <h4>Computer Science and Engineering</h4>
                  <p>NIT Srinagar, Srinagar</p>
                  {/* <span className="grade-badge">CGPA: 9.0</span> */}
                </div>
              </div>

              <div className="timeline-item glass-effect animate-slide-up delay-500">
                <div className="timeline-date">2020 - 2022</div>
                <div className="timeline-content">
                  <h3>Intermediate (M.P.C)</h3>
                  <p>Sasi New Gen Junior College, AP</p>
                  {/* <span className="grade-badge">Grade: 9.8</span> */}
                </div>
              </div>

              <div className="timeline-item glass-effect animate-slide-up delay-500">
                <div className="timeline-date">2019 - 2020</div>
                <div className="timeline-content">
                  <h3>Secondary School (S.S.C)</h3>
                  <p>Sasi Eng Medium High School, AP</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default About;