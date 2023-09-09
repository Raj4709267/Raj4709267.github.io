import React from "react";
import style from "./Experience.module.css";

const Experience = () => {
  return (
    <div id="experience" className={style.experience}>
      <h1>
        <span style={{ color: "white" }}>Professional</span> Experience
      </h1>
      <div className={style.experience_list}>
        <h1>{"Full stack web developer (Intern) - Zimyo HR Software"}</h1>
        <p>6th March 2023 - 1st June 2023</p>
        <ul>
          <li>Contributed to HRMS product and client management web app.</li>
          <li>Enhanced existing features and developed new ones.</li>
          <li>
            Focused on frontend for Leave Rules, IMEI Restrictions, Holidays,
            and Leave Version History.
          </li>
          <li>
            Participated in code reviews, debugging, bug fixes, and testing.
          </li>
          <li>Adapted to new technologies and frameworks for project needs.</li>
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
