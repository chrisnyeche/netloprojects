import { Box, Flex, Heading, Text, Button} from "@chakra-ui/react";

import { Player } from "@lottiefiles/react-lottie-player";


// Colors
const primaryColor = "#fbcc64";
const secondaryColor = "#001d3a";

export default function Hero() {

  return (
    <Flex flexDirection={{ base: "column", lg: "row" }} justifyContent="center" alignItems={"center"} gap={2} h={{ lg: "90vh" }}>
      {/* Hero Text */}
      <Box w={{ base: "100%", lg: "50%" }} px={{ base: 3, md: 6 }} textAlign={"justify"}>
        <Heading color={secondaryColor} mt={{base: 9, md: 4}} fontFamily="Aeonik Bold" fontSize={{ base: "32px", md: "6xl" }} lineHeight={"110%"}>
          Commercial Trading
          <Text color={"#fbcc64"}>made easy</Text>
        </Heading>
        {/* Hero Text Details */}
        <Text color={"gray.500"} maxW={{ base: "97%", lg: "90%" }} my={6}>
          DWH Warenhandel is a trading company with multiple experiences in many types of commercial goods, the most important of them are used and new Solar panels, all kinds of household electrical appliances, Medical tools, Cosmetics, Cars and heavy vehicles, Auto parts and many other items. And also we can provide goods requested by merchants (buyers), and our focus and principal market are merchants residing in the countries of the Middle East in general and Arab countries, however, we also supply to other regions worldwide.
        </Text>

          {/* Learn More Button */}
          <Button
            fontSize={"md"}
            fontWeight={600}
            color={secondaryColor}
            px={{base: 6, lg: 7}}
            py={{base: 6, lg: 7}}
            borderRadius={"5px"}
            width='200px'
            bg={primaryColor}
            href={"#"}
            _hover={{
              bg: secondaryColor ,
              color: primaryColor ,
            }}
          >
            Learn More
          </Button>
      </Box>

      {/* Hero Image */}
      <Flex w={{ base: "100%", lg: "50%" }} my={{base: 7, md: 0}}>
        <Player autoplay loop src={"https://assets1.lottiefiles.com/packages/lf20_uowplbpq.json"} />
      </Flex>
    </Flex>
  );
}