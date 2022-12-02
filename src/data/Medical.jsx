import { Box, Heading, Image, Text, SimpleGrid } from "@chakra-ui/react";
import { useTranslation, Trans } from "react-i18next";

// Colors
const secondaryColor = "#fbcc64";
const primaryColor = "#001d3a";


const Medical = ({formModal}) => {
    const {t} = useTranslation()
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
                {formModal}
              </Box>
            );
          })}
        </SimpleGrid>
      </>
    );
  };

export default Medical