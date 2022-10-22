import React from "react";
import style from "./AboutMe.module.css";
import Coding from "./Coding";
import Header from "./Header";

function AboutMe() {
  return (
    <>
      <Header />
      <div className={style.aboutme}>
        <p>Hi, I’m Raj. Nice to meet you.</p>
        <p>
          I am a Full Stack developer passionate about building digital products
          that improve everyday experiences for people. I love working on
          exciting projects that test what I've learned while being exposed to
          the power and potential of the ever-evolving technologies around us. I
          am always on the lookout for better, and more importantly, ethical and
          accessible ways to solve the common problems that we face on a day to
          day basis.
        </p>
        <Coding />
      </div>
    </>
  );
}

export default AboutMe;
