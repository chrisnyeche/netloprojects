import {Flex} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";

// Components
import NavBar from "../components/Navbar";
import Contact from "./../components/Contact";
import Footer from "./../components/Footer";

const Impressum = () => {
  return (
    <>
      <NavBar />
      <Flex justifyContent={"center"} alignItems={"center"} h={{ base: "60vh", md: "100vh" }} mt={{ base: 8, md: 16 }}>
        <Player autoplay loop src={"https://assets9.lottiefiles.com/packages/lf20_0k6svecn.json"} />
      </Flex>
      <Contact />
      <Footer />
    </>
  );
};

export default Impressum;
