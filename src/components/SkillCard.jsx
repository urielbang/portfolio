import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function SkillCard({ skill, index }) {
  const calculateRotation = (e, ref) => {
    const x = (e.nativeEvent.offsetX - ref.current.offsetWidth / 2) / 10;
    const y = -(e.nativeEvent.offsetY - ref.current.offsetHeight / 2) / 10;
    return { x, y };
  };
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const tiltEffect = (e, ref) => {
    const { x: mouseX, y: mouseY } = calculateRotation(e, ref);
    x.set(mouseX);
    y.set(mouseY);
  };
  const ref = useRef();
  return (
    <div data-aos="fade-up" className="skillItem">
      <motion.div
        key={index}
        className="item"
        ref={ref}
        data-aos="fade-up"
        style={{
          transformStyle: "preserve-3d",
          rotateX: useTransform(y, [-10, 10], [-10, 10]),
          rotateY: useTransform(x, [-10, 10], [-10, 10]),
          transformPerspective: 500,
        }}
        onMouseMove={(e) => tiltEffect(e, ref)}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
      >
        {skill.icon}
        <h3>{skill.name}</h3>
        <div className="des">{skill.description}</div>
      </motion.div>
    </div>
  );
}
