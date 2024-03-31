import React, { useState } from "react";
import "./index.css";
import imgCalculator from "../../assets/Calculator.png";
import imgBudget from "../../assets/budget-tracker.png";
import financeImg from "../../assets/finance-app.png";
import JobFinderImg from "../../assets/JobFinder.png";
import storeImg from "../../assets/Store-app.png";
import spotifyImg from "../../assets/SPOTIFY.png";
import moviesImg from "../../assets/movies2.png";
import rezumeBuilderImg from "../../assets/rezumeBuilder.png";
import socialMediaImg from "../../assets/socialMedia.png";
import { CiCircleQuestion } from "react-icons/ci";
import { FaEarthAmericas } from "react-icons/fa6";

export default function Works() {
  const [projects] = useState([
    {
      name: "Calculator",
      description: "A simple calculator built using JavaScript, HTML, and CSS.",
      language: ["JavaScript", "HTML", "CSS", "React", "Node.js", "MongoDB"],
      image: <img src={imgCalculator} />,
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
      name: "Spotify App",
      description: "A Spotify clone built with React.",
      language: ["JavaScript", "HTML", "CSS", "React", "Node.js", "MongoDB"],
      image: <img src={spotifyImg} />,
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
  return (
    <div className="worksContainer" id="work">
      <div className="containerTagSkills">
        <a className="skillsTag">
          {`Works`}
          <span>{`/>`}</span>
        </a>
      </div>
      <small className="bulletSkills"></small>
      <section className="projects">
        <div className="title">this is my Projects</div>
        <div className="list">
          {projects.map((project, index) => {
            return (
              <div key={index} className="item">
                <div className="images">{project.image}</div>
                <div className="content">
                  <h3>{project.name}</h3>
                  <div className="des">{project.description}</div>

                  <div className="mission">
                    <div>
                      <CiCircleQuestion />
                    </div>
                    <h4>Mission</h4>
                    <div className="de">{project.mission}</div>
                  </div>

                  <div className="mission">
                    <div>
                      <FaEarthAmericas />
                    </div>
                    <h4>Languages</h4>
                    <div className="de">{project.language}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
