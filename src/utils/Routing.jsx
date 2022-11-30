import Home from "../pages/Home"
import { Routes, Route } from "react-router-dom";
import About from '../pages/About'
import Impressum from '../pages/Impressum'
const Routing = () => {
  return (
    <Routes>
         <Route
        index
        element={
            <Home />
        }
      />
      <Route path={'about'} element={<About/>}/>
      <Route path={'impressum'} element={<Impressum/>}/>
    </Routes>
  )
}

export default Routing