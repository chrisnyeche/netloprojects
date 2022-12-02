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


const Medical = () => {
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
  
    const MedicalAppliances = [
      {
        item: t("sensor"),
        image: "http://sc04.alicdn.com/kf/H5b04d41caafa45339b7622262fb2717ce.jpg",
      },
      {
        item: t("icubed"),
        image: "https://sc04.alicdn.com/kf/H2f3fe71c38414bbcaee885c2fbda43a7i.jpg",
      },
      {
        item: t("defib"),
        image: "https://s.alicdn.com/@sc04/kf/HTB1lK5ue8Cw3KVjSZFlq6AJkFXa3.jpg_300x300.jpg",
      },
      {
        item: t("surgical"),
        image: "http://sc04.alicdn.com/kf/H77bae4de6a0d4b20a34978f2e922d762i.jpg",
      },
      {
        item: t("light"),
        image: "http://sc04.alicdn.com/kf/H2dbb0e4e5e614c19931895eaf0291503n.jpg",
      },
      {
        item: t("stretcher"),
        image: "https://sc04.alicdn.com/kf/U75b5b7d476cd42719aa6f756156871e2d.png",
      },
      {
        item: t("monitor"),
        image: "https://s.alicdn.com/@sc04/kf/H58c39979470241eeb29a4605f9f6490cx.png_300x300.png",
      },
      {
        item: t("ecg"),
        image: "https://s.alicdn.com/@sc04/kf/H85557ce5fb7c497dbb229d9ec53ea143i.jpg_300x300.jpg",
      }, 
    ];
    return (
      <>
        <Heading bg={primaryColor} color={secondaryColor} textAlign={"center"} fontSize={{ base: "4xl", lg: "5xl" }}fontFamily={'Aeonik Bold'}  px={2} pt={4}>
          <Trans i18nKey="medicalSection">
            Medical Machines & Equipments
          </Trans>
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} p={5}>
          {MedicalAppliances.map((data) => {
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

export default Medical