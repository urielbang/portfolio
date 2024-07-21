import AnimatedCursor from "react-animated-cursor";
import LandPage from "./pages/landpage/LandPage";

import Skills from "./pages/skills/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "./components/contact/Contact";
import Works from "./pages/works/Works";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="appContainer">
      <LandPage />
      <Skills />
      <Works />
      <Contact />
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    </div>
  );
}

export default App;
