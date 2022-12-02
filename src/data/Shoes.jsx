import { Box, Heading, Image, Text, SimpleGrid } from "@chakra-ui/react";
import { useTranslation, Trans } from "react-i18next";

// Colors
const secondaryColor = "#fbcc64";
const primaryColor = "#001d3a";


const Shoes = ({formModal}) => {
    const {t} = useTranslation()
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
                {formModal}
              </Box>
            );
          })}
        </SimpleGrid>
      </>
    );
  };

export default Shoes