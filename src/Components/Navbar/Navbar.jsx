import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import Hamburger from "./Hamburger";
import resume from "../imges/Raj-Kumar-Mahto-Resume.pdf";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  useEffect(() => {
    console.log(activeMenu);
  }, [activeMenu]);
  function setOpen(value) {
    setIsOpen(value);
  }
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        {/* <img src={logo} alt={logo} /> */}
        <p>
          {" "}
          <span style={{ color: "#ffa31a" }}>Raj</span>
          Kumar
        </p>
      </div>
      <div className={style.menus}>
        <li style={{ color: activeMenu === "name" ? "#ffa31a" : "white" }}>
          <Link
            to="name"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onSetActive={(e) => {
              setActiveMenu(e);
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ color: activeMenu === "about" ? "#ffa31a" : "white" }}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onSetActive={(e) => {
              setActiveMenu(e);
            }}
          >
            About
          </Link>
        </li>
        <li
          style={{ color: activeMenu === "experience" ? "#ffa31a" : "white" }}
        >
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onSetActive={(e) => {
              setActiveMenu(e);
            }}
          >
            Experience
          </Link>
        </li>
        <li style={{ color: activeMenu === "skill" ? "#ffa31a" : "white" }}>
          <Link
            to="skill"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onSetActive={(e) => {
              setActiveMenu(e);
            }}
            activeClass="active-link"
          >
            Skill
          </Link>
        </li>
        <li style={{ color: activeMenu === "project" ? "#ffa31a" : "white" }}>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onSetActive={(e) => {
              setActiveMenu(e);
            }}
          >
            Projects
          </Link>
        </li>
        <li style={{ color: activeMenu === "contactMe" ? "#ffa31a" : "white" }}>
          <Link
            to="contactMe"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            onSetActive={(e) => {
              setActiveMenu(e);
            }}
            activeClass="active-link"
          >
            Contact me
          </Link>
        </li>
        <li>
          <a href={resume} download="Raj-Kumar-Mahto-Resume">
            <button className={style.resumeButton}>
              <DownloadIcon bg={"transparent"} />
              Resume
            </button>
          </a>
        </li>
      </div>
      <div>
        <div onClick={() => setIsOpen(true)}>
          <HamburgerIcon
            color={"#ffa31a"}
            boxSize="1.5em"
            // isOpen={isOpen}
            // setOpen={setOpen}
          />
        </div>
        <Hamburger isOpen={isOpen} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Navbar;
