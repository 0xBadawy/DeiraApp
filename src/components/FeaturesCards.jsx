import React, { useContext, useState, useEffect } from "react";
import { AppSettingContext } from "../context/ThemeContext";
import imageCar from "../assets/Images/SubImages/image (7).png";
import imagepalon from "../assets/Images/SubImages/image (4).png";
import imageJop from "../assets/Images/SubImages/image (2).jpg";
import imageBag from "../assets/Images/SubImages/image (8).png";
import imageElectronics from "../assets/Images/SubImages/image (2).png";
import imageFurniture from "../assets/Images/SubImages/image (11).png";
import imageSupplay from "../assets/Images/SubImages/image (1).png";
import image01 from "../assets/Images/SubImages/image (14).png";
import image02 from "../assets/Images/SubImages/image (15).png";
import image03 from "../assets/Images/SubImages/image (3).png";
import image04 from "../assets/Images/SubImages/image (10).png";
import image05 from "../assets/Images/SubImages/image (9).png";

import "./style.css";

const getOS = () => {
  const userAgent = window.navigator.userAgent;

  if (userAgent.indexOf("Win") !== -1) return "Windows";
  if (userAgent.indexOf("Mac") !== -1) return "MacOS";
  if (userAgent.indexOf("X11") !== -1 || userAgent.indexOf("Linux") !== -1) return "Linux";
  if (userAgent.indexOf("Android") !== -1) return "Android";
  if (userAgent.indexOf("like Mac") !== -1) return "iOS";

  return "Unknown OS";
};

