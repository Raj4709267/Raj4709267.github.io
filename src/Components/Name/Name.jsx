import React from "react";
import style from "./Name.module.css";
import img from "../imges/avatar.jpg";
import { DownloadIcon } from "@chakra-ui/icons";
import Typewriter from "typewriter-effect";
import resume from "../imges/RajKumar-Mahto-Resume.pdf";
// import { Link } from "react-router-dom";

function Name() {
  return (
    <div className={style.name} id="name">
      <p>
        Hi 👋 I am <span>Raj Kumar Mahto</span>{" "}
      </p>
      <p>
        <Typewriter
          options={{
            strings: ["WEB DEVELOPER", "PROBLEM SOLVER", "DEBUGGER"],
            autoStart: true,
            loop: true,
          }}
        />
      </p>

      <div className={style.avatar}>
        <img src={img} alt="avatar" />
      </div>
      <div className={style.resume}>
        {/* <Link></Link> */}
        <a href={resume} download>
          <button className={style.resumeButton}>
            <DownloadIcon bg={"transparent"} />
            RESUME
          </button>
        </a>
      </div>
    </div>
  );
}

export default Name;
