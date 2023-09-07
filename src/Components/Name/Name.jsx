import React from "react";
import style from "./Name.module.css";
import img from "../imges/avatar.jpg";
import { DownloadIcon, ViewIcon } from "@chakra-ui/icons";
import Typewriter from "typewriter-effect";
import resume from "../imges/Raj-Kumar-Mahto-Resume.pdf";
// import { Link } from "react-router-dom";

function Name() {
  return (
    <div className={style.name} id="name">
      <div>
        <div>
          <p>Hi 👋 I am</p>
          <p>RAJ KUMAR MAHTO</p>
          <p>
            <Typewriter
              options={{
                strings: [
                  "Full Stack Web Developer.",
                  "Frontend Developer.",
                  "MERN Stack Developer.",
                  "Problem Solver.",
                  "Debugger.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>

          <div className={style.buttons}>
            <div className={style.resume}>
              {/* <Link></Link> */}
              <a href={resume} download="Raj-Kumar-Mahto-Resume">
                <button className={style.resumeButton}>
                  {/* <DownloadIcon bg={"transparent"} /> */}
                  Download Resume
                </button>
              </a>
            </div>

            <div className={style.resume}>
              {/* <Link></Link> */}
              <a
                href={
                  "https://drive.google.com/file/d/1hXNAxtKmaOYt-Enr24TqusULdqKmVi0b/view"
                }
                target="_blank"
              >
                <button className={style.resumeButton}>
                  {/* <ViewIcon bg={"transparent"} /> */}
                  View Resume
                </button>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className={style.avatar}>
            <img src={img} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Name;
