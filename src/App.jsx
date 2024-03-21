import AnimatedCursor from "react-animated-cursor";
import LandPage from "./components/landpage/LandPage";

function App() {
  return (
    <div className="appContainer">
      <LandPage />
      <AnimatedCursor
        className="cursor"
        innerSize={8} // Set the size of the inner dot
        outerSize={8} // Set the size of the outer circle
        color="255, 255, 255" // Set the color to white
        outerAlpha={0.2} // Set the transparency of the outer circle
        innerScale={0.7} // Set the scale of the inner dot
        outerScale={5} // Set the scale of the outer circle
      />
    </div>
  );
}

export default App;
