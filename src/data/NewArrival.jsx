import { Flex, Box, Image, Badge, Heading, Text, SimpleGrid,  } from "@chakra-ui/react";

import { useTranslation, Trans } from "react-i18next";



// Colors 
const primaryColor = "#fbcc64";
const secondaryColor = "#001d3a";


export default function NewArrival() {
  const {t} = useTranslation()
  const NewArrivalData = [
    {
      isNew: true,
      imageURL: 'http://sc04.alicdn.com/kf/Hda1bd1b1054c4b3c9a8cdc120a4e33eeL.png',
      name: t("washingmachine"),
    },
  
    {
      isNew: true,
      imageURL: 'https://sc04.alicdn.com/kf/H0a22572b124c4349b054bfc508953922E.png',
      name: t("refrigerator"),
    },
  
    {
      isNew: true,
      imageURL: 'http://sc04.alicdn.com/kf/Hb312a9459abe4d5fb720f35ca0ba610e8.jpg',
      name: t("tv"),
    },
  
    {
      isNew: true,
      imageURL: 'https://5.imimg.com/data5/SELLER/Default/2021/7/CW/JP/FH/5474969/85-watt-mono-crysteline-solar-panel-500x500.jpg',
      name: t("polycrystal"),
    },
  ];
  return (
    <>
      <Box bg={primaryColor} w={"100%"} pb={5}>
        <Heading textAlign={"center"} py={8} fontFamily="Aeonik Bold" fontSize={{ base: "5xl", md: "6xl" }}>
          <Trans i18nKey="newSection">
            <Text as='span' display={{base: 'none', md: 'inline'}}> OUR  </Text>  NEW ARRIVALS
          </Trans>
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} ms={{lg: 8}}>
          {NewArrivalData.map((data) => {
            return (
              <Flex columns={{ base: 1, lg: 2 }} h={{ base: "fit-content", lg: "400px" }} w={{ base: "90%", lg: "300px" }} gap={2} mx='auto' key={data.name}>
                <Box bg={secondaryColor} color={primaryColor} rounded={"2xl"} my={3}>

                  <Image src={data.imageURL} alt={`Picture of ${data.name}`} bg={"white"} h={"70%"} w={"full"} roundedTop={"2xl"} />

                  <Box p="6">
                    <Box d="flex" alignItems="baseline">
                      {data.isNew && (
                        <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="green">
                          New
                        </Badge>
                      )}
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                      <Box fontSize={{base: '2xl', lg: "xl"}} fontWeight="semibold" as="h4" lineHeight="tight">
                        {data.name}
                      </Box>
                    </Flex>

                  </Box>
                </Box>
              </Flex>
            );
          })}
        </SimpleGrid>
      </Box>

    </>
  );
}
