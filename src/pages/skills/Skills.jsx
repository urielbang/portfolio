import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./style.css";
import SkillCard from "../../components/SkillCard";

export default function Skills() {
  const [listSkills] = useState([
    {
      name: "HTML",
      description:
        "Hypertext Markup Language - the standard markup language for creating web pages and web applications.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
      ),
    },
    {
      name: "CSS",
      description:
        "Cascading Style Sheets - a style sheet language used for describing the presentation of a document written in HTML.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
      ),
    },
    {
      name: "JavaScript",
      description:
        "A high-level programming language that is commonly used as a scripting language for websites.",
      icon: (
        <img
          className="svg"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        />
      ),
    },
    {
      name: "Postman",
      description:
        "A collaboration platform for API development, enabling developers to design, test, and document APIs.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
      ),
    },
    {
      name: "Jest",
      description:
        "A JavaScript testing framework designed to ensure correctness of any JavaScript codebase.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" />
      ),
    },
    {
      name: "JSON",
      description:
        "JavaScript Object Notation - a lightweight data-interchange format, easy for humans to read and write.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" />
      ),
    },
    {
      name: "Next.js",
      description:
        "A React framework that enables server-side rendering and static site generation for building web applications.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
      ),
    },
    {
      name: "npm",
      description:
        "Node Package Manager - a package manager for JavaScript that enables developers to share and reuse code.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" />
      ),
    },
    {
      name: "React Router",
      description:
        "A library for managing navigation and routing in React applications.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg" />
      ),
    },
    {
      name: "Java",
      description:
        "A widely used programming language for building enterprise-scale applications.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
      ),
    },
    {
      name: "Node.js",
      description:
        "An open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
      ),
    },
    {
      name: "React",
      description:
        "A JavaScript library for building user interfaces, often used for single-page applications.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
      ),
    },
    {
      name: "MongoDB",
      description:
        "A NoSQL database program, using JSON-like documents with optional schemas.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
      ),
    },
    {
      name: "Express",
      description:
        "A web application framework for Node.js, designed for building web applications and APIs.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
      ),
    },
    {
      name: "Git",
      description:
        "A distributed version control system for tracking changes in source code during software development.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
      ),
    },
    {
      name: "SQL",
      description:
        "Structured Query Language - a domain-specific language used in programming and designed for managing data held in a relational database management system.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
      ),
    },
    {
      name: "Firebase",
      description:
        "A platform developed by Google for creating mobile and web applications, offering services such as authentication, database, and hosting.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />
      ),
    },
    {
      name: "NestJS",
      description:
        "A progressive Node.js framework for building efficient and scalable server-side applications.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" />
      ),
    },
    {
      name: "TypeScript",
      description:
        "A strict syntactical superset of JavaScript that adds optional static typing.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
      ),
    },
    {
      name: "Bootstrap",
      description:
        "A free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
      ),
    },
    {
      name: "Redux",
      description:
        "A predictable state container for JavaScript apps, commonly used with React for managing application state.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
      ),
    },
    {
      name: "Xcode",
      description:
        "An integrated development environment (IDE) for macOS containing tools for developing software for Apple's platforms.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg" />
      ),
    },
    {
      name: "Android Studio",
      description:
        "The official integrated development environment (IDE) for Google's Android operating system.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original-wordmark.svg" />
      ),
    },
    {
      name: "GitHub",
      description:
        "A code hosting platform for version control and collaboration using Git, commonly used by developers worldwide.",
      icon: (
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
      ),
    },
  ]);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="skills" className="containerSkills">
      <div className="containerTagSkills">
        <a className="skillsTag" data-aos="fade-right">
          {`Skills`}
          <span>{`/>`}</span>
        </a>
      </div>

      <small className="bulletSkills" data-aos="fade-right"></small>

      <div className="title" data-aos="fade-up" data-aos-duration="3000">
        these are my skills
      </div>

      <div className="list">
        {listSkills.map((skill, index) => {
          return <SkillCard skill={skill} index={index} key={index} />;
        })}
      </div>
    </div>
  );
}
