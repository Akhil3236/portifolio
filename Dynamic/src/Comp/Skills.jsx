import React from "react";
import "../index.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "HTML", docUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", docUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "React", docUrl: "https://react.dev/learn" },
        { name: "Vite", docUrl: "https://vitejs.dev/guide/" },
        { name: "Redux", docUrl: "https://redux.js.org/introduction/getting-started" },
        { name: "Tailwind CSS", docUrl: "https://tailwindcss.com/docs" }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", docUrl: "https://nodejs.org/en/docs/" },
        { name: "Express.js", docUrl: "https://expressjs.com/en/guide/routing.html" },
        { name: "MongoDB", docUrl: "https://www.mongodb.com/docs/" },
        { name: "MySQL", docUrl: "https://dev.mysql.com/doc/" },
        { name: "REST APIs", docUrl: "https://restfulapi.net/" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        { name: "Git", docUrl: "https://git-scm.com/doc" },
        { name: "GitHub", docUrl: "https://docs.github.com/en" },
        { name: "Postman", docUrl: "https://learning.postman.com/docs/" },
        { name: "VS Code", docUrl: "https://code.visualstudio.com/docs" },
        { name: "Vercel", docUrl: "https://vercel.com/docs" },
        { name: "Netlify", docUrl: "https://docs.netlify.com/" }
      ]
    },
    {
      title: "Others",
      icon: "💻",
      skills: [
        { name: "Java", docUrl: "https://docs.oracle.com/en/java/" },
        { name: "Python", docUrl: "https://docs.python.org/3/" },
        { name: "C++", docUrl: "https://en.cppreference.com/w/" },
        { name: "Linux", docUrl: "https://www.kernel.org/doc/html/latest/" },
        { name: "Firebase", docUrl: "https://firebase.google.com/docs" }
      ]
    }
  ];

  const handleSkillClick = (docUrl) => {
    window.open(docUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="skills-page">
      <div className="skills-header">
        <h1 className="skills-title">
          <span className="title-icon">💻</span>
          Technical Skills
        </h1>
        <p className="skills-description">
          Click on any skill to access its official documentation and learn more
        </p>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="skill-category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-title">{category.title}</h3>
            </div>
            
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="skill-item"
                  onClick={() => handleSkillClick(skill.docUrl)}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleSkillClick(skill.docUrl);
                    }
                  }}
                >
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-arrow">→</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;