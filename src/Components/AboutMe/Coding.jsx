import React from "react";
import style from "./AboutMe.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { RiUserVoiceLine } from "react-icons/ri";
import { PiMathOperationsLight } from "react-icons/pi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GoProject } from "react-icons/go";

AOS.init();

const data = [
  { icon: <BsCodeSlash />, text: "1200+ Hours Practical Coding" },
  { icon: <BsClipboardData />, text: "300+ Hours DSA" },
  { icon: <RiUserVoiceLine />, text: "100+ Hours Soft Skill Development" },
  { icon: <PiMathOperationsLight />, text: "100+ Hours Math & Logic" },
  { icon: <AiOutlineFundProjectionScreen />, text: "5+  Projects" },
  { icon: <GoProject />, text: "20+  Mini Projects" },
];
function Coding() {
  return (
    <div
      data-aos="zoom-out-right"
      data-aos-duration="1000"
      className={style.learning}
    >
      <h1>Statistics</h1>
      <div
        data-aos="zoom-out-left"
        data-aos-duration="1000"
        className={style.statistics}
      >
        <div>
          {data.map((item, i) => {
            if (i < 3)
              return (
                <div className={style.text} key={i}>
                  {item.icon}
                  <p>{item.text}</p>
                </div>
              );
          })}
        </div>
        <div>
          {data.map((item, i) => {
            if (i >= 3)
              return (
                <div className={style.text} key={i}>
                  {item.icon}
                  <p>{item.text}</p>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default Coding;
