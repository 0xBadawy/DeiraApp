import React, { useRef } from "react";
import Header from "../components/Header/Header";
import PrivacyPolicy from "../components/PrivacyPolicy";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer/Footer";

const PrivacyPolicyPage = () => {
  const heroRef = useRef(null);
  const featuresCardsRef = useRef(null);
  const phoneSectionRef = useRef(null);
  const rideEasyRef = useRef(null);
  const categoriesOverviewRef = useRef(null);
  const privacyPolicyRef = useRef(null);
  const downloadRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        refs={{
          hero: heroRef,
          featuresCards: featuresCardsRef,
          phoneSection: phoneSectionRef,
          rideEasy: rideEasyRef,
          categoriesOverview: categoriesOverviewRef,
          privacyPolicy: privacyPolicyRef,
          download: downloadRef,
        }}
      />

      <div ref={privacyPolicyRef}>
        <PrivacyPolicy />
      </div>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default PrivacyPolicyPage;
