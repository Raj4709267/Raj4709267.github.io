import React from "react";
import style from "./AboutMe.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Coding() {
  return (
    <div
      data-aos="zoom-out-right"
      data-aos-duration="1000"
      className={style.learning}
    >
      <h1>Statistics</h1>
      <div data-aos="zoom-out-left" data-aos-duration="1000">
        <div>
          <div className={style.text}>
            <p>
              <span>1200+</span>
              Hours
            </p>
            <p>Practical Coding</p>
          </div>
        </div>
        <div>
          <div className={style.text}>
            <p>
              <span>300+ </span>
              Hours
            </p>
            <p>DSA</p>
          </div>
        </div>
        <div>
          <div className={style.text}>
            <p>
              <span>100+ </span>
              hours
            </p>
            <p>Soft Skill Development</p>
          </div>
        </div>
        <div>
          <div className={style.text}>
            <p>
              <span>100+ </span>
              Hours
            </p>
            <p>Math & Logic</p>
          </div>
        </div>
        <div>
          <div className={style.text}>
            <p>
              <span>50+ </span>
            </p>
            <p>Mini Projects</p>
          </div>
        </div>
        <div>
          <div className={style.text}>
            <p>
              <span>5+</span>
            </p>
            <p>Projects </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coding;
