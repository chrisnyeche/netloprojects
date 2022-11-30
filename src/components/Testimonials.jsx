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
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} fontFamily={'Aeonik medium'}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Fast Delivery</TestimonialHeading>
              <TestimonialText>
                They deliver goods efficiently and very fast. Goods did not take time before it got to me.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://media.glamourmagazine.co.uk/photos/6138b5732b5bbea008293465/1:1/w_1920,h_1920,c_limit/nuralailalov_SQ.jpg'
              }
              name={'Aisha Imani Mira'}
              title={'Marketer at Deutsche & Co.'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Latest Product</TestimonialHeading>
              <TestimonialText>
                They Happen to know the latest products in the market and they ship it to me.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://brandedgirls.b-cdn.net/wp-content/uploads/2015/11/almousa_su-700x.jpeg'
              }
              name={'Nasir Omar Samir'}
              title={'Sales Rep. at Adidas'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Mindblowing Service</TestimonialHeading>
              <TestimonialText>
                Their Customer Care and their trucks is what I love most about them. Very durable.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://media.istockphoto.com/id/1188035960/photo/arabian-man-with-traditional-dress.jpg?s=170667a&w=0&k=20&c=WjhIUtBwRQj0GKJTABxKhh6P-EWoMdtptqZ5DU5wKyQ='
              }
              name={'Ahmed Saliba Haram'}
              title={'CEO at Ahmed Group & CO'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}