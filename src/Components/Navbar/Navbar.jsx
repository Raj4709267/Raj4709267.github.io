import React, { useState } from "react";
import style from "./Navbar.module.css";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import Hamburger from "./Hamburger";
import resume from "../imges/RajKumar-Mahto-Resume.pdf"
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function setOpen(value) {
    setIsOpen(value);
  }
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        {/* <img src={logo} alt={logo} /> */}
        <p >
          {" "}
          <span
            style={{ color: "#ffa31a"}}
          >
            Raj
          </span>
           Kumar
        </p>
      </div>
      <div className={style.menus}>
        <li>
          <Link to="name" spy={true} smooth={true} offset={0} duration={700}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} offset={0} duration={700}>
            About
          </Link>
        </li>
        <li>
          <Link to="skill" spy={true} smooth={true} offset={0} duration={700}>
            Skill
          </Link>
        </li>
        <li>
          <Link to="project" spy={true} smooth={true} offset={0} duration={700}>
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contactMe"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
          >
            Contact me
          </Link>
        </li>
        <li>
        <a href={resume} download>
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
