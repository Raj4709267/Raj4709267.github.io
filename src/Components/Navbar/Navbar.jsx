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
          <span style={{ color: "#dc143c" }}>Raj</span>
          Kumar
        </p>
      </div>
      <div className={style.menus}>
        <li
          style={{
            color: activeMenu === "name" ? "#dc143c" : "white",
            borderBottom: activeMenu === "name" ? "3px solid white" : "",
          }}
        >
          <Link
            to="name"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onSetActive={(e) => {
              setActiveMenu(e);
            }}
          >
            Home
          </Link>
        </li>
        <li
          style={{
            color: activeMenu === "about" ? "#dc143c" : "white",
            borderBottom: activeMenu === "about" ? "3px solid white" : "",
          }}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onSetActive={(e) => {
              setActiveMenu(e);
            }}
          >
            About
          </Link>
        </li>
        <li
          style={{
            color: activeMenu === "experience" ? "#dc143c" : "white",
            borderBottom: activeMenu === "experience" ? "3px solid white" : "",
          }}
        >
          <Link
            to="experience"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onSetActive={(e) => {
              setActiveMenu(e);
            }}
          >
            Experience
          </Link>
        </li>
        <li
          style={{
            color: activeMenu === "skill" ? "#dc143c" : "white",
            borderBottom: activeMenu === "skill" ? "3px solid white" : "",
          }}
        >
          <Link
            to="skill"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onSetActive={(e) => {
              setActiveMenu(e);
            }}
            activeClass="active-link"
          >
            Skill
          </Link>
        </li>
        <li
          style={{
            color: activeMenu === "project" ? "#dc143c" : "white",
            borderBottom: activeMenu === "project" ? "3px solid white" : "",
          }}
        >
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
            onSetActive={(e) => {
              setActiveMenu(e);
            }}
          >
            Projects
          </Link>
        </li>
        <li
          style={{
            color: activeMenu === "contactMe" ? "#dc143c" : "white",
            borderBottom: activeMenu === "contactMe" ? "3px solid white" : "",
          }}
        >
          <Link
            to="contactMe"
            spy={true}
            smooth={true}
            offset={0}
            duration={800}
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
            color={"#dc143c"}
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
