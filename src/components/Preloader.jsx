import { Flex} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState, useEffect } from 'react';
import Home from "../pages/Home";
import PreloaderAnimation from "../preloader_animation.json"

const Preloader = () => {
      // Loader state
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        setLoader(true)
    }, 5000);
    }, [loader])

  return (
    <>
    {!loader ?  <Flex h="100vh" justifyContent={"center"} alignItems={"center"} flexDirection={{ base: "column" }} position={"relative"}>
      <Player autoplay loop src={PreloaderAnimation} />
      <Text as={"h2"} color="#001d3a" fontFamily={"Aeonik Medium"} fontSize={{ base: "3xl", lg: "5xl" }}>
        Loading...
      </Text>
    </Flex> : <Home/>}
    </>

  );
};

export default Preloader;
