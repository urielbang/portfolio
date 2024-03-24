import NavBar from "../navbar/NavBar";
import Spline from "@splinetool/react-spline";

import "./index.css";
export default function LandPage() {
  return (
    <div className="lanPageContainer">
      <NavBar />
      <div className="containerText">
        <a>
          {`Start`}
          <span>{`/>`}</span>
        </a>
        <h1>Hi, my name is Uriel Bngaev</h1>
        <h>i Full stack develop and develop</h>
      </div>
      <div className="timeline"></div>

      <div className="containerAnimation">
        <div className="computerAnimation">
          <Spline scene="https://prod.spline.design/Tt1-9L8VAmUjF5QR/scene.splinecode" />
        </div>
      </div>
    </div>
  );
}
