import React, { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJava,
  FaNodeJs,
  FaReact,
  FaGit,
} from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import "./style.css";

export default function Skills() {
  const [listSkills] = useState([
    {
      name: "HTML",
      description:
        "Hypertext Markup Language - the standard markup language for creating web pages and web applications.",
      icon: <FaHtml5 className="svg" />,
    },
    {
      name: "CSS",
      description:
        "Cascading Style Sheets - a style sheet language used for describing the presentation of a document written in HTML.",
      icon: <FaCss3 className="svg" />,
    },
    {
      name: "JavaScript",
      description:
        "A high-level programming language that is commonly used as a scripting language for websites.",
      icon: <IoLogoJavascript className="svg" />,
    },
    {
      name: "Java",
      description:
        "A widely used programming language for building enterprise-scale applications.",
      icon: <FaJava className="svg" />,
    },
    {
      name: "Node.js",
      description:
        "An open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser.",
      icon: <FaNodeJs className="svg" />,
    },
    {
      name: "React",
      description:
        "A JavaScript library for building user interfaces, often used for single-page applications.",
      icon: <FaReact className="svg" />,
    },
    {
      name: "MongoDB",
      description:
        "A NoSQL database program, using JSON-like documents with optional schemas.",
      icon: <BiLogoMongodb className="svg" />,
    },
    {
      name: "Express",
      description:
        "A web application framework for Node.js, designed for building web applications and APIs.",
      icon: <SiExpress className="svg" />,
    },
    {
      name: "Git",
      description:
        "A distributed version control system for tracking changes in source code during software development.",
      icon: <FaGit className="svg" />,
    },
    {
      name: "SQL",
      description:
        "Structured Query Language - a domain-specific language used in programming and designed for managing data held in a relational database management system.",
      icon: <PiFileSql className="svg" />,
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
        this is my skills
      </div>

      <div className="list">
        {listSkills.map((value, key) => {
          return (
            <div key={key} className="item" data-aos="fade-up">
              {value.icon}
              <h3>{value.name}</h3>
              <div className="des">{value.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
