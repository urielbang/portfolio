import AnimatedCursor from "react-animated-cursor";
import LandPage from "./components/landpage/LandPage";
import Works from "./components/works/Works";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="appContainer">
      <LandPage />
      <Skills />
      <Works />

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
