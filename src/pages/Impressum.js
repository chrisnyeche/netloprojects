import React from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";


// Components
import NavBar from "../components/Navbar";
import Contact from "./../components/Contact";
import Footer from "./../components/Footer";

const secondaryColor = "#001d3a";

const Impressum = () => {
  return (
    <>
      <NavBar />
    <Flex justifyContent={"center"} alignItems={"center"} h={{base: "60vh", md: "100vh"}} mt={{base: 8, md: 16}}>
      <Box borderRadius={"12px"}>
      <Heading textAlign={'center'} color={secondaryColor} mt={{ base: 9, md: 4 }} fontFamily="Aeonik Bold" fontSize={{ base: "32px", md: "6xl" }}>
            COMING SOON
          </Heading>
        <Player autoplay loop src={"https://assets9.lottiefiles.com/packages/lf20_0k6svecn.json"} />
      </Box>
    </Flex>
    <Contact />
      <Footer />
    </>
  );
};

export default Impressum;
