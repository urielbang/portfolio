import NavBar from "../navbar/NavBar";
import Spline from "@splinetool/react-spline";
import { load } from "./loaded";

import "./index.css";
import { useEffect } from "react";
export default function LandPage() {
  // useEffect(() => {
  //   load();
  // }, []);
  return (
    <div className="lanPageContainer">
      <div id="loader-wrapper">
        <div id="loader"></div>

        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
      </div>
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
