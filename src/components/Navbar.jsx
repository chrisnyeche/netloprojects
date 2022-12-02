import { Box, Flex, Text, IconButton,  Stack, Collapse, Popover, PopoverTrigger, useColorModeValue, useDisclosure, Image } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';

// Images
import Logo from "../assets/images/logo.png";
import { CgMenuRight } from "react-icons/cg";

// Colors
const primaryColor = "#fbcc64";
const secondaryColor = "#001d3a";

// Nav Items
const NAV_ITEMS = [
  {
    label: "Impressum",
    path: "/impressum",
  },
  {
    label: "About Us",
    path: "/about",
  },
];

// Complete Navbar
export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Box backgroundColor={"#001d3a"} fontFamily={"Aeonik Medium"}>
        <Flex minH={"60px"} alignItems={"center"} maxW={"97%"} mx="auto" justifyContent={"center"} py={{lg: 4}}>
          {/* Logo */}
          <Flex flex={{ base: 1 }} ms="auto" alignItems={"center"}>
            
            {/* Logo Image */}
            <Link to={'/'}>
              <Image src={Logo} alt="logo" w={20} cursor={'pointer'}/>
            </Link>

            {/* Logo Text */}
            <Link to={'/'}>
            <Text color={"white"} fontSize={"2xl"} fontWeight={"700"} display={{ base: "none", md: "flex" }} fontFamily={"Aeonik Medium"} cursor={'pointer'}>
              DWH Warenhandel UG
            </Text>
            </Link>
          </Flex>

          {/* Nav Links */}
          <Stack justify={"flex-end"} direction={"row"} spacing={4} pe={{ base: 3, md: 0 }}>
            <Flex flex={{ base: "end", md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }} ps="3">
              {/* Hamburger */}
              <IconButton color={primaryColor} _focus={{ bg: "transparent" }} onClick={onToggle} icon={isOpen ? <CloseIcon w={5} h={5} /> : <CgMenuRight fontSize={"34px"} />} variant={"ghost"} aria-label={"Toggle Navigation"} />
            </Flex>

            {/* Desktop Navbar */}
            <Flex display={{ base: "none", md: "flex" }} ml={1} alignItems={"center"}>
              <DesktopNav />
            </Flex>
          </Stack>
        </Flex>
      </Box>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </>
  );
}

// Desktop
const DesktopNav = () => {
  const linkColor = "white";

  return (
    <Flex direction={"row"} spacing={5} fontFamily={"Aeonik Medium"} alignItems="center">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link to={navItem.path}>
                <Text
                  as={"a"}
                  p={2}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: primaryColor,
                  }}
                >
                  {navItem.label}
                </Text>
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
      <Text
        as={"a"}
        p={2}
        fontSize={"sm"}
        fontWeight={500}
        color={linkColor}
        href={"#contact"}
        _hover={{
          textDecoration: "none",
          color: primaryColor,
        }}
      >
        Contact
      </Text>
    </Flex>
  );
};

// Mobile
const MobileNav = () => {
  return (
    <Stack w="full" bg={primaryColor} p={4} display={{ md: "none" }} position="absolute" zIndex={2}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Flex>
      <Text 
      as={'a'}    
        href="#contact"
        p={2}
        borderRadius={"7px"}
        bg={primaryColor}
        color={useColorModeValue("gray.600", "gray.200")}
        w="full"
        textAlign={'center'}
        border="2px solid black"
        _hover={{
          textDecoration: "none",
          color: primaryColor,
          bg: secondaryColor,
        }}
      >
        Contact
      </Text>
      </Flex>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, path }) => {
  return (
    <Stack display={"flex"} spacing={1}>
      <Link to={path}>
        <Flex
          p={2}
          as={"a"}
          borderRadius={"7px"}
          bg={primaryColor}
          w="100%"
          ms="auto"
          border="2px solid black"
          direction={"column"}
          path={path ?? "#"}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
            color: primaryColor,
            bg: secondaryColor,
          }}
        >
          <Text fontWeight={400} textAlign={"center"} color={useColorModeValue("gray.600", "gray.200")}>
            {label}
          </Text>
        </Flex>
      </Link>
    </Stack>
  );
};
