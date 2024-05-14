import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import WorkCard from "../../components/WorkCard";
import imgCalculator from "../../assets/Calculator.png";
import imgBudget from "../../assets/budget-tracker.png";
import financeImg from "../../assets/finance-app.png";
import JobFinderImg from "../../assets/JobFinder.png";
import storeImg from "../../assets/Store-app.png";
import spotifyImg from "../../assets/SPOTIFY.png";
import moviesImg from "../../assets/movies2.png";
import rezumeBuilderImg from "../../assets/rezumeBuilder.png";
import socialMediaImg from "../../assets/socialMedia.png";

export default function Works() {
  const [projects] = useState([
    {
      name: "Spotify App",
      description: "A Spotify clone built with React.",
      language: ["JavaScript", "HTML", "CSS", "React", "Node.js", "MongoDB"],
      image: <img src={spotifyImg} />,
      mission: "Full Stack",
    },
    {
      name: "Budget Tracker App",
      description:
        "An app to track income and expenses, including currency exchange functionality.",
      language: ["JavaScript", "HTML", "CSS", "React", "Node.js", "MongoDB"],
      image: <img src={imgBudget} />,
      mission: "Full Stack",
    },
    {
      name: "Finance App",
      description:
        "A finance app to manage various types of money transactions.",
      language: ["JavaScript", "HTML", "CSS", "React", "Node.js", "MongoDB"],
      image: <img src={financeImg} />,
      mission: "Full Stack",
    },
    {
      name: "Job Finder App",
      description: "An app to help users find job opportunities.",
      language: ["JavaScript", "HTML", "CSS", "React", "Node.js", "MongoDB"],
      image: <img src={JobFinderImg} />,
      mission: "Full Stack",
    },
    {
      name: "Store App",
      description: "An app for buying vegetables and fruits.",
      language: ["JavaScript", "HTML", "CSS", "React", "Node.js", "MongoDB"],
      image: <img src={storeImg} />,
      mission: "Full Stack",
    },
    {
      name: "Calculator",
      description: "A simple calculator built using JavaScript, HTML, and CSS.",
      language: ["JavaScript", "HTML", "CSS", "React", "Node.js", "MongoDB"],
      image: <img src={imgCalculator} />,
      mission: "Full Stack",
    },
    {
      name: "Movies App",
      description: "An app to view information about movies.",
      language: ["JavaScript", "HTML", "CSS", "React", "Node.js", "MongoDB"],
      image: <img src={moviesImg} />,
      mission: "Full Stack",
    },
    {
      name: "Resume Builder",
      description: "A tool to build resumes.",
      language: ["JavaScript", "HTML", "CSS", "React", "Node.js", "MongoDB"],
      image: <img src={rezumeBuilderImg} />,
      mission: "Full Stack",
    },
    {
      name: "Social Media Together",
      description: "A social media platform.",
      language: ["JavaScript", "HTML", "CSS", "React", "Node.js", "MongoDB"],
      image: <img src={socialMediaImg} />,
      mission: "Full Stack",
    },
  ]);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="worksContainer" id="work">
      <div className="containerTagSkills">
        <a className="skillsTag" data-aos="fade-right">
          {`Works`}
          <span>{`/>`}</span>
        </a>
      </div>
      <small className="bulletSkills" data-aos="fade-right"></small>
      <section className="projects">
        <div className="title" data-aos="fade-up" data-aos-duration="3000">
          these are my projects
        </div>
        <div className="list-projects">
          {projects.map((project, index) => {
            return <WorkCard project={project} key={index} index={index} />;
          })}
        </div>
      </section>
    </div>
  );
}
