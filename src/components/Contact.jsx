import { Container, Flex, Box, Heading, Text, IconButton, Button, VStack, HStack, WrapItem, FormControl, FormLabel, Input, InputGroup, InputLeftElement, Textarea, Link} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail, } from "react-icons/md";
import { BsWhatsapp, BsInstagram, BsTwitter, BsPerson } from "react-icons/bs";

// Colors
const secondaryColor = "#fbcc64";
const primaryColor = "#001d3a";

export default function Contact() {
  return (
    <Container bg={secondaryColor} maxW="full" mt={0} centerContent overflow="hidden" py={5} id="contact">
        <Box w={{base: '100%', md: "90%", lg: "80%"}} bg={primaryColor} color="white" borderRadius="lg" m={{ sm: 8, md: 10 }} p={{ sm: 5, md: 10, lg: 16 }}>
          <Box p={{base: 4, md: 0}}>
            <Flex justifyContent={'space-between'} gap={7} flexDirection={{base: 'column', lg: 'row'}}>
              <WrapItem textAlign={'center'} w={{base: 'full', lg: '40%'}} display={'flex'} justifyContent='center'>
                <Box>
                  <Heading fontFamily={'Aeonik Bold'} fontSize={{base: "2xl", md: "5xl"}}>Contact Us</Heading>
                  <Text color="gray.500">
                    Fill up the form below to contact us
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack>
                      <Link href="tel:+4917666333832" _hover={{textDecoration: 'none'}}>
                        <Button height="48px" width="250px" variant="ghost" color="#DCE2FF" _hover={{ border: "2px solid #1C6FEB" }} leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                          +49 176 66333832
                        </Button>
                        </Link>
                        <Link href="mailto: info@dwh-warenhandel.de" _hover={{textDecoration: 'none'}}>
                        <Button size="md" height="48px" width="250px" variant="ghost" color="#DCE2FF" _hover={{ border: "2px solid #1C6FEB" }} leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                          info@dwh-warenhandel.de
                        </Button>
                        </Link>
                        <Button size="md" height="48px" width="250px" variant="ghost" color="#DCE2FF" _hover={{ border: "2px solid #1C6FEB" }} leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                          Ackerstraße 30, 46483 Wesel
                        </Button>
                    </VStack>
                  </Box>
                  <HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5} alignItems="flex-start">
                    <Link href="https://www.facebook.com/people/Dwh-Warenhandel/100088262255625/">
                    <IconButton aria-label="facebook" variant="ghost" size="lg" isRound={true} _hover={{ bg: "#0D74FF" }} icon={<MdFacebook size="28px" />} />
                    </Link>
                    <Link href=" https://wa.me/+4917666333832">
                    <IconButton aria-label="whatsapp" variant="ghost" size="lg" isRound={true} _hover={{ bg: "green.500" }} icon={<BsWhatsapp size="28px" />} />
                    </Link>
                    <Link href="https://www.twitter.com/dwhwarenhandel">
                    <IconButton aria-label="twitter" variant="ghost" size="lg" isRound={true} _hover={{ bg: "#0D74FF" }} icon={<BsTwitter size="28px" />} />
                    </Link>
                    <Link href="https://www.instagram.com/dwhwarenhandel">
                    <IconButton aria-label="instagram" variant="ghost" size="lg" isRound={true} _hover={{ bg: "red.400" }} icon={<BsInstagram size="28px" />} />
                    </Link>
                  </HStack>
                </Box>
              </WrapItem>

              {/* Form */}
              <WrapItem w={{base: 'full', lg: '60%'}}>
                <Box bg="white" borderRadius="lg" w='100%'>
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none" children={<BsPerson color="gray.800" />} />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none" children={<MdOutlineEmail color="gray.800" />} />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button variant="solid" colorScheme={'green'} _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Flex>
          </Box>
        </Box>
    </Container>
  );
}
