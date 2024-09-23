import React, { useContext, useState } from "react";
import Image1 from "../assets/Images/Banners/Banner (2).png";
import Image2 from "../assets/Images/Banners/Banner (1).png";
import { FaW, FaWhatsapp } from "react-icons/fa6";
import { AppSettingContext } from "../context/ThemeContext";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [Image1, Image2];
  const { appSetting } = useContext(AppSettingContext);
  const Language = appSetting.Language;

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const whatsappNumber = "00966507728885";
  const message = "Hello, I need help!";

  const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  return (
    <div className="bg-purple-100 py-10">
      <div className="container mx-auto py-10">
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
          <div className="relative h-40 overflow-hidden rounded-lg md:h-60 lg:h-72 xl:h-[345px]">
            {images.map((image, index) => (
              <div key={index} className={`${index === activeIndex ? "block" : "hidden"} duration-700 ease-in-out`} data-carousel-item>
                <img src={image} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Slide ${index + 1}`} />
              </div>
            ))}

            {/* WhatsApp Button */}
            <a href={whatsappURL} className="absolute bottom-5 left-14 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg" target="_blank" rel="noopener noreferrer">
              {Language == "ar" ? "تواصل معنا عبر الواتساب" : "Contact us via WhatsApp"}
              <FaWhatsapp className="inline-block text-2xl mx-2" />
            </a>
          </div>

          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 drop-shadow-xl rounded-full ${index === activeIndex ? "bg-blue-500" : "bg-white"}`}
                aria-current={index === activeIndex ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>

          {/* Slider controls */}
          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prevSlide}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={nextSlide}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
