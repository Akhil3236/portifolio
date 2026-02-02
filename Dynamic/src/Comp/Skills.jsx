import React from 'react';
import '../App.css';

const skillsData = [
  {
    category: "Frontend Development",
    icon: "devicon-react-original",

    skills: [
      { name: "React.js", icon: "devicon-react-original colored", url: "https://react.dev/" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "HTML5", icon: "devicon-html5-plain colored", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS3", icon: "devicon-css3-plain colored", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Tailwind", icon: "devicon-tailwindcss-original colored", url: "https://tailwindcss.com/" },
      { name: "Vite", icon: "devicon-vitejs-plain colored", url: "https://vitejs.dev/" },
      { name: "Redux", icon: "devicon-redux-original colored", url: "https://redux.js.org/" },
    ]
  },
  {
    category: "Backend Development",
    icon: "devicon-nodejs-plain",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored", url: "https://nodejs.org/" },
      { name: "Express.js", icon: "devicon-express-original", url: "https://expressjs.com/" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored", url: "https://www.mongodb.com/" },
      { name: "MySQL", icon: "devicon-mysql-plain colored", url: "https://www.mysql.com/" },
    ]
  },
  {
    category: "Tools & DevOps",
    icon: "devicon-git-plain",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored", url: "https://git-scm.com/" },
      { name: "GitHub", icon: "devicon-github-original", url: "https://github.com/" },
      { name: "Postman", icon: "devicon-postman-plain colored", url: "https://www.postman.com/" },
      { name: "VS Code", icon: "devicon-vscode-plain colored", url: "https://code.visualstudio.com/" },
      { name: "Vercel", icon: "devicon-vercel-original", url: "https://vercel.com/" },
      { name: "Netlify", icon: "devicon-netlify-plain colored", url: "https://www.netlify.com/" },
    ]
  },
  {
    category: "Languages & Others",
    icon: "devicon-java-plain",
    skills: [
      { name: "Java", icon: "devicon-java-plain colored", url: "https://www.java.com/" },
      { name: "Python", icon: "devicon-python-plain colored", url: "https://www.python.org/" },
      { name: "C++", icon: "devicon-cplusplus-plain colored", url: "https://isocpp.org/" },
      { name: "Linux", icon: "devicon-linux-plain", url: "https://www.kernel.org/" },
    ]
  }
];

function Skills() {
  return (
    <div className="skills-page-new">

      {/* Background Ambience */}
      <div className="skills-bg-glow"></div>

      <div className="skills-header animate-slide-up">

        <h1 className="skills-title">Technical <span className="highlight">Arsenal</span></h1>
        <p className="skills-subtitle">
          The languages, frameworks, and tools that power my development journey.
        </p>
      </div>

      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className={`skill-category-card glass-effect animate-slide-up delay-${Math.min((index + 1) * 100, 500)}`}
          >
            <div className="category-header">
              <div className="icon-wrapper">
                <i className={`${category.icon} category-icon`}></i>
              </div>
              <h3>{category.category}</h3>
            </div>

            <div className="skills-list">
              {category.skills.map((skill, sIndex) => (
                <a
                  key={sIndex}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-badge"
                  title={`View ${skill.name} docs`}
                >
                  <i className={skill.icon}></i>
                  <span>{skill.name}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Skills;