import SolarProducts from "../data/SolarProducts";
import HomeAppliances from "../data/HomeAppliances";
import Shoes from "../data/Shoes";
import Medical from './../data/Medical';
import Extra from "../data/Extra";
import Modal from "./FormModal";


const Shop = () => {
  return (
    <>
      <SolarProducts formModal={<Modal/>} />
      <HomeAppliances formModal={<Modal/>} />
      <Shoes formModal={<Modal/>}/>
      <Medical formModal={<Modal/>} />
      <Extra/>
    </>
  );
};
export default Shop;
