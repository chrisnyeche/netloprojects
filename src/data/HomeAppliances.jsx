import { Box, Heading, Image, Text, SimpleGrid } from "@chakra-ui/react";
import { useTranslation, Trans } from "react-i18next";

// Colors
const secondaryColor = "#fbcc64";
const primaryColor = "#001d3a";


const HomeAppliances = ({formModal}) => {
    const {t} = useTranslation()  
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
                {formModal}
              </Box>
            );
          })}
        </SimpleGrid>
      </>
    );
  };

export default HomeAppliances