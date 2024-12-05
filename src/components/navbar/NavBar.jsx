import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Sling as Hamburger } from "hamburger-react";

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
        <span>{`<`}</span>Uriel<span>{`/>`}</span>
      </a>

      <ul className={isCross ? "activeNab active" : "containerList"}>
        {["start", "skills", "work", "contact"].map((item, index) => (
          <li key={index}>
            <ScrollLink
              to={item}
              smooth={true}
              duration={800}
              style={{ color: activeItem === item ? "white" : "" }}
              onClick={() => {
                scrollToPage(item);
                handleClick();
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span>{`/>`}</span>
            </ScrollLink>
          </li>
        ))}
      </ul>

      <div id="hamaburger" onClick={handleClick}>
        <Hamburger direction="left" rounded duration={0.6} />
      </div>
    </nav>
  );
}
