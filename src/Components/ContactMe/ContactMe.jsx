import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import React from "react";
import style from "./ContactMe.module.css";
import { Box, Input, Textarea, useToast } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

AOS.init();

function ContactMe() {
  const toast = useToast();

  function handelSubmit(e) {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwTf2sOLyNIKVl23oMbWem3tuR9g-5koOCmExzEEdXIVRr2u2xmvQ-gaxMIqh9zkLay_Q/exec";
    const form = document.forms["submit-to-google-sheet"];
    return fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => form.reset())
      .catch((error) => console.error("Error!", error.message));
  }

  return (
    <div id="contactMe" className={style.contactMe}>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <div>
          <h1>Contact Me</h1>
        </div>
        <div>
          <EmailIcon />
          <span> rk2519962@gmail.com</span>
        </div>
        <div>
          <PhoneIcon />
          <span>+91 6372185012</span>
        </div>
        <div className={style.social}>
          <a target="_blank" href="https://github.com/Raj4709267">
            <i style={{ fontSize: "30px", color: "white" }}>
              <BsGithub />
            </i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/rajkumarmahto/">
            <i style={{ fontSize: "30px", color: "white" }}>
              <BsLinkedin />
            </i>
          </a>
          <a target="_blank" href="https://www.instagram.com/__ra_aj__/">
            <i style={{ fontSize: "30px", color: "white" }}>
            <BsInstagram />
            </i>
          </a>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1000"
      >
        <form name="submit-to-google-sheet" onSubmit={(e) => handelSubmit(e)}>
          <Input type="text" placeholder="Enter Name" name="Name" />
          <Input type="text" placeholder="Enter Email" name="Email" />
          <Textarea
            Name="Message"
            placeholder="Enter Message"
            id=""
            cols="30"
            rows="10"
          ></Textarea>
          <button
            type="submit"
            onClick={() =>
              toast({
                position: "bottom-left",
                render: () => (
                  <Box color="#ffa31a" p={3} bg="white">
                    Message sent
                  </Box>
                ),
              })
            }
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
