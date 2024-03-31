import NavBar from "../navbar/NavBar";
import Spline from "@splinetool/react-spline";
import { load } from "./loaded";
import { saveAs } from "file-saver";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import svg from "../../assets/scroll.svg";

import "./index.css";

export default function LandPage() {
  const scrollToWork = () => {
    scroll.scrollTo("#start", {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="lanPageContainer" id="start">
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
      </div>
      <NavBar />
      <div className="timeline">
        <div className="bullet"></div>
        <ScrollLink
          to="work"
          className="scroll-bottom"
          smooth={true}
          duration={800}
          onClick={scrollToWork}
        >
          <img className="scroll-img" src={svg} alt="" srcset="" />
        </ScrollLink>
      </div>
      <div className="containerText">
        <a>
          {`Start`}
          <span>{`/>`}</span>
        </a>
        <h1>
          Hi, my name is <span className="namePurple">Uriel Bengaev</span>
        </h1>
        <h1>i'm Full stack developer</h1>
        <a
          href="cvUrielPerg.pdf"
          className="cvButton"
          download="cvUrielPerg.pdf"
        >
          Download my CV
        </a>

        <span className="letText">Let me show you...</span>
      </div>

      <div className="containerAnimation">
        <div className="computerAnimation">
          <Spline scene="https://prod.spline.design/Tt1-9L8VAmUjF5QR/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}
