import { useRef } from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { FaEarthAmericas } from "react-icons/fa6";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function WorkCard({ project, index }) {
  const urlApp = (index) => {
    switch (index) {
      case 0:
        return "https://spotify-indol-theta.vercel.app";
      case 1:
        return "https://main--budget-tracker-urielapp.netlify.app";
      case 2:
        return "https://financeapi-jade.vercel.app";
      case 3:
        return "https://job-q-d8a10.web.app";
      case 4:
        return "https://movies-app-psi-ruby.vercel.app";
      case 5:
        return "https://calculator-app-eight-virid.vercel.app/";
      case 6:
        return "https://store-app-uriel.netlify.app";
      case 7:
        return "https://main--rezume-app.netlify.app";
      case 8:
        return "https://main--togetherapp-uriel.netlify.app";
      case 9:
        return "https://renovations-app.vercel.app";
      case 10:
        return "https://github.com/urielbang/finance-app-RN";
    }
  };
  const ifReactNativeImage = project.name.includes("ios");
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-10, 10], [-10, 10]);
  const rotateY = useTransform(x, [-10, 10], [-10, 10]);
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left - rect.width / 2) / 10;
    const mouseY = -(e.clientY - rect.top - rect.height / 2) / 10;
    x.set(mouseX);
    y.set(mouseY);
  };
  const url = urlApp(index);
  const aosAnimation = index % 2 == 0 ? "fade-up-right" : "fade-up-left";
  return (
    <motion.div
      data-aos={aosAnimation}
      ref={ref}
      style={{
        transformStyle: "preserve-3d",
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 500,
        zIndex: 50,
        backgroundColor: "#01082488",
        padding: "20px",
        borderRadius: "20px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="item-work"
    >
      <a
        href={url}
        target="_blank"
        className="cardProject"
        data-aos={aosAnimation}
      >
        <div className={ifReactNativeImage ? "reactNativeImage" : "images"}>
          {project.image}
        </div>
        <div className="content">
          <h3>{project.name}</h3>
          <div className="des">{project.description}</div>
          <div className="mission">
            <div>
              <CiCircleQuestion data-aos={aosAnimation} />
            </div>
            <h4>Mission</h4>
            <div className="de">{project.mission}</div>
          </div>
          <div className="mission">
            <div>
              <FaEarthAmericas data-aos={aosAnimation} />
            </div>
            <h4>Languages</h4>
            <div className="de">{project.language.join(", ")}</div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
