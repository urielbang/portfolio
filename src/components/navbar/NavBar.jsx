import { useState } from "react";
import "./index.css";

export default function NavBar() {
  const [isCross, setIsCross] = useState(false);
  const handleClick = () => {
    setIsCross((prevState) => !prevState);
  };
  return (
    <nav className="navBar">
      <a className="logoName">
        <span>{`<`}</span>URI-B<span>{`/>`}</span>
      </a>

      <ul className={isCross ? "activeNab" : "containerList"}>
        <a>
          {`Start`}
          <span>{`/>`}</span>
        </a>
        <a>
          {`Work`}
          <span>{`/>`}</span>
        </a>
        <a>
          {`Lab`}
          <span>{`/>`}</span>
        </a>
        <a>
          {`About`}
          <span>{`/>`}</span>
        </a>
        <a>
          {`Contact`}
          <span>{`/>`}</span>
        </a>
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
