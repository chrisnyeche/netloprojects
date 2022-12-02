import { Box, Heading, Button, useDisclosure, VStack, FormControl, InputGroup, InputLeftElement, Input, Textarea, Center, Slide, Icon } from "@chakra-ui/react";
import { useTranslation, Trans } from "react-i18next";

// Icons
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoGlobeOutline, IoPhonePortrait } from "react-icons/io5";
import { HiOutlineTruck, HiX } from "react-icons/hi";
import { GiWeight } from "react-icons/gi";

// Colors
const secondaryColor = "#fbcc64";
const primaryColor = "#001d3a";

const FormModal = () => {
  const { t } = useTranslation();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const Scroller = () => {
    onToggle();
    document.body.style.overflow = "hidden";
  };
  const closeScroller = () => {
    onClose();
    document.body.style.overflow = "unset";
  };

  return (
    <Box>
      <Button colorScheme={"green"} onClick={Scroller} my={3}>
        Make Request
      </Button>
      {/* FormModal Slide */}
      <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
        {/* Request Card */}
        <Center background={secondaryColor} w={{ base: "92%", md: "60%" }} h={{ base: "550px", md: "550px" }} bg="white" borderRadius={{ base: "20px", md: "24px" }} mx="auto" my={"auto"} mt={"4.5%"} overflow="hidden" mb={"20%"} position="relative" shadow="sm">
          {/* Close Button */}
          <Box position={"absolute"} right={"4%"} top={"5%"}>
            <Button onClick={closeScroller} h={"30px"} w={"24px"} size={"sm"} variant="ghost">
              <Icon as={HiX} fontSize="20px" />
            </Button>
          </Box>

          {/* Request Content */}
          <Box my={5} color="#0B0E3F" w="90%">
            <VStack spacing={3}>
              <Heading as="h2" fontSize={{ base: "24px", md: "4xl" }}>
                <Trans i18nKey="requestForm">REQUEST FORM</Trans>
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
                <Button variant="solid" color={primaryColor} bg={secondaryColor} _hover={{ color: secondaryColor, bg: primaryColor }}>
                  Submit Request
                </Button>
              </FormControl>
            </VStack>
          </Box>
        </Center>
      </Slide>
    </Box>
  );
};

export default FormModal;
