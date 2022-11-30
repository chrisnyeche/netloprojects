import { Box, Heading, Button, Image, Text, useDisclosure, VStack, FormControl, InputGroup, InputLeftElement, Input, Textarea, Center, Slide, Icon, SimpleGrid } from "@chakra-ui/react";

// Icons
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoGlobeOutline, IoPhonePortrait } from "react-icons/io5";
import { HiOutlineTruck, HiX } from "react-icons/hi";
import { GiWeight } from "react-icons/gi";

// Colors
const primaryColor = "#fbcc64";
const secondaryColor = "#001d3a";


const SolarProducts = () => {
    const { isOpen, onToggle, onClose } = useDisclosure();
    const Scroller = () => {
      onToggle();
      document.body.style.overflow = "hidden";
    };
    const closeScroller = () => {
      onClose();
      document.body.style.overflow = "unset";
    };
  
    const Solardata = [
      {
        item: "Grade A Solar Panel",
        image: "http://sc04.alicdn.com/kf/HTB1BEYOXzzuK1RjSspe762iHVXa7.png",
      },
      {
        item: "Seraphim Solar Panel",
        image: "http://sc04.alicdn.com/kf/H5d68573855b1434ab5e39ba2dead0b10S.png",
      },
      {
        item: "Monocrystalline Solar Panel",
        image: "https://5.imimg.com/data5/SELLER/Default/2021/7/CW/JP/FH/5474969/85-watt-mono-crysteline-solar-panel-500x500.jpg",
      },
      {
        item: "Nomad Solar Panel",
        image: "https://5.imimg.com/data5/SELLER/Default/2020/8/XO/ZX/HX/66068630/260-watt-monocrystalline-solar-panel-250x250.jpg",
      },
    ];
    return (
      <>
        <Heading bg={primaryColor} textAlign={"center"} fontSize={{ base: "4xl", lg: "5xl" }} mt={5}  px={2} pt={4} fontFamily={'Aeonik Bold'}>
          Used & New Solar Panels
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} p={5}>
          {Solardata.map((data) => {
            return (
              <Box h={"400px"} w={{ base: "99%", lg: "300px" }} boxShadow={"xl"} borderRadius={"12px"} p={3} mx='auto' my={{base: 2, md: 0}} key={data.item}>
                <Image src={data.image} w="full" h="290px" />
                <Text fontSize={{ base: "lg", lg: "xl" }}> {data.item} </Text>
                <Button colorScheme={"green"} onClick={Scroller} my={3}>
                  Make Request
                </Button>              
                {/* Modal Slide */}
                <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
                  {/* Request Card */}
                  <Center background={primaryColor} w={{ base: "92%", md: "60%" }} h={{ base: "550px", md: "550px" }} bg="white" borderRadius={{ base: "20px", md: "24px" }} mx="auto" my={"auto"} mt={"4.5%"} overflow="hidden" mb={"20%"} position="relative" shadow="base">
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
                          REQUEST FORM
                        </Heading>
                        {/* Name */}
                        <FormControl>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none" children={<BsPerson color="gray.800" />} />
                            <Input type="text" size="md" placeholder="Name/ Name of Company" />
                          </InputGroup>
                        </FormControl>
                        {/* Email */}
                        <FormControl>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none" children={<MdOutlineEmail color="gray.800" />} />
                            <Input type="text" size="md" placeholder="Email Address" />
                          </InputGroup>
                        </FormControl>
  
                        {/* Country */}
                        <FormControl>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none" children={<IoGlobeOutline color="gray.800" />} />
                            <Input type="text" size="md" placeholder="Country" />
                          </InputGroup>
                        </FormControl>
  
                        {/* Shipping Address */}
                        <FormControl>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none" children={<HiOutlineTruck color="gray.800" />} />
                            <Input type="text" size="md" placeholder="Shipping Address" />
                          </InputGroup>
                        </FormControl>
  
                        {/* Phone Number */}
                        <FormControl>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none" children={<IoPhonePortrait color="gray.800" />} />
                            <Input type="number" size="md" placeholder="Phone Number" />
                          </InputGroup>
                        </FormControl>
  
                        {/* Quantity */}
                        <FormControl>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none" children={<GiWeight color="gray.800" />} />
                            <Input type="number" size="md" placeholder="Quantity" />
                          </InputGroup>
                        </FormControl>
  
                        {/* Description */}
                        <FormControl>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="Briefly describe your request or requirement"
                          />
                        </FormControl>
  
                        {/* Submit Button */}
                        <FormControl float="right">
                          <Button variant="solid" color={secondaryColor} bg={primaryColor} _hover={{color: primaryColor, bg: secondaryColor }}>
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

export default SolarProducts