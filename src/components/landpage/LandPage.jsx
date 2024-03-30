import NavBar from "../navbar/NavBar";
import Spline from "@splinetool/react-spline";
import { load } from "./loaded";
import svg from "../../assets/scroll.svg";

import "./index.css";

export default function LandPage() {
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
        <a href="#work" className="scroll-bottom">
          <img className="scroll-img" src={svg} alt="" srcset="" />
        </a>
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
