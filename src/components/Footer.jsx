import { Box, Container, SimpleGrid, Stack, Text, Flex, useColorModeValue, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const ListHeader = ({ children }) => {
  return (
    <Text fontFamily={"Aeonik Bold"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

// Colors
const primaryColor = "#fbcc64";
const secondaryColor = "#001d3a";

export default function Footer() {
  const newDate = () =>{
      //return a new Date() -- returns the current calendar year.
      return new Date().getFullYear();
  }
  return (
    <Box bg={secondaryColor} color={primaryColor}>
      <Container as={Stack} maxW={"97%"} py={10} mx="auto">
        <SimpleGrid columns={{ base: 2, sm: 2, md: 3, lg: 5 }} spacing={8} ms={{ lg: 9 }}>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link to={'/impressum'}>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}}>Impressum</Text>
            </Link>
            <Link to={'/about'}>
            <Text as="a"  href={"#"} _hover={{borderBottom: `1px solid ${primaryColor}`}}>About Us</Text>
            </Link>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}} href={"#contact"}>Contact Us</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}} href={"#"}>Privacy Policy</Text>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}} href={"#"}>Terms of Service</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Languages</ListHeader>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}} href={"#"}>German</Text>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}} href={"#"}>Arabic</Text>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}}  href={"#"}>English</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}} href={"https://www.facebook.com/people/Dwh-Warenhandel/100088262255625/"}>Facebook</Text>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}} href={"https://www.twitter.com/dwhwarenhandel"}>Twitter</Text>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}} href={"https://www.instagram.com/dwhwarenhandel"}>Instagram</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Products</ListHeader>
            <Text>Solar Panels </Text>
            <Text>Electronic Appliances</Text>
            <Text>Shoes & Safety boots</Text>
            <Text>Medical Equipments </Text>
            <Text>Auto parts</Text>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          {/* Logo */}
            {/* Logo Image */}
            <Link to={'/'}>
              <Image src={Logo} alt="logo" w={20} cursor={'pointer'}/>
            </Link>
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © {newDate()} DWH Warenhandel UG. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
