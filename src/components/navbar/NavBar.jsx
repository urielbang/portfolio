import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import "./index.css";

export default function NavBar() {
  const [isCross, setIsCross] = useState(false);
  const [activeItem, setActiveItem] = useState("Start");
  const scrollToPage = (namePage) => {
    setActiveItem(namePage);
    scroll.scrollTo(`#${namePage}`, {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };
  const handleClick = () => {
    setIsCross((prevState) => !prevState);
  };

  return (
    <nav className="navBar" data-aos="fade-up">
      <a className="logoName">
        <span>{`<`}</span>URI-B<span>{`/>`}</span>
      </a>

      <ul className={isCross ? "activeNab" : "containerList"}>
        <ScrollLink
          style={{ color: activeItem === "start" ? "white" : "" }}
          to="start"
          smooth={true}
          duration={800}
          onClick={() => {
            scrollToPage("start");
            handleClick();
          }}
        >
          Start
          <span>{`/>`}</span>
        </ScrollLink>

        <ScrollLink
          to="skills"
          style={{ color: activeItem === "skills" ? "white" : "" }}
          smooth={true}
          duration={800}
          onClick={() => {
            scrollToPage("skills");
            handleClick();
          }}
        >
          Skills
          <span>{`/>`}</span>
        </ScrollLink>

        <ScrollLink
          to="work"
          style={{ color: activeItem === "Work" ? "white" : "" }}
          className="scroll-bottom"
          smooth={true}
          duration={800}
          onClick={() => {
            scrollToPage("Work");
            handleClick();
          }}
        >
          Work
          <span>{`/>`}</span>
        </ScrollLink>

        <ScrollLink
          to="about"
          style={{ color: activeItem === "about" ? "white" : "" }}
          className="scroll-bottom"
          smooth={true}
          duration={800}
          onClick={() => {
            scrollToPage("about");
            handleClick();
          }}
        >
          About
          <span>{`/>`}</span>
        </ScrollLink>
        <ScrollLink
          to="contact"
          style={{ color: activeItem === "contact" ? "white" : "" }}
          className="scroll-bottom"
          smooth={true}
          duration={800}
          onClick={() => {
            scrollToPage("contact");
            handleClick();
          }}
        >
          Contact
          <span>{`/>`}</span>
        </ScrollLink>
      </ul>
      <div
        className={isCross ? "cross" : ""}
        id="hamaburger"
        onClick={handleClick}
      >
        <svg id="icon" viewBox="0 0 800 600">
          <path
            d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
            id="top"
          ></path>
          <path d="M300,320 L540,320" id="middle"></path>
          <path
            d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
            id="bottom"
            transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
          ></path>
        </svg>
      </div>
    </nav>
  );
}
