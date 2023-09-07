import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import React, { useRef, useState } from "react";
import style from "./ContactMe.module.css";
import { Box, Input, Textarea, useToast } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import emailjs from "@emailjs/browser";

AOS.init();

function ContactMe() {
  const toast = useToast();
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!name || !email || !message) {
      setIsLoading(false);
      return;
    }
    emailjs
      .sendForm(
        "service_lck8488",
        "template_ylqy78g",
        form.current,
        "L4vF6HNVORBqBwT-6"
      )
      .then(
        (result) => {
          setIsLoading(false);
          form.current = null;
          toast({
            position: "bottom-left",
            render: () => (
              <Box color="#dc143c" p={3} bg="white">
                Message sent
              </Box>
            ),
          });

          // Clear the form data
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

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
          <span>rajkumarmahto6372@gmail.com</span>
        </div>
        <div>
          <PhoneIcon />
          <span>+91 6372185012</span>
        </div>
        <div className={style.social}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Raj4709267"
          >
            <i style={{ fontSize: "30px", color: "white" }}>
              <BsGithub />
            </i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/rajkumarmahto/"
          >
            <i style={{ fontSize: "30px", color: "white" }}>
              <BsLinkedin />
            </i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/__ra_aj__/"
          >
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
        <form ref={form} onSubmit={sendEmail}>
          <Input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea
            placeholder="Message"
            Name="message"
            id=""
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            disabled={!name || !email || !message}
            onClick={(e) => sendEmail(e)}
          >
            {isLoading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
