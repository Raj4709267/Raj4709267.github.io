import {
  Box,
  HStack,
  Img,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import overstock1 from "../imges/overstock1.png";
import tie1 from "../imges/tie1.png";
import monster1 from "../imges/monster1.png";
import smatbot1 from "../imges/smatbot1.png";
import { LinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import style from "./Project.module.css";
import chakra from "../imges/chakra.png";
AOS.init();

function ProjectPage() {
  return (
    <Stack id="project" p={[2, 10]}>
      <SimpleGrid columns={[1, 1, 2, 2]} justifyContent={"space-between"}>
        <VStack
          claseeName="projectContainer"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          p={[2, 5]}
          spacing={2}
          borderRadius="25px"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        >
          <Text align="left" fontSize="2xl" fontWeight="semibold">
            Overstock.com Clone
          </Text>
          <Box className="image-container1">
            <Img src={overstock1} alt="img" />
          </Box>
          <Text textAlign={"center"} width="80%" className={style.discription}>
            Overstock.com Inc. is an online retailer and technology company. The
            Company is an e-commerce retailer offering customers a range of
            brands for the home at low prices.
          </Text>
          <HStack>
            <div className={style.techStack}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              />
              <img
                src="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
                alt="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
              />
              <img
                src="https://usefulangle.com/img/thumb/javascript.png"
                alt="https://usefulangle.com/img/thumb/javascript.png"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              />
              <img src={chakra} alt={chakra} />
            </div>
          </HStack>
          <HStack>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/Raj4709267/skinny-rat-7681"
            >
              <button className={style.button}>
                <FaGithub bg={"transparent"} />
                Github
              </button>
            </a>

            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://over-stock.vercel.app/"
            >
              <button className={style.button}>
                <LinkIcon bg={"transparent"} />
                Live
              </button>
            </a>
          </HStack>
        </VStack>

        <VStack
          claseeName="projectContainer"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          spacing={2}
          p={[2, 5]}
          borderRadius="25px"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        >
          <Text fontSize="2xl" fontWeight="semibold">
            Monsterindia.com Clone
          </Text>
          <Box className="image-container2">
            <Img src={monster1} alt="img" />
          </Box>
          <Text textAlign={"center"} width="80%" className={style.discription}>
            Monster is a global online employment solution for people seeking
            jobs and the employers who need great people.
          </Text>
          <HStack>
            <div className={style.techStack}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              />
              <img
                src="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
                alt="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
              />
              <img
                src="https://usefulangle.com/img/thumb/javascript.png"
                alt="https://usefulangle.com/img/thumb/javascript.png"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              />
              <img src={chakra} alt={chakra} />
            </div>
          </HStack>
          <HStack>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/pankajsajwan12/skinny-pot-4052"
            >
              <button className={style.button}>
                <FaGithub bg={"transparent"} />
                Github
              </button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://monster-bay.vercel.app/"
            >
              {" "}
              <button className={style.button}>
                <LinkIcon bg={"transparent"} />
                Live
              </button>
            </a>
          </HStack>{" "}
        </VStack>

        <VStack
          claseeName="projectContainer"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          spacing={2}
          p={[2, 5]}
          borderRadius="25px"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        >
          <Text fontSize="2xl" fontWeight="semibold">
            SmatBot.com Clone
          </Text>
          <Box className="image-container3">
            <Img src={smatbot1} alt="img" />
          </Box>
          <Text textAlign={"center"} width="80%" className={style.discription}>
            SmatBot is an affordable AI driven omnichannel ChatBot for all the
            business needs like lead generation, customer support, booking
            appointments, surveys, feedback and more.
          </Text>
          <HStack>
            <div className={style.techStack}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              />
              <img
                src="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
                alt="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
              />
              <img
                src="https://usefulangle.com/img/thumb/javascript.png"
                alt="https://usefulangle.com/img/thumb/javascript.png"
              />
            </div>
          </HStack>
          <HStack>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/Raj4709267/loose-governor-5352"
            >
              <button className={style.button}>
                <FaGithub bg={"transparent"} />
                Github
              </button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://cerulean-brigadeiros-96b16b.netlify.app/"
            >
              {" "}
              <button className={style.button}>
                <LinkIcon bg={"transparent"} />
                Live
              </button>
            </a>
          </HStack>{" "}
        </VStack>

        <VStack
          claseeName="projectContainer"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
          spacing={2}
          p={[2, 5]}
          borderRadius="25px"
          boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        >
          <Text fontSize="2xl" fontWeight="semibold">
            The Indian Express Clone
          </Text>
          <Box className="image-container4">
            <Img src={tie1} alt="img" />
          </Box>
          <Text textAlign={"center"} width="80%" className={style.discription}>
            Indian Express Limited is an Indian news media publishing company.
            It publishes several widely circulated dailies, including The Indian
            Express and The Financial Express in English, the Loksatta in
            Marathi and the Jansatta in Hindi.
          </Text>
          <HStack>
            <div className={style.techStack}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                alt="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
              />
              <img
                src="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
                alt="https://portfolio-mrsagar105.vercel.app/images/csscolor.png"
              />
              <img
                src="https://usefulangle.com/img/thumb/javascript.png"
                alt="https://usefulangle.com/img/thumb/javascript.png"
              />
            </div>
          </HStack>
          <HStack>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://github.com/Raj4709267/Web-19-IndianExpress"
            >
              <button className={style.button}>
                <FaGithub bg={"transparent"} />
                Github
              </button>
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://lucent-brioche-d9f023.netlify.app/"
            >
              {" "}
              <button className={style.button}>
                <LinkIcon bg={"transparent"} />
                Live
              </button>
            </a>
          </HStack>{" "}
        </VStack>
      </SimpleGrid>
    </Stack>
  );
}

export default ProjectPage;