const FeaturesCards = () => {
  const [Governate, setGovernate] = useState({ en: "Rafha", ar: "رفحاء" });
  const [city, setCity] = useState("");
  const os = getOS();

  const getCityName = async (lat, lng) => {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=ar`);
    const data = await response.json();
    if (data.address && data.address.city) {
      return data.address.city;
    }
    return null;
  };

  const getCityNameE = async (lat, lng) => {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`);
    const data = await response.json();
    if (data.address && data.address.city) {
      return data.address.city;
    }
    return null;
  };

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error("Geolocation not supported"));
      }
    });
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const position = await getLocation();
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const cityName = await getCityName(lat, lng);
        const cityNameE = await getCityNameE(lat, lng);

        setCity(cityName);
        if (cityName) {
          setGovernate({ en: cityNameE, ar: cityName });
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLocation();
  }, []);

  const Data = [
    {
      text: { en: `Cars in ${Governate.en}`, ar: `سيارات ${Governate.ar}` },
      icon: imageCar,
      services: [
        { en: `Cars in ${Governate.en}`, ar: `سيارات ${Governate.ar}` },
        { en: `Car Parts in ${Governate.en}`, ar: `قطع غيار ${Governate.ar}` },
      ],
    },
    {
      text: { en: `Jobs in ${Governate.en}`, ar: `وظائف ${Governate.ar}` },
      icon: imageJop,
      services: [{ en: `Jobs in ${Governate.en}`, ar: `موظفين ${Governate.ar}` }],
    },
    {
      text: { en: `Events in ${Governate.en}`, ar: `مناسبات ${Governate.ar}` },
      icon: imagepalon,
      services: [
        { en: `Party in ${Governate.en}`, ar: `حفل ${Governate.ar}` },
        { en: `Weddings in ${Governate.en}`, ar: `أفراح ${Governate.ar}` },
        { en: `Condolences in ${Governate.en}`, ar: `عزاء ${Governate.ar}` },
      ],
    },
    {
      text: { en: `Clothing in ${Governate.en}`, ar: `ملابس ${Governate.ar}` },
      icon: imageBag,
      services: [
        { en: `Perfumes in ${Governate.en}`, ar: `عطور ${Governate.ar}` },
        { en: `Beauty Products in ${Governate.en}`, ar: `تجميل ${Governate.ar}` },
      ],
    },
    {
      text: { en: `Electronics in ${Governate.en}`, ar: `إلكترونيات ${Governate.ar}` },
      icon: imageElectronics,
      services: [
        { en: `iPhone in ${Governate.en}`, ar: `آيفون ${Governate.ar}` },
        { en: `Samsung in ${Governate.en}`, ar: `سامسونج ${Governate.ar}` },
        { en: `Sony in ${Governate.en}`, ar: `سوني ${Governate.ar}` },
      ],
    },
    {
      text: { en: `Real Estate in ${Governate.en}`, ar: `عقارات ${Governate.ar}` },
      icon: imageFurniture,
      services: [
        { en: `Apartments in ${Governate.en}`, ar: `شقق ${Governate.ar}` },
        { en: `Houses in ${Governate.en}`, ar: `بيوت ${Governate.ar}` },
        { en: `Lands in ${Governate.en}`, ar: `أراضي ${Governate.ar}` },
      ],
    },
    {
      text: { en: `Services in ${Governate.en}`, ar: `خدمات ${Governate.ar}` },
      icon: imageSupplay,
      services: [
        { en: `Female Teachers in ${Governate.en}`, ar: `معلمات ${Governate.ar}` },
        { en: `Male Teachers in ${Governate.en}`, ar: `معلمين ${Governate.ar}` },
        { en: `Delivery in ${Governate.en}`, ar: `توصيل ${Governate.ar}` },
        { en: `Moving Furniture in ${Governate.en}`, ar: `نقل عفش ${Governate.ar}` },
      ],
    },
    {
      text: { en: `Used Goods in ${Governate.en}`, ar: `حراج ${Governate.ar}` },
      icon: image01,
      services: [{ en: `Used Goods in ${Governate.en}`, ar: `مستعمل ${Governate.ar}` }],
    },
    {
      text: { en: `Home Supplies in ${Governate.en}`, ar: `لوازم منزلية ${Governate.ar}` },
      icon: image02,
      services: [
        { en: `Furniture in ${Governate.en}`, ar: `أثاث ${Governate.ar}` },
        { en: `Electrical Appliances in ${Governate.en}`, ar: `أجهزة كهربائية ${Governate.ar}` },
        { en: `Furnishings in ${Governate.en}`, ar: `مفروشات ${Governate.ar}` },
        { en: `Mattresses in ${Governate.en}`, ar: `مراتب ${Governate.ar}` },
      ],
    },
    {
      text: { en: `Animals in ${Governate.en}`, ar: `حيوانات ${Governate.ar}` },
      icon: image03,
      services: [
        { en: `Sheep in ${Governate.en}`, ar: `غنم ${Governate.ar}` },
        { en: `Cats in ${Governate.en}`, ar: `قطط ${Governate.ar}` },
      ],
    },
    {
      text: { en: `Restaurants in ${Governate.en}`, ar: `مأكولات ${Governate.ar}` },
      icon: image04,
      services: [
        { en: `Cafes in ${Governate.en}`, ar: `كفيهات ${Governate.ar}` },
        { en: `Homemade Food in ${Governate.en}`, ar: `طبخ بيت ${Governate.ar}` },
        { en: `Supermarkets in ${Governate.en}`, ar: `سوبرماركت ${Governate.ar}` },
      ],
    },
    {
      text: { en: `Contractors in ${Governate.en}`, ar: `مقاولات ${Governate.ar}` },
      icon: image05,
      services: [
        { en: `Plumber in ${Governate.en}`, ar: `سباك ${Governate.ar}` },
        { en: `Electrician in ${Governate.en}`, ar: `كهربائي ${Governate.ar}` },
        { en: `Air Conditioning in ${Governate.en}`, ar: `تكييف ${Governate.ar}` },
        { en: `Carpenter in ${Governate.en}`, ar: `نجار ${Governate.ar}` },
        { en: `Aluminum Work in ${Governate.en}`, ar: `ألمنيوم ${Governate.ar}` },
        { en: `Tiles in ${Governate.en}`, ar: `بلاط ${Governate.ar}` },
        { en: `Painting in ${Governate.en}`, ar: `أصباغ ${Governate.ar}` },
        { en: `Cleaning in ${Governate.en}`, ar: `تنظيف ${Governate.ar}` },
        { en: `Satellite in ${Governate.en}`, ar: `ستلايت ${Governate.ar}` },
      ],
    },
  ];

  const Text = {
    Head1: {
      en: "Find what you need in an instant ",
      ar: "اكتشف أفضل إعلانات ",
    },
    Head2: { en: "Browse a variety of items to suit all your needs!", ar: "تصفح أصناف متنوعة تناسب كل احتياجاتك!" },
  };

  const { appSetting } = useContext(AppSettingContext);
  const [StoreLink, setStoreLink] = useState("https://apps.apple.com/sa/app");

  useEffect(() => {
    const os = getOS();
    if (os === "iOS" || os === "MacOS") {
      setStoreLink("https://apps.apple.com/sa/app");
    } else if (os === "Android" || os === "Linux") {
      setStoreLink("https://play.google.com/store/apps");
    } else {
      setStoreLink("https://apps.apple.com/sa/app");
    }
  }, []);

  return (
    <div className={`dark:bg-black ${appSetting.IsDark && "dark"} text-right`} style={{ direction: appSetting.Language == "ar" ? "rtl" : "ltr" }}>
      <div className="dark:bg-gradient-to-bl dark:from-[#000] dark:via-gray-700 dark:to-[#000]">
        <div className="container mx-auto py-[100px]" style={{ fontFamily: "Alexandria" }}>
          <div className="items-center mx-auto max-w-[1200px] px-3">
            <div className="text-center">
              <h5 className="font-semibold text-2xl ScrollEffectApper mb-10">
                <span>{Text.Head1[appSetting.Language] + Governate[appSetting.Language]}</span>
              </h5>
            </div>
            <div className="flex">
              <div
                className={`grid grid-cols-1 md:grid-cols-3 gap-3 md:flex-row md:gap-6 items-center text-center mx-auto ${
                  appSetting.Language === "ar" ? "text-right" : "text-right"
                }`}
              >
                {Data.map((item, index) => (
                  <a
                    href={StoreLink}
                    key={index}
                    className="cursor-pointer rounded-lg gap-3 shadow-xl max-w-[390px] h-[190px] p-6 transition duration-500 ease-in-out transform hover:scale-105 hover:brightness-90 ScrollEffectApper flex flex-row items-center overflow-hidden"
                  >
                    <div className="image-container w-[40%]">
                      <img className="w-[100%] object-cover transition duration-500 ease-in-out transform hover:scale-110" src={item.icon} alt="Image" />
                    </div>
                    <div className="text-container w-full my-4">
                      <h4 className="font-semibold text-lg text-center dark:text-gray-100">{item.text[appSetting.Language]}</h4>
                      <div className="mt-2">
                        {item.services.map((service, i) => (
                          <React.Fragment key={i}>
                            <span className={index === 11 ? "text-xs" : ""}>
                              {service[appSetting.Language]} {/* Display both English and Arabic */}
                            </span>
                            <span>{i === item.services.length - 1 ? "" : " - "}</span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 text-center">
              <a href={StoreLink} className="py-3 px-5 text-xs md:text-lg rounded-lg bg-gradient-to-l from-[#2375f3] to-primary text-white shadow-sm mt-4 hover:opacity-75">
                {Text.Head2[appSetting.Language]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCards;
