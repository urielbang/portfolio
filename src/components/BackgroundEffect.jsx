import Particles from "react-tsparticles";
import "./style.css";

export default function BackgroundEffect() {
  return (
    <Particles
      options={{
        background: {
          color: "#1a1a1a", // צבע הרקע
        },
        particles: {
          number: {
            value: 80, // כמות החלקיקים
          },
          size: {
            value: 3, // גודל החלקיקים
          },
          move: {
            speed: 2, // מהירות התנועה
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff", // צבע הקווים המחברים
          },
        },
      }}
    />
  );
}
