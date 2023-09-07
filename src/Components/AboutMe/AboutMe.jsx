import React from "react";
import style from "./AboutMe.module.css";
import Coding from "./Coding";
import Header from "./Header";

function AboutMe() {
  return (
    <div id="about" className={style.main_container}>
      {/* <Header /> */}
      <div className={style.header}>
        About <span style={{ color: "#dc143c" }}>me</span>
      </div>
      <div className={style.aboutme}>
        <p>Hi, I’m Raj. Nice to meet you.</p>
        <p>
          Passionate full-stack web developer with experience in building fully
          functional & responsive web applications. Efficient in both front-end
          skills and back-end skills. Proficient in data structures and
          algorithms with problem solving skills. Looking to further enhance
          skills as a future full-stack web developer.
        </p>
        <Coding />
      </div>
    </div>
  );
}

export default AboutMe;
