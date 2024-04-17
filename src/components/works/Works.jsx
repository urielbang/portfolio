import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
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
  const calculateRotation = (e, ref) => {
    const x = (e.nativeEvent.offsetX - ref.current.offsetWidth / 2) / 10;
    const y = -(e.nativeEvent.offsetY - ref.current.offsetHeight / 2) / 10;
    return { x, y };
  };
  const urlApp = (index) => {
    switch (index) {
      case 0:
        return "https://urielbang.github.io/calculator-app-main";
      case 1:
        return "main--budget-tracker-urielapp.netlify.app";
      case 2:
        return "https://finance-app-uriel.netlify.app";
      case 3:
        return "https://job-q-d8a10.web.app";
      case 4:
        return "https://store-app-uriel.netlify.app";
      case 5:
        return "https://spotify-uri.netlify.app/";
      case 6:
        return "https://urielbang.github.io/app-movies";
      case 7:
        return "https://main--rezume-app.netlify.app";
      case 8:
        return "https://main--togetherapp-uriel.netlify.app";
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
        <div className="list-projects">
          {projects.map((project, index) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const rotateX = useTransform(y, [-10, 10], [-10, 10]);
            const rotateY = useTransform(x, [-10, 10], [-10, 10]);
            const ref = useRef(null);

            const handleMouseMove = (e) => {
              const rect = ref.current.getBoundingClientRect();
              const mouseX = (e.clientX - rect.left - rect.width / 2) / 10;
              const mouseY = -(e.clientY - rect.top - rect.height / 2) / 10;
              x.set(mouseX);
              y.set(mouseY);
            };
            const url = urlApp(index);
            const aosAnimation =
              index % 2 == 0 ? "fade-up-right" : "fade-up-left";

            return (
              <motion.div
                data-aos={aosAnimation}
                ref={ref}
                style={{
                  transformStyle: "preserve-3d",
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transformPerspective: 500,
                  zIndex: 50,
                  backgroundColor: "#01082488",
                  padding: "20px",
                  borderRadius: "20px",
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => {
                  x.set(0);
                  y.set(0);
                }}
                className="item-work"
              >
                <a href={url} target="_blank" className="cardProject">
                  <div className="images" data-aos={aosAnimation}>
                    {project.image}
                  </div>
                  <div className="content" data-aos={aosAnimation}>
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
                      <div className="de">{project.language.join(", ")}</div>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
