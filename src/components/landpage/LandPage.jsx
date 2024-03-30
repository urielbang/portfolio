import NavBar from "../navbar/NavBar";
import Spline from "@splinetool/react-spline";
import { load } from "./loaded";
import jsPDF from "jspdf";

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
          href="https://eu-central.storage.cloudconvert.com/tasks/18a26c15-abc7-4c47-88db-58ba0defff6b/cvUrielPerg.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=cloudconvert-production%2F20240330%2Ffra%2Fs3%2Faws4_request&X-Amz-Date=20240330T212254Z&X-Amz-Expires=86400&X-Amz-Signature=781200335b8c6dbc18c8d8aaad0aec6a948771bf87b67afc4068cabb15c9a3e8&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3D%22cvUrielPerg.webp%22&response-content-type=image%2Fwebp&x-id=GetObject"
          className="cvButton"
          download="Uriel-Benagev.jpg"
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
