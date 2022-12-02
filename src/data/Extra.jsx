import { Box, Heading, Image, Text, SimpleGrid } from "@chakra-ui/react";

import { useTranslation, Trans } from "react-i18next";

// Colors
const secondaryColor = "#fbcc64";
const primaryColor = "#001d3a";


const Extra = () => { 
    const {t} = useTranslation()
    const ExtraServices = [
      {
        item: t("cosmetics"),
        image: "https://sc04.alicdn.com/kf/H914d67660eec42a3b035d9a251985e03Y.png",
      },
      {
        item: t("automobile"),
        image: "https://sc04.alicdn.com/kf/H10b766292664468d8821a02ffe2dc280F.jpg",
      },
      {
        item: t("transport"),
        image: "https://s.alicdn.com/@sc04/kf/H0675b8c2f31941aea21dbaf38790c3e45.jpg",
      },
      {
        item: t("products"),
        image: "https://sc04.alicdn.com/kf/Uaccf12c60d3841a1a7bad5735c38ee9cX.jpg",
      }, 
    ];
    return (
      <Box bg={primaryColor} color={primaryColor} mt={3}>
        <Heading color={primaryColor} bg={secondaryColor} textAlign={"center"} fontSize={{ base: "4xl", lg: "5xl" }} px={2} pt={4} fontFamily={'Aeonik Bold'}>
          <Trans i18nKey="extraSection">
            Extra Services We Render
          </Trans>
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} p={5}>
          {ExtraServices.map((data) => {
            return (
              <Box w={"300px"} bg={secondaryColor} h={"340px"} borderRadius={"12px"} my={3} p={3} mx='auto' key={data.item}>
                <Image src={data.image} w="full" h={{md: "290px"}} />
                <Text fontSize={{ base: "lg", lg: "lg" }}> {data.item} </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    );
  };

export default Extra