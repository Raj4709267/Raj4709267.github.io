import React from "react";
import style from "./Experience.module.css";

const Experience = () => {
  return (
    <div id="experience" className={style.experience}>
      <p>Experience</p>
      <div className={style.experience_list}>
        <h1>{"Full stack web developer (Intern) - Zimyo HR Software"}</h1>
        <p>6th March 2023 - 1st June 2023</p>
        <ul>
          <li>
            Contributed to the development of new features and the enhancement
            of existing functionality on the HRMS product and a client managing
            web application.
          </li>

          <li>
            Worked on frontend functionalities for modules such as Leave Rules,
            IMEI Restrictions, Holidays and Leave Version History.
          </li>
          <li>
            Participated in code reviews, debugging, bug fixing and testing to
            ensure high-quality deliverables.
          </li>
          <li>
            Quickly adapted to new technologies and frameworks to meet project
            requirements.
          </li>
        </ul>

        <h2>Technologies Used:</h2>
        <ul>
          <li>Front-end: HTML, CSS, JavaScript, React, Redux, Material UI</li>
          <li>Back-end: Node.js, Express.js,</li>
          <li>Tools: Git, Jira, Visual Studio Code, Postman</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
