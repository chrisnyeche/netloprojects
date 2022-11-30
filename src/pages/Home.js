import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Feature from "../components/Features";
import Store from "../data/NewArrival";
import Shop from "../components/Shop";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

// Routes
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box fontFamily={"Aeonik Medium"}>
      <NavBar />
      <Hero />
      <Store />
      <Feature />
      <Shop />
      <Testimonials />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Home;
