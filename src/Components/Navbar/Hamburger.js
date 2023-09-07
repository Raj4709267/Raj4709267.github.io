import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import style from "./Navbar.module.css";
// import {Link} from "rec"

export default function Hamburger({ isOpen, setOpen }) {
  const btnRef = React.useRef();

  function onClose() {
    setOpen(false);
  }

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={"#dc143c"} fontSize="20px" />

          <DrawerBody padding="40px" bg={"#1a202c"} color="#dc143c">
            <div className={style.hamburger}>
              <a href="#name">
                <div onClick={() => onClose()}>
                  <p> Home</p>
                </div>
              </a>
              <a href="#about">
                <div onClick={() => onClose()}>
                  <p> About</p>
                </div>
              </a>
              <a href="#experience">
                <div onClick={() => onClose()}>
                  <p>Experience</p>
                </div>
              </a>
              <a href="#skill">
                <div onClick={() => onClose()}>
                  <p> Skills</p>
                </div>
              </a>
              <a href="#project">
                <div onClick={() => onClose()}>
                  <p> Projects</p>
                </div>
              </a>
              <a href="#contactMe">
                <div onClick={() => onClose()}>
                  <p> Contact Me</p>
                </div>
              </a>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
