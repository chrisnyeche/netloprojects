import { Image, Flex, Heading, Text, Stack, StackDivider, Icon, Box, useColorModeValue } from "@chakra-ui/react";

// Icons
import { IoPhonePortrait, IoPersonOutline } from "react-icons/io5";
import { HiOutlineTruck } from "react-icons/hi";
import { FaHandshake } from "react-icons/fa";


// Images
import Truck from "../assets/images/truck.png";

const Feature = ({ text, details, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex w={8} h={8} align={"center"} justify={"center"} rounded={"full"} bg={iconBg}>
        {icon}
      </Flex>
      <Text textTransform={'uppercase'} fontWeight={'extrabold  '}>{text}</Text>
    </Stack>
  );
};


export default function Features() {
  return (
    <>
      <Box py={12} maxW={"95%"} mx="auto" fontFamily={"Aeonik Medium"} mt={5}>
        <Flex justifyContent={'space-between'} alignItems={'center'} flexDirection={{base: 'column', lg: 'row'}} spacing={10} px={2}>
          <Stack spacing={4} w={{lg: '45%'}}>
            <Text textTransform={"uppercase"} color={"blue.400"} fontWeight={600} fontSize={"sm"} bg={useColorModeValue("blue.50", "blue.900")} p={2} alignSelf={"flex-start"} rounded={"md"}>
              Our Story
            </Text>
            <Heading fontFamily={"Aeonik Bold"} fontSize={{base: '24px', md: '5xl'}}>Request and We Deliver</Heading>
            <Stack spacing={3} divider={<StackDivider borderColor={useColorModeValue("gray.100", "gray.700")} />}>
              <Feature icon={<Icon as={IoPhonePortrait} color={"yellow.500"} w={5} h={5} />} iconBg={useColorModeValue("yellow.100", "yellow.900")} text={"You request a product: "} />
              <Text textAlign={'justify'}> Fill the request form on our website with all necessary information about your needs and make sure all information is valid such as email, phone number etc..</Text>
              <Feature icon={<Icon as={IoPersonOutline} color={"green.500"} w={5} h={5} />} iconBg={useColorModeValue("green.100", "green.900")} text={"We find your product for you:"} />
              <Text textAlign={'justify'}> We start our scouting and contact our partners to find you the best product that matches your request.</Text>
              <Feature icon={<Icon as={FaHandshake} color={"blue.500"} w={5} h={5} />} iconBg={useColorModeValue("blue.100", "blue.900")} text={"We seal a deal:"} />
              <Text textAlign={'justify'}>The merchant and the company reach an agreement/bargain.</Text>
              <Feature icon={<Icon as={HiOutlineTruck} color={"purple.500"} w={5} h={5} />} iconBg={useColorModeValue("purple.100", "purple.900")} text={"We ship the product to you:"}/>
              <Text textAlign={'justify'}> The merchant pays an upfront that’s up to 50 per cent, to secure their goods, and then the company ships their goods and services. When the merchant receives their goods and services in their respective location, they pay the remaining part of the money</Text>
            </Stack>
          </Stack>
          <Flex w={{lg: '50%'}} mt={'90px'} h={'100%'}>
            <Image alt={"feature image"} src={Truck} objectFit={"cover"} />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
