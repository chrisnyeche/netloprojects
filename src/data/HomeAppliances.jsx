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


const HomeAppliances = () => {
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
  
    const Appliances = [
      {
        item: t("microwave"),
        image: "http://sc04.alicdn.com/kf/H0170de8271e24d59889c84b555ab22c3P.png",
      },
      {
        item: t("iron"),
        image: "https://sc04.alicdn.com/kf/Ud92315365342464a94caa146301d428bJ.png",
      },
      {
        item: t("blender"),
        image: "http://sc04.alicdn.com/kf/HTB10MCiXLfsK1RjSszbq6AqBXXaS.jpg",
      },
      {
        item: t("fan"),
        image: "https://sc04.alicdn.com/kf/HTB1_vBfaZrrK1Rjy1ze760alFXaa.png",
      },
      {
        item: t("twintub"),
        image: "https://sc04.alicdn.com/kf/H3a2a56765d36436fb1416ba244721a2cn.png",
      },
      {
        item: t("doubledoor"),
        image: "https://sc04.alicdn.com/kf/H044945898db94fe18f160d27cc7eb5f76.png",
      },
      {
        item: t("androidTV"),
        image: " http://sc04.alicdn.com/kf/H606a503af7064426bea95aa519d043f7y.png",
      },
      {
        item: t("cooker"),
        image: "http://sc04.alicdn.com/kf/H47f873188d3a4fb2945f2566a17f42f4f.png",
      }, 
    ];
    return (
      <>
        <Heading bg={primaryColor} color={secondaryColor} textAlign={"center"} fontSize={{ base: "4xl", lg: "5xl" }}  px={2} pt={4} fontFamily={'Aeonik Bold'}>
          <Trans i18nKey="electronicSection">
            Electronic (all kinds of electrical appliances)
          </Trans>
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} p={5}>
          {Appliances.map((data) => {
            return (
              <Box  h={"400px"} w={{ base: "99%", lg: "300px" }} shadow={"xl"} borderRadius={"12px"} my={3} p={3} mx='auto' key={data.item}>
                <Image src={data.image} w="full" h={{md: "290px"}} />
                <Text fontSize={{ base: "lg", lg: "xl" }}> {data.item} </Text>
                <Button colorScheme={"green"} onClick={Scroller} my={3}>
                  Make Request
                </Button>
  
                {/* Modal Slide */}
                <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
                  {/* Request Card */}
                  <Center background={secondaryColor} w={{ base: "92%", md: "60%" }} h={{ base: "550px", md: "550px" }} bg="white" borderRadius={{ base: "20px", md: "24px" }} mx="auto" my={"auto"} mt={"4.5%"} overflow="hidden" mb={"20%"} position="relative" shadow='sm'>
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

export default HomeAppliances