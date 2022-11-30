import { useState } from "react";
import { Box, Stack, Heading, Text } from "@chakra-ui/react";

// Icons

// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Components
import NavBar from "../components/Navbar";
import Contact from "./../components/Contact";
import Footer from "./../components/Footer";
import { Flex } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";

// Settings for the slider
const settings = {
  // dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 1500,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const secondaryColor = "#001d3a";

function CaptionCarousel() {
  const [slider, setSlider] = useState(<Slider />);

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "You request a product",
      image: "https://images.unsplash.com/photo-1488509082528-cefbba5ad692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "We find your product for you",
      image: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "We ship the product to you",
      image: "https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
      <Box position={"relative"} height={"60vh"} width={"full"} overflow={"hidden"}>
        {/* CSS files for react-slick */}
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <Flex key={index} height={"6xl"} position="relative" backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${card.image})`}>
              {/* This is the block you need to change, to customize the caption */}
              <Box height="600px" position="relative">
                <Stack spacing={6} w={"full"} position="absolute" top={{ base: "36%", lg: "40%" }} left={"0%"} textAlign="center" transform="translate(0, -50%)">
                  <Heading fontFamily={"Aeonik Bold"} fontSize={{ base: "5xl", md: "5xl", lg: "7xl" }} color={"white"}>
                    {card.title}
                  </Heading>
                </Stack>
              </Box>
            </Flex>
          ))}
        </Slider>
      </Box>
    </>
  );
}

function Profile() {
  return (
    <Box my={5}>
      <Flex alignItems={'center'}>
        <Box w={{ base: "100%", lg: "50%" }} px={{ base: 3, md: 6 }} textAlign={"justify"}>
          <Heading color={secondaryColor} mt={{ base: 9, md: 4 }} fontFamily="Aeonik Bold" fontSize={{ base: "32px", md: "6xl" }} lineHeight={"110%"}>
            DWH Warenhandel UG
          </Heading>
          {/* Hero Text Details */}
          <Text color={"gray.500"} maxW={{ base: "97%", lg: "90%" }} my={6}>
            DWH Warenhandel is a trading company with multiple experiences in many types of commercial goods, the most important of them are used and new Solar panels, all kinds of household electrical appliances, Medical tools, Cosmetics, Cars and heavy vehicles, Auto parts and many other items. And also we can provide goods requested by merchants (buyers), and our focus and principal market are merchants residing in the countries of the Middle East in general and Arab countries, however, we also supply to other regions worldwide. <br />
            We find the best offers for the previously mentioned goods and commodities through our strong experience, relationship, and our constant communication directly with the suppliers and manufacturers of these items. Our company also has contact with shipping companies. For example, if an agreement is reached between us and the merchant, we discuss whether we receive the shipping process in coordination with international shipping companies, and appropriate and satisfactory prices can also be provided.
          </Text>

          <Heading color={secondaryColor} mt={{ base: 9, md: 8 }} fontFamily="Aeonik Bold" fontSize={{ base: "32px", md: "3xl" }}>
            OUR VISION
          </Heading>
          <Text color={"gray.500"} maxW={{ base: "97%", lg: "90%" }} mb={8}>
          Establishing and nurturing lifetime relationships with our customers.
          </Text>
          <Heading color={secondaryColor} mt={{ base: 9, md: 4 }} fontFamily="Aeonik Bold" fontSize={{ base: "32px", md: "3xl" }}>
            OUR MISSION
          </Heading>
          <Text color={"gray.500"} maxW={{ base: "97%", lg: "90%" }}>
          To earn our Customer’s loyalty by delivering sales and service experiences with high quality, excellent value, integrity and enthusiasm and striving to go the extra step that transforms Customer Satisfaction into Customer Delight.
          </Text>
        </Box>

        {/* Image */}
        <Flex w={{ base: "100%", lg: "50%" }} my={{ base: 7, md: 0 }}>
          <Box h={"70%"} borderRadius={"12px"} p={5}>
            <Player autoplay loop src={"https://assets9.lottiefiles.com/packages/lf20_0k6svecn.json"} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

const About = () => {
  return (
    <Box>
      <NavBar />
      <CaptionCarousel />
      <Profile />
      <Contact />
      <Footer />
    </Box>
  );
};

export default About;
