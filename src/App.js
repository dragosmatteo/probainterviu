import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Servicii from "./components/Servicii/Servicii";
import Function from "./components/Function/Function";
import Api from "./components/Api/Api";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Footer/Copyright";

function App() {
   return (
      <>
         <Header />
         <Hero />
         <Servicii />
         <Function />
         <Api />
         <Footer />
         <Copyright />
      </>
   );
}

export default App;
