import Header from "../components/Header/Header";
import HeroSection from "./../components/HeroSection";
import FeaturesCards from "../components/FeaturesCards";
import Carousel from "./../components/Carousel";
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
      <Carousel />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;
