import { Box, Container, SimpleGrid, Stack, Text, Flex, useColorModeValue, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { useTranslation } from 'react-i18next';
import {useEffect, useState} from 'react'

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
  const { t, i18n } = useTranslation();
  const [dir, setDir] = useState(`${i18n.resolvedLanguage === 'ar' ? 'rtl' : 'ltr'}`);
  
  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute('dir', dir)
  }, [dir])

  const handleChange = (e) => {
    let lng = e.target.href
    if (window.location.hash === lng) {
      return false
    } else {
      lng = lng.split('#')[1]
      if (lng === 'ar') {
        setDir('rtl')
      }else{
        setDir('ltr')
      }
      window.scrollTo(0,0)
      i18n.changeLanguage(lng)
    }
  }
  // const lngs = {
  //   en: {nativeName: 'English'},
  //   de: {nativeName: 'Deutch'}
  // }
  const newDate = () =>{
      //return a new Date() -- returns the current calendar year.
      return new Date().getFullYear();
  }
  return (
    <Box bg={secondaryColor} color={primaryColor}>
      <Container as={Stack} maxW={"97%"} py={10} mx="auto">
        <SimpleGrid columns={{ base: 2, sm: 2, md: 4, lg: 4 }} spacing={8} ms={{ lg: 9 }}>
          <Stack align={"flex-start"}>
            <ListHeader>{ t('company')}</ListHeader>
            <Link to={'/impressum'}>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}}>Impressum</Text>
            </Link>
            <Link to={'/about'}>
            <Text as="a"  href={"#"} _hover={{borderBottom: `1px solid ${primaryColor}`}}>{t('about')}</Text>
            </Link>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}} href={"#contact"}>{t('contact')}</Text>
          </Stack>
          {/* <Stack align={"flex-start"}>
            <ListHeader>{t('legal')}</ListHeader>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}} href={"#"}>Privacy Policy</Text>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}} href={"#"}>Terms of Service</Text>
          </Stack> */}
          <Stack align={"flex-start"}>
            <ListHeader>{ t('languages')}</ListHeader>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}} href={"#de"} onClick={handleChange}>German</Text>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}} href={"#ar"} onClick={handleChange}>Arabic</Text>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}}  href={"#en"} onClick={handleChange}>English</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>{ t('socials')}</ListHeader>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}} href={"https://www.facebook.com/people/Dwh-Warenhandel/100088262255625/"}>Facebook</Text>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}} href={"https://www.twitter.com/dwhwarenhandel"}>Twitter</Text>
            <Text as="a" _hover={{borderBottom: `1px solid ${primaryColor}`}} href={"https://www.instagram.com/dwhwarenhandel"}>Instagram</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>{ t('product')}</ListHeader>
            <Text>{ t('solar')}</Text>
            <Text>{ t('electronics')}</Text>
            <Text>{ t('shoes')}</Text>
            <Text>{ t('medical')}</Text>
            <Text>{ t('autopart')}</Text>
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
