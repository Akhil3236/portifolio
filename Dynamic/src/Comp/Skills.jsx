import React from "react";


const Skills = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Vite", "Redux", "Tailwind CSS"];
  const backendSkills = ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"];
  const toolsSkills = ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Netlify"];
  const others = ["Java", "Python", "C++", "Linux", "Firebase"];

  const renderSkills = (title, skills) => (
    <div className="skill-category">
      <h3>{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="skills-page">
      <h2>💻 My Skills</h2>
      <div className="skills-container">
        {renderSkills("Frontend", frontendSkills)}
        {renderSkills("Backend", backendSkills)}
        {renderSkills("Tools & Platforms", toolsSkills)}
        {renderSkills("Others", others)}
      </div>
    </div>
  );
};

export default Skills;
