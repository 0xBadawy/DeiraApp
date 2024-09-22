import React, { useRef, useEffect } from "react";
import Header from "../components/Header/Header";
import CategoriesOverview from "../components/CategoriesOverview";
import HeroSection from "./../components/HeroSection";
import FeaturesCards from "../components/FeaturesCards";
import PhoneSection from "../components/PhoneSection";
import RideEasy from "../components/RideEasy";
import FooterSection from "../components/FooterSection";
import PrivacyPolicy from "./../components/PrivacyPolicy";
import Footer from "../components/Footer/Footer";
import WhatsAppButton from "./../components/WhatsAppButton";
import AvailableAreasSection from "../components/AvailableAreasSection";

const Home = () => {
  return (
    <>
      <Header />

      <HeroSection />
      <AvailableAreasSection />
      <FeaturesCards />

      <FooterSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;
