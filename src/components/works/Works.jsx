import React, { useEffect, useState } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
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
  const urlApp = (index) => {
    switch (index) {
      case 0:
        return "https://urielbang.github.io/calculator-app-main/";
      case 1:
        return "main--budget-tracker-urielapp.netlify.app/";
      case 2:
        return "https://finance-app-uriel.netlify.app/";
      case 3:
        return "https://job-q-d8a10.web.app/";
      case 4:
        return "https://store-app-uriel.netlify.app/";
      case 5:
        return "";
      case 6:
        return "https://urielbang.github.io/app-movies/";
      case 7:
        return "https://main--rezume-app.netlify.app/";
      case 8:
        return "https://main--togetherapp-uriel.netlify.app/";
    }
  };
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
          this is my Projects
        </div>
        <div className="list">
          {projects.map((project, index) => {
            const url = urlApp(index);
            const aosAnimation =
              index % 2 == 0 ? "fade-up-right" : "fade-up-left";
            return (
              <a href={url} target="_blank" data-aos={aosAnimation}>
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
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
