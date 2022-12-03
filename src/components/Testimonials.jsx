import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation, Trans } from 'react-i18next';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials() {
  const { t } = useTranslation();
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} fontFamily={'Aeonik medium'}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>{ t('clientHeading')}</Heading>
          <Text>{ t('clientSub')}</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                <Trans i18nKey="thead1">
                  Fast Delivery
                </Trans>
              </TestimonialHeading>
              <TestimonialText>
                <Trans i18nKey="tcontent1">
                  They deliver goods efficiently and very fast. Goods did not take time before they got to me.
                </Trans>
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://res.cloudinary.com/dkvuhqzz8/image/upload/v1670080545/dwh/nuralailalov_SQ_gb07jc.webp'
              }
              name={'Aisha Imani Mira'}
              title={'Marketer at Power Maxma'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                <Trans i18nKey="thead2">
                  Latest Product
                </Trans>
              </TestimonialHeading>
              <TestimonialText>
                <Trans i18nKey="tcontent2">
                  They Happen to know the latest products in the market and they ship them to me.
                </Trans>
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://res.cloudinary.com/dkvuhqzz8/image/upload/v1670080621/dwh/almousa_su-700x_rqypzt.jpg'
              }
              name={'Nasir Omar Samir'}
              title={'Sales Rep. Gulf Electronics Company'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>
                <Trans i18nKey="thead3">
                  Mind Blowing Service
                </Trans>
              </TestimonialHeading>
              <TestimonialText>
                <Trans i18nKey="tcontent3">
                  Their Customer Care and their trucks are what I love most about them. Very durable.
                </Trans>
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://res.cloudinary.com/dkvuhqzz8/image/upload/v1670080722/dwh/img_xxrni3.jpg'
              }
              name={'Ahmed Saliba Haram'}
              title={'Head of Logistics at Jini Auto Spare Parts Co. LLC'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}