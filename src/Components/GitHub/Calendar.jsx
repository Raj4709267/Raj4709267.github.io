import GitHubCalendar from "react-github-calendar";

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
    >
      <p
        style={{
          fontSize: "55px",
          margin: "30px 0 50px 0",
        }}
      >
        Git<span style={{ color: "#ffa31a" }}>Hub</span> Calendar
      </p>
      <GitHubCalendar username="Raj4709267" />
    </div>
    
  );
}

export default Calendar;
