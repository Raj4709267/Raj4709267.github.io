import GitHubCalendar from "react-github-calendar";
import style from "./Calendar.module.css";
import React from "react";

function Calendar() {
  return (
    <div
      style={{
        padding: "20px",
        margin: "30px 0 0 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={style.gitCalender}
    >
      <p
        style={{
          margin: "30px 0 50px 0",
        }}
      >
        Git<span style={{ color: "#ffa31a" }}>Hub</span> Calendar
      </p>
      <div className={style.calender}>
        <GitHubCalendar username="Raj4709267" />
      </div>
      <div className={style.stats}>
        <a href="https://github.com/Raj4709267">
          <img
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com?user=Raj4709267&theme=dark"
            width="100%"
            alt="stats"
          />
        </a>

        <a href="https://github.com/Raj4709267">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=Raj4709267&theme=dark&count_private=true&show_icons=true
          "
          alt="stats"
          />
        </a>
        <a href="https://github.com/Raj4709267">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Raj4709267&theme=dark"
            alt="stats"
          />
        </a>
      </div>
    </div>
  );
}
export default Calendar;
