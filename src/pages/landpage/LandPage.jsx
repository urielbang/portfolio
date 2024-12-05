import NavBar from "../../components/navbar/NavBar";
import Spline from "@splinetool/react-spline";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import svg from "../../assets/scroll.svg";
import "./index.css";
import { Typewriter } from "react-simple-typewriter";
export default function LandPage() {
  const scrollToWork = () => {
    scroll.scrollTo("#start", {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <div className="context">
        <>
          <div className="lanPageContainer" id="start">
            <NavBar />
            <div className="timeline" data-aos="fade-right">
              <div className="bullet" data-aos="fade-right" />
              <ScrollLink
                data-aos="fade-right"
                to="work"
                className="scroll-bottom"
                smooth={true}
                duration={800}
                onClick={scrollToWork}
              >
                <img
                  className="scroll-img"
                  src={svg}
                  alt=""
                  data-aos="fade-right"
                />
              </ScrollLink>
            </div>

            <div className="containerText" data-aos="fade-right">
              <a>
                {`Start`}
                <span>{`/>`}</span>
              </a>

              <h1>
                Hi, my name is <span className="namePurple">Uriel Bengaev</span>
              </h1>
              <h1>
                I'm
                <Typewriter
                  words={[
                    " a Frontend Developer",
                    " a React Developer",
                    " a Full Stack Developer",
                    " a Creative Programmer",
                    " a Backend Developer",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={100}
                  delaySpeed={1500}
                />
              </h1>
              <a
                href="cv.pdf"
                className="cvButton"
                download="Uriel Bengaev CV.pdf"
              >
                Download my CV
              </a>

              <span className="letText">Let me show you...</span>
            </div>

            <div className="containerAnimation">
              <div className="computerAnimation"></div>
            </div>
          </div>
        </>
      </div>
      <div className="area">
        <ul className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    </>
  );
}
