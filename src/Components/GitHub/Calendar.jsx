import GitHubCalendar from "react-github-calendar";
import style from "./Calendar.module.css";
import React from "react";

function Calendar() {
  return (
    <div
      style={{
        padding: "20px",
        margin: "30px 0 50px 0",
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
      <div>
        <GitHubCalendar username="Raj4709267" />
      </div>
    </div>
  );
}

export default Calendar;
