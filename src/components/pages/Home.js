import React from "react";
import "../../App.css";
import MapContainer from '../googlemaps/google-maps'

import Card from "../caroussel/Cards";

import Footer from "../Footer";
import HeroSection from "../HeroSection";
import Presentation from "./Presentation";



const Home = () => {
  return (
    <>
      <HeroSection />
      <Presentation/>
      <Card/> 
      <MapContainer /> 
      <Footer />
      
    </>
  );
};

export default Home;
