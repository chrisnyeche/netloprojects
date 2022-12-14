import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './App.css'
// AOS
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './i18n'
import Preloader from "./components/Preloader";

//import animate
import 'animate.css';

// `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <React.Suspense fallback={<Preloader/>}>
          <App />
        </React.Suspense>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
