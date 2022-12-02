import { Box, Heading, Image, Text, SimpleGrid } from "@chakra-ui/react";
import { useTranslation, Trans } from "react-i18next";

// Colors
const primaryColor = "#fbcc64";
// const secondaryColor = "#001d3a";


const SolarProducts = ({formModal}) => {
  const {t} = useTranslation() 
    const Solardata = [
      {
        item: t("gradeA"),
        image: "http://sc04.alicdn.com/kf/HTB1BEYOXzzuK1RjSspe762iHVXa7.png",
      },
      {
        item: t("seraphim"),
        image: "http://sc04.alicdn.com/kf/H5d68573855b1434ab5e39ba2dead0b10S.png",
      },
      {
        item: t("monocrystal"),
        image: "https://5.imimg.com/data5/SELLER/Default/2021/7/CW/JP/FH/5474969/85-watt-mono-crysteline-solar-panel-500x500.jpg",
      },
      {
        item: t("nomad"),
        image: "https://5.imimg.com/data5/SELLER/Default/2020/8/XO/ZX/HX/66068630/260-watt-monocrystalline-solar-panel-250x250.jpg",
      },
    ];
    return (
      <>
        <Heading bg={primaryColor} textAlign={"center"} fontSize={{ base: "4xl", lg: "5xl" }} mt={5}  px={2} pt={4} fontFamily={'Aeonik Bold'}>
          <Trans i18nKey="solarSection">
            Used & New Solar Panels
          </Trans>
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} p={5}>
          {Solardata.map(({item, image}) => {
            return (
              <Box h={"400px"} w={{ base: "99%", lg: "300px" }} boxShadow={"xl"} borderRadius={"12px"} p={3} mx='auto' my={{base: 2, md: 0}} key={item}>
                <Image src={image} w="full" h="290px" />
                <Text fontSize={{ base: "lg", lg: "xl" }}>
                  {/* <Trans i18nKey="solarItem"> */}
                    {item}
                  {/* </Trans> */}
                </Text>
                {formModal}              
              </Box>
            );
          })}
        </SimpleGrid>
      </>
    );
  };

export default SolarProducts