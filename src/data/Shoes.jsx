import { Box, Heading, Button, Image, Text, useDisclosure, VStack, FormControl, InputGroup, InputLeftElement, Input, Textarea, Center, Slide, Icon, SimpleGrid } from "@chakra-ui/react";

// Icons
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoGlobeOutline, IoPhonePortrait } from "react-icons/io5";
import { HiOutlineTruck, HiX } from "react-icons/hi";
import { GiWeight } from "react-icons/gi";

import { useTranslation, Trans } from "react-i18next";

// Colors
const secondaryColor = "#fbcc64";
const primaryColor = "#001d3a";


const Shoes = () => {
    const {t} = useTranslation()
    const { isOpen, onToggle, onClose } = useDisclosure();
    const Scroller = () => {
      onToggle();
      document.body.style.overflow = "hidden";
    };
    const closeScroller = () => {
      onClose();
      document.body.style.overflow = "unset";
    };
  
    const shoeData = [
      {
        item: t("trainers"),
        image: "http://sc04.alicdn.com/kf/H96b9c5faf6fa4f6d897383a0bed1d0b9M.png",
      },
      {
        item: t("sneakers"),
        image: "http://sc04.alicdn.com/kf/H487dfc1cf5e24f80afe8bba313d6fbb0R.png",
      },
      {
        item: t("boots"),
        image: "https://lzd-img-global.slatic.net/g/p/54bd1e04abb029a83085978730b8b380.jpg_720x720q80.jpg_.webp",
      },
      {
        item: t("timbaland"),
        image: "https://s.alicdn.com/@sc04/kf/H10a7176bad7946fbb90f9373f9f6b0ecG.png_300x300.png",
      }, 
    ];
    return (
      <>
        <Heading color={primaryColor} bg={secondaryColor} textAlign={"center"} fontSize={{ base: "4xl", lg: "5xl" }}  px={2} pt={4}fontFamily={'Aeonik Bold'}>
          <Trans i18nKey="shoeSection">
            Shoes (Trainers shoes, Sneakers and safety boots)
          </Trans>
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} p={5}>
          {shoeData.map((data) => {
            return (
              <Box w={{ base: "99%", lg: "300px" }} h={"400px"} shadow={"xl"} borderRadius={"12px"} my={3} p={3} mx='auto' key={data.item}>
                <Image src={data.image} w="full" h={{md: "290px"}} />
                <Text fontSize={{ base: "lg", lg: "xl" }}> {data.item} </Text>
                <Button colorScheme={"green"} onClick={Scroller} my={3}>
                  Make Request
                </Button>
  
                {/* Modal Slide */}
                <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
                  {/* Request Card */}
                  <Center background={secondaryColor} w={{ base: "92%", md: "60%" }} h={{ base: "550px", md: "550px" }} bg="white" borderRadius={{ base: "20px", md: "24px" }} mx="auto" my={"auto"} mt={"4.5%"} overflow="hidden" mb={"20%"} position="relative" shadow="base">
                    {/* Close Button */}
                    <Box position={"absolute"} right={"4%"} top={"5%"}>
                      <Button onClick={closeScroller} h={"30px"} w={"24px"} size={"sm"} variant="ghost">
                        <Icon as={HiX} fontSize="20px" />
                      </Button>
                    </Box>
  
                    {/* Request Content */}
                    <Box my={5} color="#0B0E3F" w="90%">
                      <VStack spacing={3}>
                      <Heading as="h2" fontSize={{base: "24px", md: '4xl'}}>
                          <Trans i18nKey="requestForm">
                            REQUEST FORM
                          </Trans>
                        </Heading>
                        {/* Name */}
                        <FormControl>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none" children={<BsPerson color="gray.800" />} />
                            <Input type="text" size="md" placeholder={t("name")} />
                          </InputGroup>
                        </FormControl>
                        {/* Email */}
                        <FormControl>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none" children={<MdOutlineEmail color="gray.800" />} />
                            <Input type="text" size="md" placeholder={t("email")} />
                          </InputGroup>
                        </FormControl>
  
                        {/* Country */}
                        <FormControl>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none" children={<IoGlobeOutline color="gray.800" />} />
                            <Input type="text" size="md" placeholder={t("country")} />
                          </InputGroup>
                        </FormControl>
  
                        {/* Shipping Address */}
                        <FormControl>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none" children={<HiOutlineTruck color="gray.800" />} />
                            <Input type="text" size="md" placeholder={t("shipping")} />
                          </InputGroup>
                        </FormControl>
  
                        {/* Phone Number */}
                        <FormControl>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none" children={<IoPhonePortrait color="gray.800" />} />
                            <Input type="number" size="md" placeholder={t("phone")} />
                          </InputGroup>
                        </FormControl>
  
                        {/* Quantity */}
                        <FormControl>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none" children={<GiWeight color="gray.800" />} />
                            <Input type="number" size="md" placeholder={t("quantity")} />
                          </InputGroup>
                        </FormControl>
  
                        {/* Description */}
                        <FormControl>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder={t("desc")}
                          />
                        </FormControl>
  
                        {/* Submit Button */}
                        <FormControl float="right">
                          <Button variant="solid" color={primaryColor} bg={secondaryColor} _hover={{color: secondaryColor, bg: primaryColor }}>
                            Submit Request
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Center>
                </Slide>
              </Box>
            );
          })}
        </SimpleGrid>
      </>
    );
  };

export default Shoes